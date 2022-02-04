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
          content="For the believeable ski heroes who ski the exreme"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SKI EXTREME</h1>
        <h2>Manifesto</h2>
        <ol className={styles.manifesto}>
          <li>
            Kaikki, jotka eivät laske frame-siteillä ovat nössöjä kanankoipia
          </li>
          <li>Joka kolmas päivä saa juoda kaljaa</li>
          <li>Philippe ei ole tervetullut</li>
          <li>Jos et ikinä kaadu, et yritä tarpeeksi</li>
          <li>Jos kaadut liian usein, polta suksesi tynnyrissä</li>
          <li>Red panache on jumalten juoma</li>
          <li>
            Erimielisyydet ratkaistaan{" "}
            <a
              href="https://www.youtube.com/watch?v=_Qe3HBqFhTU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kiinalaisella alamäellä
            </a>
          </li>
          <li>
            Joka reissulla katsotaan Apocalypse Snow{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=rbdUEOyryeg"
              rel="noopener noreferrer"
            >
              I
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=pdO-jllFqmA"
              rel="noopener noreferrer"
            >
              II
            </a>{" "}
            ja{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=n4A7ssN2xy0"
              rel="noopener noreferrer"
            >
              III
            </a>
          </li>
          <li>Ei lautailijoita</li>
          <li>Mutta ensin, chi-chi</li>
        </ol>
      </main>
    </div>
  );
};

export default Home;
