"use client";
import React from "react";
import { useState } from "react";   
import { updateGuest } from "../_lib/actions";
import LoadingButton from "./SubmitButton";

export default function UpdateProfileForm({ guest, children}) {
 // const [count, setCount] = useState(); //needs to be client component in order to use state
  const {fullName, email, nationality, nationalId, countryFlag} = guest


  return (
    <form action={updateGuest}
    className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          readOnly
          defaultValue={fullName}
          name="fullName" // for formData to work, these names are necessary
          className="px-5 py-3 w-full shadow-sm rounded-sm bg-gray-600 text-gray-400 read-only:cursor-not-allowed"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          readOnly
          defaultValue={email}
          name="email"
          className="px-5 py-3 w-full shadow-sm rounded-sm read-only:cursor-not-allowed read-only:bg-gray-600 read-only:text-gray-400"
        
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
        
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalId">Government issued ID (Passport or National ID)</label>
        <input
          defaultValue={nationalId}
          name="nationalId"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <LoadingButton pendingLabel="Updating...">Update profile </LoadingButton>
      </div>
    </form>
  );
}
