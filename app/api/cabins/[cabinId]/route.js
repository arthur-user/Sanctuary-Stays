import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = await params;

  const cabinIdNum = Number(cabinId);

  console.log("cabinId:", cabinId);

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinIdNum),
      getBookedDatesByCabinId(cabinIdNum),
    ]);
    if (!cabin) {
      return Response.json({ message: "Cabin not found" }, { status: 404 });
    }
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    //console.error("API ERROR:", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
//other HTTP verbs can be handled, PUT, PATCH, DELETE, HEAD, and OPTIONS

/*In Next.js, we can create backend/API endpoints using a special convention file: route.js.
 This file can live inside any route segment folder that does NOT contain a page.js file.

 A route handler does NOT return HTML like a page, instead, it handles HTTP requests
 (GET, POST, PATCH, DELETE, etc.) and typically returns data (e.g., JSON or a Response).

 This is essential for cases like:
 fetching data from a database,
 handling form submissions,
 performing server-side logic (auth, validation, payments, etc.)

 Important: route.js and page.js cannot coexist in the same folder.
 This restriction exists to prevent ambiguity in handling GET requests and to maintain
 a clear boundary between UI-based navigation and programmatic API access.

 Both files would respond to the same URL path:
 page.js: handles GET requests by returning HTML (UI for the browser)
 route.js: can also handle GET requests, but returns data (JSON/Response)

 Since a single request cannot return both HTML and JSON, Next.js enforces this separation.

 Think of it as:
 page.js = frontend (what the user sees)
 route.js = backend endpoint (what your app or client calls via fetch)*/
