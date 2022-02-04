import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box
        w="100vw"
        h="70vh"
        zIndex="-1"
        position="absolute"
        bg="blue.100"
      ></Box>
      <Box
        w="100vw"
        h="30vh"
        top="70vh"
        zIndex="-1"
        position="absolute"
        bgGradient={["linear(to-b, blue.100, blue.300)"]}
      ></Box>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
