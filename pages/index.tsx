import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax, useParallax } from 'react-scroll-parallax';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Box h="100vh">
			<Head>
				<title>Ski Extreme</title>
				<meta name="description" content="For the believeable ski heros who ski the exreme" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box position="relative" zIndex={2} height="100vh" width="100vw">
				<img
					style={{ position: 'relative', height: '100vh', width: '100vw' }}
					src="https://assets.codepen.io/721952/sky.jpg"
				/>
				<Parallax speed={20}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/mountBg.png"
					/>
				</Parallax>
				<Parallax speed={50}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/mountMg.png"
						alt="mountMg"
					/>
				</Parallax>
				<Parallax speed={100}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/mountFg.png"
						alt="mountFg"
					/>
				</Parallax>
				<Parallax speed={200}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/cloud1.png"
						alt="mountFg"
					/>
				</Parallax>
				<Parallax speed={150}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/cloud2.png"
						alt="mountFg"
					/>
				</Parallax>
				<Parallax speed={150}>
					<img
						className={styles.mtnPic}
						style={{ position: 'relative', objectFit: 'cover' }}
						src="https://assets.codepen.io/721952/cloud3.png"
						alt="mountFg"
					/>
				</Parallax>
			</Box>
			<Box position="absolute" top={0} zIndex={15} w="100%" textAlign="center">
				<Heading size="4xl" color="white" mt={8}>
					SKI EXTREME
				</Heading>
			</Box>
			<Parallax speed={200} style={{ position: 'relative', zIndex: 15 }}>
				<Box height="100vh" w="100vw" bg="white" mt="-75.5vh">
					<main className={styles.main}>
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
				</Box>
			</Parallax>
		</Box>
	);
};

export default Home;
