import styles from '../components/layout.module.scss'
import Link from "next/link";
import Layout from "../components/layout";
import { EventContextProvider} from "../utils/EventContext";

export default function Home() {
    return (
        <Layout>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Link href="/add-event"><a>Add event</a></Link>
                    </div>
                </div>
        </Layout>
    )
}
