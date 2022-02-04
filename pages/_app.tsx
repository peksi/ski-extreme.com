import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<ParallaxProvider>
				<Component {...pageProps} />
			</ParallaxProvider>
		</ChakraProvider>
	);
}

export default MyApp;
