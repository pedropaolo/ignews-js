
import { AppProps } from 'next/app'
// Para funcionar foi adicionado: declare module '*.scss'; no arquivo next-env.d.ts
import '../../styles/global.scss';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
