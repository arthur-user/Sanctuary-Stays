import { unstable_noStore as noStore } from "next/cache";

import { getCabins } from "../_lib/data-service";
import CabinCard from "@/app/components/CabinCard";

export default async function CabinList({ filter }) {
  //noStore()
  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins = cabins;
  if (filter === "all") displayedCabins = cabins;

  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 10);

  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity < 10,
    );

  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
