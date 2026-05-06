import { getCabin, getCabins, } from "@/app/_lib/data-service";
import Cabin from "@/app/components/Cabin";
import Reservation from "@/app/components/Reservation";
import Spinner from "@/app/components/Spinner";
import TextExpander from "@/app/components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
/*export const metadata = {
  title: "Cabin",
  
}*/

export async function generateMetadata({params}){
  const { cabinId } = await params; //no more needs for using params again, e.g., params.cabinId

  const id = Number(cabinId);
  if(Number.isNaN(id)){
    return { title: "Cabin not found" };
  }
  const cabin = await getCabin(id);
   if (!cabin) {
    return { title: "Cabin not found" };
  }

  return { title: `Cabin ${cabin.name}` };
}

/*Make routes static in order to be able to deploy as static page (SSG)*/

export async function generateStaticParams(){
  const cabins = await getCabins();
  
  const ids = cabins.map(cabin=>({cabinId: String(cabin.id)}))

  return ids;
}

export default async function Page({params}) {
 const { cabinId } = await params;  
 //throw new Error("Test error");
  if (!cabinId) {
    throw new Error("Missing cabinId");
  }
  console.log("cabinId:", cabinId);
const cabin = await getCabin(Number(cabinId));  //Number used to convert string into number
 if (!cabin) notFound()
/*const settings = await getSettings()
const bookedDates = await getBookedDatesByCabinId(cabinId)*/


//Promise used to run requests in parallel instead of sequentially 
/*const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;  // destructuring allows direct access to properties (e.g. name instead of cabin.name)
*/

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

    <Suspense fallback={<Spinner />}>

      <Reservation cabin={cabin}/>
    </Suspense>
        

      </div>
    </div>
  );
}


/*
 Instead of fetching all data at the parent level,
 we split the UI into smaller components where each
 component fetches only the data it needs.
 This allows components to be streamed in as they’re ready,
 improving performance and user experience compared to
 fetching everything upfront in the parent.*/

// In small/shallow trees, fetch once and pass as props.
// In larger/deep trees, fetch where needed to avoid prop drilling
// (Next.js will deduplicate identical requests via memoization).
//Why not to prop drill in deep trees: Now you pass cabin:
//Page → Layout → Section → Cabin → Reservation
//Even if only Reservation needs it. . Tight coupling 
// Every layer now depends on cabin: Refactoring pain
//Change one thing: Reservation needs one more field
//Why fetching locally is better (in deep trees): No props needed,
// Fully independent component, still only ONE real fetch