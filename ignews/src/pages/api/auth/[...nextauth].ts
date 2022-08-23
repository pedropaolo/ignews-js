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
      console.log("SKIIIIIIIIIIIIIIRL" , user)

      // Verifica se usuário ja existe no banco
      // Caso exista, resgata os dados do mesmo
      // Caso não exista, cria um novo usuário no bando

      // OBS: PERMITE A CRIAÇÂO DE USUARIOS DUPLICADOS

      try {
        await fauna.query(
            q.Create(
              q.Collection('users'),
              { data : { email }}
            )
          )
         
         return true
      }

      catch {
        return false
      }
     
     
    },
  }
})