import { Input, Icon, InputGroup, InputRightElement, Box } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import * as React from 'react';

type Props = {
	px?: string;
};

export default function SearchBox(props: Props) {
	return (
		<Box w='100%' alignContent='center' {...props}>
			<InputGroup>
				<InputRightElement children={<Icon as={BiSearch} color='indigoDye.700' boxSize='1.5rem' />} />
				<Input type='search' bg='indigoDye.50' />
			</InputGroup>
		</Box>
	);
}
