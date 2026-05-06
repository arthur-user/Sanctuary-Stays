import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="flex flex-col border border-primary-800 min-h-100">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
    </div>
  );
}

/*

`params` is only available in route-level components (e.g., page.js, 
layout.js). This component does NOT receive `params` automatically since it 
is a nested Server Component.

Instead, we pass `cabin` down from the parent page as a prop:
 <Reservation cabin={cabin} />

This makes `cabin.id` available here and avoids relying on routing context.
It also keeps the component more reusable and aligned with Next.js data 
flow patterns.

*/
