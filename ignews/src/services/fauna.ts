import { Client } from 'faunadb'

// Acessando a API do fauna através da chave secreta gerada

export const fauna = new Client({
    secret: process.env.FAUNA_KEY as string,
})