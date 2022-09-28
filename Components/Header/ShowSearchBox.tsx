import { Hide, Show } from '@chakra-ui/react';
import React from 'react';
import SearchBox from './SearchBox';

type Props = {
	smallScreen?: boolean;
};

const ShowSearchBox = ({ smallScreen }: Props) => {
	return (
		<>
			{smallScreen ? (
				<Show below='md'>
					<SearchBox />
				</Show>
			) : (
				<Hide below='md'>
					<SearchBox px='20px' />
				</Hide>
			)}
		</>
	);
};

export default ShowSearchBox;
