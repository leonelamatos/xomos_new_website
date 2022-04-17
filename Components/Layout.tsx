import * as React from 'react';
import { Footer } from './Footer';
import Header  from './Header/Header';

type props = {
	children: React.ReactChild[] | React.ReactChild;
};

export default function Layout({ children }: props) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
