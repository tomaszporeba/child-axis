import React from 'react';
import {GlobalContextProvider} from "../utils/GlobalContext";
import Content from "../src/components/content";
import Axis from "../src/components/axis";



export default function Home(): JSX.Element {
    return (
        <GlobalContextProvider>
                <Content/>
        </GlobalContextProvider>
    )
}
