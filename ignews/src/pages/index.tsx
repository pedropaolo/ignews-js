import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'


export default function Home() {
  return (
    <>
     <Head>
      <title>Home | ig.nes</title>
     </Head>

     <main className={styles.contentContainer}>

      {/* Conteúdo em texto apresentado antes do login */}

      <section className={styles.hero}>

        <span>Seja Bem-Vindo!</span>

        <h1>
          Novidades sobre o mundo   do <span>React</span>
        </h1>

        <p>
          Garanta acesso às todas as publicações por <span>R$ 9.99/mês</span>
        </p>

      <SubscribeButton />


      </section>

      {/* SVG apresentado antes do login */}

      <img src="/images/avatar.svg" alt="Garota programando" />



     </main>


    </>
  )
}
