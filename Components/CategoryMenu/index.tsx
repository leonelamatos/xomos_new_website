import { useState } from 'react';
import { Center, Container, Grid, GridItem, Box, Button, Text, useMediaQuery } from '@chakra-ui/react';

const CategoryMenu = () => {
	const [selected, setSelected] = useState(0);
	const isSmallScreen = useMediaQuery('(min-width: 900px)');

	const handleSelectItem = (e: any) => {
		setSelected(e.target.dataset.index);
	};
	return (
		<Container maxW='1150px' centerContent w='100%' h='100%' px={0}>
			<Grid
				templateColumns={[
					'repeat(2, 1fr)',
					'repeat(3, 1fr)',
					'repeat(3, 1fr)',
					'repeat(6, 1fr)',
					'repeat(6, 1fr)',
				]}
				// px={['1rem', '3rem', '3rem', '3rem', '3rem', '0']}
				py={6}
				w='100%'
				h='200px'
				position='relative'
				sx={{
					// "background-color": 'red',
					'& .item': {
						'& .item-button': {
							borderRadius: '0',
							_after: {
								transition: 'opacity .125s ease-in',
								opacity: 0,
								content: '""',
								position: 'absolute',
								left: '45%',
								zIndex: 2,
								fontSize: '30px',
								bottom: '-10px',
								transform: 'rotate(45deg)',
								right: '0px',
								width: '20px',
								height: '20px',
								userSelect: 'none',
							},
							_focus: { boxShadow: 'none' },
						},

						'&.selected .item-button': {
							color: '#fff',
							bg: 'indigoDye.900',
							borderRadius: 'none',
							transition: 'all .250s ease-out',
							_after: { opacity: 1, bg: 'indigoDye.900' },
						},
					},
					'& .item + .item': {
						borderLeft: 'none',
						// borderTop: isSmallScreen ? 'none' : '1px solid gray.500',
					},
				}}
			>
				<GridItem
					onClick={handleSelectItem}
					position='relative'
					className={`item ${selected == 0 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={0} className='item-button' w='100%' h='100%' variant='unstyled'>
						<Text>TV & Audios</Text>
					</Button>
				</GridItem>

				<GridItem
					onClick={handleSelectItem}
					className={`item ${selected == 1 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={1} className='item-button' w='100%' h='100%' variant='unstyled'>
						<Text>Smartphones</Text>
					</Button>
				</GridItem>
				<GridItem
					onClick={handleSelectItem}
					className={`item ${selected == 2 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={2} className='item-button' variant='unstyled' w='100%' h='100%'>
						<Text>Desktop & Laptop</Text>
					</Button>
				</GridItem>
				<GridItem
					onClick={handleSelectItem}
					className={`item ${selected == 3 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={3} className='item-button' variant='unstyled' w='100%' h='100%'>
						<Text>Game Console</Text>
					</Button>
				</GridItem>
				<GridItem
					onClick={handleSelectItem}
					className={`item ${selected == 4 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={4} className='item-button' variant='unstyled' w='100%' h='100%'>
						<Text>Watches</Text>
					</Button>
				</GridItem>
				<GridItem
					onClick={handleSelectItem}
					className={`item ${selected == 5 ? 'selected' : ''}`}
					border='1px'
					borderColor='gray.300'
				>
					<Button data-index={5} className='item-button' variant='unstyled' w='100%' h='100%'>
						<Text>Accesories</Text>
					</Button>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default CategoryMenu;
