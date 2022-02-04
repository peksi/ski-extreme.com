import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ski Extreme</title>
				<meta name="description" content="For the believeable ski heros who ski the exreme" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>SKI EXTREME</h1>
				<h2>MANIFESTO</h2>
				<ol className={styles.manifesto}>
					<li>Kaikki, jotka eivät laske frame-siteillä ovat nössöjä kanankoipia</li>
					<li>Joka kolmas päivä voi juoda kaljaa</li>
					<li>Jos et ikinä kaadu, et yritä tarpeeksi</li>
					<li>Jos kaadut liian usein, polta suksesi tynnyrissä</li>
					<li>Lounas syödään laitoksessa (EI à la carte)</li>
					<li>Lempijuomasi on Red Panaché</li>
					<li>Erimielisyydet ratkaistaan Kiinalaisella alamäellä</li>
					<li>Jokaisella reissulla katsotaan Apocalypse Snow I, II, III</li>
					<li>Ei lautailijoita</li>
					<li>
						Jos käyttäydyt Manifeston vastaisesti, otetaan suksesi takavarikkoon (mutta ensin,
						chi-chi)
					</li>
				</ol>
			</main>
		</div>
	);
};

export default Home;
