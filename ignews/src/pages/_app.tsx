
import { AppProps } from 'next/app'
// Para funcionar foi adicionado: declare module '*.scss'; no arquivo next-env.d.ts
import '../../styles/global.scss';
import { Header } from '../components/Header';

import { SessionProvider as NextAuthProvider } from 'next-auth/react'

function MyApp({ Component, pageProps } : AppProps) {
  return (

    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>

  )
  
}

export default MyApp
