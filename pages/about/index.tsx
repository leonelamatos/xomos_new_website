import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {};
const About: NextPage = (props: Props) => {
	return (
		<Link href='/'>
			<a>Home link</a>
		</Link>
	);
};

export default About;
