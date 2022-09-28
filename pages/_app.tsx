import * as React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../Components/Layout';
import { ChakraProvider, Text } from '@chakra-ui/react';

import theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';
// import NProgress from 'next-nprogress-emotion';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', (url) => {
	NProgress.done();
});
Router.events.on('routeChangeError', (url) => {
	NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider theme={theme}>
				{/* <NextNProgress /> */}
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
