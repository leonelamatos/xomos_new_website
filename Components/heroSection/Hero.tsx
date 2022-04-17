import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
	return (
		<Center w='100%' h={['10rem','15rem', '20rem']} overflow='hidden'>
			<Box bg='orange' maxW='1400px'>
				<Image src='/images/pexels-lex-photography-1109543.jpeg' />
			</Box>
		</Center>
	);
};

export default Hero;
