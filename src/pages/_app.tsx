import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/React-Avancado/boilerplate/3e43f7d917b79a2875d1eeb1fe0794460e88ae3a/public/img/icon-192.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://raw.githubusercontent.com/React-Avancado/boilerplate/3e43f7d917b79a2875d1eeb1fe0794460e88ae3a/public/img/icon-192.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
