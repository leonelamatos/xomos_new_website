import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '@chakra-ui/react';
import CategoryMenu from '../Components/CategoryMenu';
import CustomCarousel from '../Components/heroSection/Carousel';
import Content from '../Components/content';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>Xomos1</title>
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='description' content='Electronics and miscellaneous items whole sales' />
			</Head>
			<Container maxW={1275}>
				<CustomCarousel />
				<CategoryMenu />
				<Content />
			</Container>
		</>
	);
};

export default Home;
