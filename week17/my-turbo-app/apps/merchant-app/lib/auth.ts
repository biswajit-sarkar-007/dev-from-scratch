import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";
import db from "@repo/db/client";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("hi signin");

      // Handle possible undefined or null fields
      if (!user?.email) {
        console.error("No email found for user");
        return false;
      }

      const email = user.email;
      const name = user.name ?? "Unknown";

      await db.merchant.upsert({
        select: { id: true },
        where: { email },
        create: {
          email,
          name,
          auth_type:
            account?.provider === "google" ? "Google" : "Github",
        },
        update: {
          name,
          auth_type:
            account?.provider === "google" ? "Google" : "Github",
        },
      });

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
