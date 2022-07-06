
import { AppProps } from 'next/app'
// Para funcionar foi adicionado: declare module '*.scss'; no arquivo next-env.d.ts
import '../../styles/global.scss';
import { Header } from './components/Header';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>

  )
  
}

export default MyApp
