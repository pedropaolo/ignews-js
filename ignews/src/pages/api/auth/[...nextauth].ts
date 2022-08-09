import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { signIn } from "next-auth/react"
import { query as q } from 'faunadb'

import { fauna } from '../../../services/fauna'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'}
      }
    }),
    // ...add more providers here
  ],

  callbacks: {

    // Inserção do usuário no banco de dados

    async signIn({ user, account, profile }) {

      const { email } = user;
        await fauna.query(
          q.Create(
            q.Collection("users"),
            { data: { email: email }}
          )
        )

        return true
     
     
    },
  }
})