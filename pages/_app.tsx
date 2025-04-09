import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GovHQ - Government Services Directory</title>
        <meta name="description" content="The comprehensive directory for government services and resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
