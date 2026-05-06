import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import SelectCountry from "@/app/components/SelectCountry";
import UpdateProfileForm from "@/app/components/UpdateProfileForm";

export const metadata ={
  title: "Update Your Profile"
}
export default async function Page() {
  const session = await auth()
  const guest = await getGuest(session.user.email)



  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
    {console.log("GUEST DATA:", guest)}
      <UpdateProfileForm guest={guest}> 
    <SelectCountry  /* <-- server component being passed into  client comp UppdateProfileForm
  We pass SelectCountry (Server Component) as a child to UpdateProfileForm (Client Component).

  This uses the composition pattern: the Server Component is rendered on the server,
  and its output is passed into the Client Component as children.

  This avoids importing a Server Component directly into a Client Component (not allowed),
  while still keeping data fetching on the server and interactivity in the client.
*/
              name="nationality"
              id="nationality"
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              defaultCountry={guest?.nationality || ""}
            />

      </UpdateProfileForm>
    </div>
  );
}



