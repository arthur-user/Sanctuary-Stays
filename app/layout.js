import Header from "./components/Header";
import Logo from "@/app/components/Logo";
import Navigation from "./components/Navigation";
import "./globals.css";

import { Trispace } from "next/font/google"; //solves GDPR & Privacy + caching
import { ReservationProvider } from "./components/ReservationContext";

const inter = Trispace({
  subsets: ["latin"],
  display: "swap",
});

console.log(inter);



export const metadata = {
  //title: 'The Wild Oasis',
  title: {
    template: "%s | The Wild Oasis", // %s is a required placeholder for placing the page's title
    default: "Welcome The Wild Oasis",
  },
  description:
    "Luxurious Cabin hotel located in the pristine area of Venice, Italy", //SEO
};
/* layout.js in the app folder defines the root layout shared across the entire app.
   Other route segments can define their own layout.js files to create nested layouts. */
// layout.js
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* h-screen here is vital so children can inherit 100% height */}
      <body className={`${inter.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        
        {/* The Header stays at the top */}
        <Header />

        {/* The Main container grows to fill the rest of the screen */}
        <div className="flex-1 grid "> {/* Grid ensures that div will occupy the entire remaining vertical space */}
<main className="max-w-7xl mx-auto w-full px-8 py-12">
            <ReservationProvider> {children}</ReservationProvider>
           {/* You can nest a Server Component inside a Client Component by passing it as children (or props), as long as it’s rendered on the server first. */ }
          </main>
        </div>

      </body>
    </html>
  );
}

/*
layout.js creates height
        ↓
page.js inherits that height
        ↓
Image fill uses that height

“relative" defines the boundaries that the image is contained within.
*/