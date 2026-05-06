import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/actions';

// Server Component (no "use client" directive = Server Component by default in App Router).
// Component type is determined per-file, not by the parent rendering it.
// Using <form action={serverAction}> to invoke the sign-out Server Action.

function SignOutButton() {
  return (
    <form action={signOutAction}>
    <button className='py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full cursor-pointer'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
      <span>Sign out</span>
    </button></form>
  );
}

export default SignOutButton;
