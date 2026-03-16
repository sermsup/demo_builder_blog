import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_SESSION_MAX_AGE || "1800"),
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
