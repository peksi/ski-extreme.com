import { useState, useEffect } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Parallax, useParallax } from 'react-scroll-parallax';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const [audio, setAudio] = useState(false);

	const toggleAudio = () => {
		setAudio(!audio);
		// get audio element and play/pause
		const audioElement = document.getElementById('audio') as HTMLAudioElement;
		audioElement.paused ? audioElement.play() : audioElement.pause();
	};

	return (
		<Box h="100vh">
			<Head>
				<title>Ski Extreme</title>
				<meta name="description" content="For the believeable ski heroes who ski the extreme" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box position="relative" zIndex={2} height="100vh" width="100vw">
				<img
					style={{ position: 'relative', height: '100vh', width: '100vw' }}
					src="https://assets.codepen.io/721952/sky.jpg"
				/>
				<button
					className={styles.skier}
					style={
						audio
							? {
									transform: 'translate3d(0, 0, 100px) rotate3d(0, 1, 0, 180deg)',
									WebkitTransform: 'translate3d(0, 0, 100px) rotate3d(0, 1, 0, 180deg)',
							  }
							: {}
					}
					onClick={toggleAudio}
				/>
				<div>
					<img className={styles.mtnPic} src="https://assets.codepen.io/721952/mountBg.png" />
					<audio id="audio" loop>
						<source src="/ski.opus" type="audio/ogg" />
						<source src="/ski.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>
				<img
					className={styles.mtnPic}
					src="https://assets.codepen.io/721952/mountMg.png"
					alt="mountMg"
				/>
				<img
					className={styles.mtnPic}
					src="https://assets.codepen.io/721952/mountFg.png"
					alt="mountFg"
				/>
				<img
					className={styles.mtnPic}
					src="https://assets.codepen.io/721952/cloud1.png"
					alt="mountFg"
				/>
				<img
					className={styles.mtnPic}
					src="https://assets.codepen.io/721952/cloud2.png"
					alt="mountFg"
				/>
				<img
					className={styles.mtnPic}
					src="https://assets.codepen.io/721952/cloud3.png"
					alt="mountFg"
				/>
			</Box>
			<Box position="absolute" top={0} zIndex={15} w="100%" textAlign="center">
				<Heading size="4xl" color="white" mt={8}>
					SKI EXTREME
				</Heading>
			</Box>
			<Box>
				<Container pt={20} pb={200}>
					<Heading>MANIFESTO</Heading>
					<ol className={styles.manifesto}>
						<li>Kaikki, jotka eivät laske frame-siteillä ovat nössöjä kanankoipia</li>
						<li>Ei lautailijoita</li>
						<li>Joka kolmas päivä saa riipaista</li>
						<li>Jos et ikinä kaadu, et yritä tarpeeksi</li>
						<li>Jos kaadut liian usein, polta suksesi tynnyrissä</li>
						<li>Jos tarjolla on laitos, lounas syödään siellä</li>
						<li>Erimielisyydet ratkaistaan Kiinalaisella alamäellä</li>
						<li>Jokaisella reissulla katsotaan Apocalypse Snow I, II, III</li>
						<li>Puutteellinen lumiturvavarustus johtaa rangaistukseen</li>
						<li>Jos käyttäydyt Manifeston vastaisesti, otetaan suksesi takavarikkoon</li>
					</ol>
				</Container>
			</Box>
		</Box>
	);
};

export default Home;
