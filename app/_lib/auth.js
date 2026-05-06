import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  callbacks: {
    authorized({auth, request}){
     if (!auth?.user) return false;
     return true;
    },   // built-in callbacks (signIn, jwt, session = auth flow; authorized = middleware) + config (pages)
    async signIn({user, account, profile}){ //async method
      try {const existingGuest = await getGuest(user.email);
        if(!existingGuest) await createGuest({email: user.email, fullName: user.name}); //must be awaited, so it doesn't skip to login
        return true;  // if everything okay, return true
      } catch {
        return false; // otherwise, return false
      }
    }, 
    async session({ session, user }){
      const guest = await getGuest(session.user.email)
      console.log("AUTH CALLBACK GUEST:", guest); // Check your terminal when you refresh the page
      session.user.guestId = guest.guestId
      return session;
    }
  },
  pages: {
    signIn: '/login',
  }
};

export const {auth,signIn,signOut,handlers: { GET, POST }, } = NextAuth(authConfig); //destructuring
// `auth` reads the current session (via cookies) in server environments (e.g., Server Components, Route Handlers);
// it can also be used inside middleware for auth checks, but is not middleware itself