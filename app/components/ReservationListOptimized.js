"use client"

import React, { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteReservation } from '../_lib/actions';

export default function ReservationList({bookings}) {

   const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currentBookings, bookingId) => { // reducer: takes current state + action (bookingId) and returns the next state
    return currentBookings.filter(booking => booking.id !== bookingId); //only keep bookings that are diff from those passed in, ie, delete the same
   }); // Shows a predicted UI state while a server update is in progress
        //state                 // dispatcher


    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteReservation(bookingId);
        //not a reducer, as it's async; it's coordinating actions
    }



  return (
     <ul className="space-y-6">
          {optimisticBookings.map((booking) => (
            <ReservationCard booking={booking} onDelete={handleDelete} key={booking.id} />
          ))}
        </ul>
  )
}
