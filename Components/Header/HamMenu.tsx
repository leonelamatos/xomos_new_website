import React from 'react';
import { Box, Icon, Show } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
	return (
		<Show below='md'>
			<Box>
				<Icon as={GiHamburgerMenu} fontSize={['3xl']} ml={4} />
			</Box>
		</Show>
	);
};

export default HamburgerMenu;
