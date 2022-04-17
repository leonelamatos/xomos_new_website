import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';

const UserLoginIcon = () => {
	return (
		<Box sx={{_hover: { cursor: 'pointer' } }}>
			<Icon as={FiUser} boxSize='1.8rem' mr='10px'/>
		</Box>
	);
};

export default UserLoginIcon;
