import Stripe from 'stripe'
import { version } from '../../package.json'

export const stripe = new Stripe(

    // primeiro param: chave stripe
    // segundo param: infos obrigatorias API
    //versão do software é atualizada automaticamente do package.json

    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignews',
            version,
        }
    }

)