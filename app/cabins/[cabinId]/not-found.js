import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-10">
      <h1 className="text-3xl font-semibold">Cabin not found</h1>
      <p className="text-lg">This cabin does not exist.</p>
      <Link
        href='/'
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
      >
        Go back home
      </Link>
    </main>
  );
}