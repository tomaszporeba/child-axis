import { AppProps } from 'next/app'
import {Component} from "react";
import {EventContextProvider} from "../utils/EventContext";

function App({ Component, pageProps }: AppProps) {
  return (
  <EventContextProvider>
    <Component {...pageProps} />
  </EventContextProvider>)
}

export default App