import Head from "next/head"
import HomePage from "../src/pages/home_page"

const Home = () => {
    return (
        <>
        <Head>
            <title>MEDBOX | Client</title>
        </Head>
        <HomePage/>
        </>
    )
}

export default Home;