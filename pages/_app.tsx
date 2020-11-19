import {AppProps} from 'next/app'
import React, {Component} from "react";
import {EventContextProvider} from "../utils/EventContext";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Sidebar from "../src/components/sidebar";
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <EventContextProvider>
                    <Header/>
                    <Component {...pageProps} />
                    <Sidebar/>
                    <Footer/>
                </EventContextProvider>
            </ThemeProvider>
        </>)
}

export default App