import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  pages: {
    signIn: '/signin'
  },
  providers: [
    GithubProvider({
        clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
        clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
    }),
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username: ",
            type: "text",
            placeholder: "Enter you username"
          },
          password: {
            label: "Password: ",
            type: "password",
            placeholder: "Enter your password",
          }
        },
      async authorize (credentials) {
        let id;
        let isSubscribed = false
        const usersResponse = await fetch('http://localhost:3000/api/users')
        const usersData = await usersResponse.json()
        
        usersData.forEach(element => {
            if (element.username === credentials.username && element.password === credentials.password) {
                id = element._id
                isSubscribed = true
                return
            }
        })
        if (isSubscribed === true) {
          const userResponse = await fetch(`http://localhost:3000/api/users/${id}`)
          const userData = await userResponse.json()
    
          if (credentials?.username === userData.username && credentials?.password === userData.password) {
            return userData
          } else {
            return null
          }
        }
      }
    }),
  ],
})
export { handler as GET, handler as POST }