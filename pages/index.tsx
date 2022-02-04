import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ski Extreme</title>
        <meta
          name="description"
          content="For the believeable ski heros who ski the exreme"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ski Extreme</h1>

        <h2>Pyhät säännöt</h2>
        <ol>
          <li>
            Kaikki, jotka eivät laske frame-siteillä ovat nössöjä kanankoipia.
          </li>
          <li>Joka kolmas päivä olkoon känni</li>
          <li>Philippe ei ole teretullut</li>
          <li>Ilman kaatumista ei ole yritystä</li>
          <li>Sallitut brändit: Arcteryx, Norrona. Ei muita</li>
          <li>Red panache on jumalten juoma</li>
          <li>Erimielisyydet ratkaistaan Kiinalaisella alamäellä</li>
          <li>Joka reissulla katsotaan Apocalypse Snow 1-3</li>
          <li>Ei lautailijoita</li>
          <li>Mutta ensin, chi-chi</li>
        </ol>
      </main>
    </div>
  );
};

export default Home;
