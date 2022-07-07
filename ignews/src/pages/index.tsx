import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomePropos {
  product: {
    priceId: string,
    amount: number
  }
}


export default function Home( {product}) {
  return (
    <>
     <Head>
      <title>Home | ig.nes</title>
     </Head>

     <main className={styles.contentContainer}>

      {/* Conteúdo em texto apresentado antes do login */}

      <section className={styles.hero}>

        <span>👏 Seja Bem-Vindo!</span>

        <h1>
          Novidades sobre o mundo   do <span>React</span>
        </h1>

        <p>
          Garanta acesso às todas as publicações por <br />
          <span>{product.amount}</span>
        </p>

      <SubscribeButton priceId={product.priceId}/>


      </section>

      {/* SVG apresentado antes do login */}

      <img src="/images/avatar.svg" alt="Garota programando" />



     </main>


    </>
  )
}

// Executar no servidor node do Nextjs

export const getServerSideProps: GetServerSideProps = async () => {

  // Dentro dessa função é possível devolver : redirect , props ou notfound

  // Tudo que for tratado como props: dentro do retorno desta função pode ser acessado como componente dentro da função Home()

  const price = await stripe.prices.retrieve('price_1LIwikL0cZ7rDjqg0CvWeiS7')

 const product = {
  priceId: price.id,
  amount: new Intl.NumberFormat('pt-BR' , {
      style: 'currency',
      currency: 'BRL'
  }).format(price.unit_amount / 100), 
 }

  return {
    props: {
      product,
    }

  }

}
