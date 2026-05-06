import Link from "next/link";
import { auth } from "../_lib/auth";


export default async function Navigation() {
  const session = await auth(); // Reads request-specific data (cookies), making this route dynamic
  console.log(session)
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
  <Link
    href="/account"
    className="flex items-center gap-4 hover:text-accent-400 transition-colors"
  >
    {session?.user?.image && (
      <img
        className="h-8 rounded-full"
        src={session.user.image}
        alt={session.user.name || "User profile"}
        referrerPolicy="no-referrer"   // Prevents sending referrer info; required for some providers (e.g., Google avatars)
      />
    )}
    <span>Guest area</span>
  </Link>
</li>
      </ul>
    </nav>
  );
}
