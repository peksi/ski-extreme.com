import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ski Extreme</title>
                <meta
                    name='description'
                    content='For the believeable ski heros who ski the exreme'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Ski Extreme</h1>
                <h2>Pyhät säännöt</h2>
                <ol>
                    <li>
                        Kaikki, jotka eivät laske frame-siteillä ovat{' '}
                        <a href='https://fi.linkedin.com/in/luukascastren'>
                            nössöjä kanankoipia.
                        </a>
                    </li>
                    <li>Joka kolmas päivä olkoon känni</li>
                    <li>Philippe ei ole tervetullut</li>
                    <li>Ilman kaatumista ei ole yritystä</li>
                    <li>Sallitut brändit: Arcteryx, Norrona. Ei muita</li>
                    <li>Red panache on jumalten juoma</li>
                    <li>
                        Erimielisyydet ratkaistaan{' '}
                        <a href='https://www.youtube.com/watch?v=_Qe3HBqFhTU'>
                            Kiinalaisella alamäellä
                        </a>
                    </li>
                    <li>
                        Joka reissulla katsotaan{' '}
                        <a href='https://www.youtube.com/watch?v=rbdUEOyryeg&t=749s'>
                            Apocalypse Snow 1-3
                        </a>
                    </li>
                    <li>Ei lautailijoita</li>
                    <li>
                        Mutta ensin,
                        <a href='https://www.youtube.com/watch?v=RxIzX2UglpA'>
                            {' '}
                            chi-chi
                        </a>
                    </li>
                </ol>
            </main>
            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
