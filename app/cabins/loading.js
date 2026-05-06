import Spinner from "@/app/components/Spinner";

/*Having loading.js activates, and streaming activates JS, which means that if JS is disabled, the website section won't work*/
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Spinner />
      <p className="text-xl text-primary-100">Loading cabin data...</p>
    </div>
  );
}