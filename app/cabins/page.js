import { Suspense } from "react";
import CabinList from "../components/CabinList";
import Spinner from "../components/Spinner";
import Filter from "../components/Filter";
import ReservationReminder from "../components/ReservationReminder";

//export const revalidate = 0; //disables static caching
//export const revalidate = 1800; //every 30m No effect, since page is dynamic due to searchParams

export const metadata = {
  title: "Cabins",
};


export default async function Page({searchParams}) {
    const awaitedSearchParams = await searchParams; // Next.js only injects searchParams into page/route segments; pass them to nested Server Components if needed

  const filter = awaitedSearchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

<div className="flex justify-left mb-8" >
      <Filter /></div>
    <Suspense fallback={<Spinner /> } key={filter}> {/* unique key ensures the spinner loading */}
            {<CabinList filter={filter} />} {/* Always good to move data fetching to the place that needs it; hence the separation here with CabinList */}
    <ReservationReminder />
    </Suspense>
    </div>
  );
}
