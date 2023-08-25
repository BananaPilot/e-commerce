import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail: ",
          type: "text",
          placeholder: "Enter you e-mial",
        },
        password: {
          label: "Password: ",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        let id;
        let isSubscribed = false;
        const usersResponse = await fetch(process.env.NEXT_PUBLIC_USER_API);
        const usersData = await usersResponse.json();

        usersData.forEach((element) => {
          if (
            element.email === credentials.email &&
            element.password === credentials.password
          ) {
            id = element._id;
            isSubscribed = true;
            return;
          }
        });
        if (isSubscribed === true) {
          const userResponse = await fetch(
            `${process.env.NEXT_PUBLIC_USER_API}/${id}`
          );
          const userData = await userResponse.json();

          if (
            credentials?.email === userData.email &&
            credentials?.password === userData.password
          ) {
            return userData;
          } else {
            return null;
          }
        }
      },
    }),
  ],
});
export { handler as GET, handler as POST };
