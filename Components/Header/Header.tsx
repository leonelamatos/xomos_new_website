import { Box, Container, Flex, Heading, Icon, Spacer, HStack, Show, Hide } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import ShoppingCart from '../shopingCard/ShoppingCard';
import HamburgerMenu from './HamMenu';
import SearchBox from './SearchBox';
import ShowSearchBox from './ShowSearchBox';
import UserLoginIcon from './UserLogin';

const Header = () => {
	return (
		<>
			<Box as='header' py='20px' bg='indigoDye.900' color='indigoDye.50'>
				<Container maxW='1440px'>
					<HStack alignItems='center' mb='15px'>
						<Heading as='h3' size='lg' lineHeight='base'>
							Xomos1
						</Heading>
						<Spacer />
						<ShowSearchBox />
						<UserLoginIcon />
						<ShoppingCart />
						<HamburgerMenu />
					</HStack>
					<ShowSearchBox smallScreen />
				</Container>
			</Box>
		</>
	);
};

export default Header;
