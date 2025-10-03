import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
  const cabinsDetails = await getCabins();
  if (!cabinsDetails.length) return;

  let displayCabins;
  if (filter === "all") displayCabins = cabinsDetails;
  if (filter === "small")
    displayCabins = cabinsDetails.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayCabins = cabinsDetails.filter(
      (cabin) => cabin.maxCapacity >= 5 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayCabins = cabinsDetails.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
