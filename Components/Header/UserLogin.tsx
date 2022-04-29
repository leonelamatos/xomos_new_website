import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { RiUser3Line } from 'react-icons/ri';

const UserLoginIcon = () => {
	return (
		<Box sx={{ _hover: { cursor: 'pointer' } }}>
			<Icon as={RiUser3Line} boxSize='1.8rem' mr='10px' />
		</Box>
	);
};

export default UserLoginIcon;
