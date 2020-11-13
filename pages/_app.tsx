import { AppProps } from 'next/app'
import {Component} from "react";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App