import Head from "next/head";
import ClinicPage from "../src/pages/clinic_page";
import HomePage from "../src/pages/home_page";

const Home = () => {
  return (
    <>
      <Head>
        <title>MEDBOX | Клиника</title>
      </Head>
      <ClinicPage />
    </>
  );
};

export default Home;
