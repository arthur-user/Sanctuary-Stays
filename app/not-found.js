import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-10">
      <h1 className="text-3xl font-semibold">This page does not exist.</h1>
      <p className="text-lg">This page does not exist.</p>
      <Link
        href='/cabins'
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
      >
        Back to all cabins
      </Link>
    </main>
  );
}