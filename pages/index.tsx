import type { NextPage } from 'next';
import Head from 'next/head';
import CustomCarousel from '../Components/heroSection/Carousel';
import Carousel from '../Components/heroSection/Carousel';
import Hero from '../Components/heroSection/Hero';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>Xomos1</title>
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='description' content='Electronics and miscellaneous items whole sales' />
			</Head>
			<CustomCarousel />
		</>
	);
};

export default Home;
