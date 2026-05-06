"use server"; // for defining server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import {  redirect } from 'next/navigation'

export async function createBooking(formData, bookingData){
  const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const newBooking = {
      ...bookingData,
      guestId: session.user.guestId,
      numGuests: Number(formData.get("numGuests")),
      observations: formData.get("observations").slice(0,1000),
      extraPrice: 0,
      totalPrice: bookingData.cabinPrice,
      isPaid: false,
      hasBreakfast: false,
      status: 'unconfirmed',
      hasBreakfast: bookingData.hasBreakfast,
    }
    //console.log(newBooking);

    const { error } = await supabase
    .from('bookings')
    .insert([newBooking])


  if (error) {
    throw new Error('Booking could not be created');
  }
  revalidatePath(`/cabins/${bookingData.cabinId}`);       //will almost always need to revalidate so the browser cache will be re-fetched and re-filled with fresh data

  redirect('/cabins/thankyou');
}

export async function signInWithGoogle() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signInWithGithub() {
  await signIn('github', { redirectTo: '/account' });
}

export async function signInWithDiscord() {
  await signIn('discord', { redirectTo: '/account' });
}

export async function signOutAction(){
    await signOut({ redirect: '/' })
}

export async function updateGuest(formData) {

  const session = await auth()

  if(!session) throw new Error('Please log in'); // common practice in server actions to not use try catch declarations, but throw errors

  const guestId = session?.user?.guestId;

  if (!guestId) {
    throw new Error("Session expired or invalid. Please log out and log back in.");
  }
  const nationalId = formData.get('nationalId');
  const [nationality, countryFlag] = formData.get('nationality').split('%');
  
  // CHECK THIS IN YOUR TERMINAL
  console.log("RAW VALUE RECEIVED:", `"${nationalId}"`);
  if (!/^[a-z0-9]{5,20}$/i.test(nationalId)) throw new Error('Please enter a valid ID number')

    const updateData = { nationality, countryFlag, nationalId };

const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('guestId', session.user.guestId)

  if (error) {
  console.log("ACTUAL SUPABASE ERROR:", error.message);
  console.log("ATTEMPTED ID:", session.user.guestId);
  console.log("DATA SENT:", updateData);
  throw new Error(error.message); // This will show the real error in the browser
}

  revalidatePath('/account/profile')
//Invalidates anything cached for this route; force fresh data next render.
  }

  export async function deleteReservation(bookingId){
    //await new Promise((res) => setTimeout(res, 5000));

    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map(booking=>booking.id);

    if(!guestBookingIds.includes(bookingId)) {
      console.error(`Security Warning: User ${session.user.guestId} attempted to delete Booking ${bookingId}`);
      throw new Error("Access denied");
    }
    const { error } = await supabase.from("bookings").delete().eq("id", bookingId);

    if (error) {
      throw new Error("Booking could not be deleted");

    }
  revalidatePath('/account/reservations')

  }

  export async function updateBooking(formData){

  const bookingId = Number(formData.get('bookingId'));

    //Authentication
      const session = await auth();
    if (!session) throw new Error("You must be logged in");

    // Authorization
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map(booking=>booking.id);

    if(!guestBookingIds.includes(bookingId)) {
      console.error(`Security Warning: User ${session.user.guestId} attempted to update Booking ${bookingId}`);
      throw new Error("Access denied");
    }

    // Building update data
    const updateData = {numGuests: Number(formData.get('numGuests')),
      observations: formData.get('observations').slice(0,1000), //protection from spamming
    }


    // DB mutations
    const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

    if(error){
      throw new Error("Bookings could not be updated")
    }
    // revalidation; should happen before redirecting
    revalidatePath('/account/reservations');
    revalidatePath(`/account/reservations/edit/${bookingId}`)

    // redirect
    redirect('/account/reservations')
  }
  