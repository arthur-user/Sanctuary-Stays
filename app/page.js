// app/page.js
import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        fill
        priority
        quality={80}
        placeholder="blur"
        className="object-cover object-top"
        alt="Cabins surrounded by forest"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-200 mb-4">
          Welcome to
        </p>

        <h1 className="text-6xl md:text-8xl font-light text-primary-50 tracking-tight leading-tight mb-6">
          Your Sanctuary
        </h1>

        <p className="max-w-xl text-primary-50/90 text-lg md:text-xl mb-10">
          Escape to a place where comfort meets elegance. Discover unforgettable
          memories, breathtaking views, and world-class hospitality.
        </p>

        <Link href="/cabins">
          <button className="bg-primary-50/90 hover:bg-accent-600 text-primary-900 hover:text-yellow-50 px-8 py-3 rounded-full text-sm tracking-wide transition-all shadow-lg backdrop-blur-sm cursor-pointer">
            Book Your Stay
          </button>
        </Link>
      </div>
    </>
  );
}
