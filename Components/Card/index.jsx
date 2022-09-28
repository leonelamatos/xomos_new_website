import {
	Box,
	Heading,
	Image,
	Stack,
	Text,
	Icon,
	Link,
	Tag,
	Flex,
	Button,
	AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import data from "../../data.json";

import { AiTwotoneStar } from "react-icons/ai";
// import Link from 'next/link';

function Card() {
	// const porcentage = data.discountPercentage / 100;
	const discount = data.price - data.discount;
	return (
		<Stack>
			<Box w='100%' maxW="18rem" borderWidth="1px" borderRadius="lg" overflow='hidden'>
			<AspectRatio maxW='400px'ratio={4/3}>
					<Image src={data.images[3]} />
					</AspectRatio>
				<Flex p={3}  direction='column' h='15rem' >
					<Link fontSize={14} fontWeight="bold" py={1} color="blue.500">
						{data.title}
					</Link>
					<Stack direction="row">
						<Icon as={AiTwotoneStar} />
						<Icon as={AiTwotoneStar} />
						<Icon as={AiTwotoneStar} />
						<Icon as={AiTwotoneStar} />
						<Icon as={AiTwotoneStar} />
						<Text>{data.rating}</Text>
					</Stack>
					<Stack h='100%'>
						<Text fontSize={24} fontWeight="bold" color="blackAlpha.700">
							<Text as="sup" fontSize={14}>
								$
							</Text>
							{discount}
						</Text>
						<Flex gap={1} alignItems='center' mt='0 !important' className="test">
							<Tag
								backgroundColor="red.600"
								color="white"
								fontSize={14}
								fontWeight="900"
								borderRadius="none"
								lineHeight={1}
								letterSpacing={-.5}
							>
								Save {`$${data.discount}`}
							</Tag>
							<Text fontSize={12}>Was {`$${data.price}`}</Text>
						</Flex>
					</Stack>
					<Button alignSelf='flex-start' fontSize={12} py={2}>Add to cart</Button>
				</Flex>
			</Box>
		</Stack>
	);
}

export default Card;
