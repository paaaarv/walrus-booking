import 'components/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { Fragment } from "react";
import Head from 'next/head';
export default function App({ Component, pageProps }) {

  return (
  <Fragment>
    <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-xxx" crossorigin="anonymous" />
      </Head>

  
    <Component {...pageProps} />
  </Fragment>
  )
}
