import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../Components/Header/Header';
import MainContent from '../Components/main_content/MainContent';
import Hero from '../Components/heroSection/Hero';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>Xomos1</title>
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='description' content='Electronics and miscellaneous items whole sales' />
			</Head>
			<Hero />
			<Link href='/about'>
				<a>About link</a>
			</Link>

			{/* <MainContent /> */}
		</>
	);
};

export default Home;
