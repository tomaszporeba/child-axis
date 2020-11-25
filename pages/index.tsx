import styles from '../src/components/layout.module.scss'
import Link from "next/link";
import React from 'react';
import Layout from "../src/components/layout";
import { EventContextProvider} from "../utils/EventContext";
import Content from "../src/components/content";
import Axis from "../src/components/axis";
import Footer from "../src/components/footer";

export default function Home(): JSX.Element {
    return (
            <EventContextProvider>
                <Content/>
                <Axis/>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Link href="/add-event"><a>Add event</a></Link>
                    </div>
                </div>
            </EventContextProvider>
    )
}
