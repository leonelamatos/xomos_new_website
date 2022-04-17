import React from 'react';
import { Box, Center, Container, Flex } from '@chakra-ui/react';

import Carousel from 'nuka-carousel';

const CustomCarousel = () => {
	const settings = {
		pagingDotsStyle: {
			fill: '#fff',
			width: '20px',
			'.paging-dot': {
				width: '10',
				height: '10',
			},
		},
	};

	return (
		<Container maxW='1440px' px={0} overflow='none'>
			<Carousel
				wrapAround={true}
				autoplay={true}
				autoplayInterval={6000}
				defaultControlsConfig={settings}
				swiping={true}
				style={{
					background: 'orange',
					'& .paging-dot': {
						width: '10',
						height: '10',
					},
				}}
			>
				<Box color='#fff' as='span'>
					<Center bg='tomato' h={['200px', '400px']}>
						1
					</Center>
				</Box>
				<Box color='#fff'>
					<Center bg='red' h={['200px', '400px']}>
						2
					</Center>
				</Box>
				<Box color='#fff'>
					<Center bg='green' h={['200px', '400px']}>
						3
					</Center>
				</Box>
				<Box color='#fff'>
					<Center bg='orange' h={['200px', '400px']}>
						4
					</Center>
				</Box>
				<Box color='#fff'>
					<Center bg='blue' h={['200px', '400px']}>
						5
					</Center>
				</Box>
				<Box>
					<Center bg='indigo' h={['200px', '400px']}>
						6
					</Center>
				</Box>
			</Carousel>
		</Container>
	);
};

export default CustomCarousel;
