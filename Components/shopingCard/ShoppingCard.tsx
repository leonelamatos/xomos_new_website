import { Icon, Badge, Box } from '@chakra-ui/react';
import * as React from 'react';

import { FiShoppingBag } from 'react-icons/fi';

export default function ShoppingCart() {
	return (
		<Box position='relative'>
			<Badge position='absolute' bg='sunglow.500' bottom={-1} right={-2} borderRadius={50} fontSize='.7rem' fontWeight={700}>
				4
			</Badge>
			<Icon as={FiShoppingBag} fontSize='2xl' />
		</Box>
	);
}
