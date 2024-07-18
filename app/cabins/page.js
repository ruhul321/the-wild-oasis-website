import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import CabinList from "@/app/_components/CabinList";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
//import { useSearchParams } from "next/navigation";

export const revalidate = 3600; //data refetch from DB once per hour(60*60)in seconds.
// export const revalidate = 10;

export const metadata = {
  title: "Cabins",
};
//searchParams is the dynamic values that we get access from /cabins?capacity=small route like..{capacity:'small'}
export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  // console.log(filter);
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

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
