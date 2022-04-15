import * as React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../Components/Layout';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';
// import NProgress from 'next-nprogress-emotion';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NextNProgress />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
