"use client"
import { useFormStatus } from "react-dom";  //when using a form

export default function LoadingButton ({children, pendingLabel}) {
  const {pending} = useFormStatus();  // react hook; Must be used in a component rendered inside the form (server or client component).

  return <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" disabled={pending}>
          {pending ?  pendingLabel : children}
                  </button>
}