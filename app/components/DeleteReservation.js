"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '../_lib/actions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition ] = useTransition() // immediately destructure
  
  function handleDelete() {
    if(confirm("Do you really want to delete your reservation?"))
    startTransition(()=> onDelete(bookingId))
  }
  return (
    // can't use useFormStatus as not using a form, but can use React useTransition hook instead
    <button onClick={handleDelete} disabled={isPending} // Prevents extra clicks during execution
    className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 cursor-pointer '>
      {!isPending ? ( //default state: show delete action
        <>
        <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
        </> 
    ) : ( // pending state: show loading spinner
      <span className='mx-auto'>  {/* centering */}
      <SpinnerMini />
    </span>
    )}
     </button>
  );
}

export default DeleteReservation;
