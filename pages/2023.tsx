import { NextPage } from 'next';
import { Box, Container, Heading } from '@chakra-ui/react';

const DaySection = ({ day, children }) => {
	return (
		<Box margin={5}>
			<Heading as="h4" size="sm">
				Day {day}
			</Heading>
			<p>{children}</p>
		</Box>
	);
};

const Season23: NextPage = () => {
	return (
		<Box
			position="absolute"
			top={0}
			h="100vh"
			textColor={'white'}
			zIndex={15}
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			w="100%"
			textAlign="center"
			backgroundImage="url('2023.jpg')"
		>
			<Container pt={20} pb={200}>
				<Heading>Season 2023</Heading>
				<Heading size="md">Zillertal 28.01.-11.2.2023</Heading>
				<Box margin={10}>
					<DaySection day={1}>Arrival, Skipoli leaves</DaySection>
					<DaySection day={2}>Tux</DaySection>
					<DaySection day={3}>Hintertux</DaySection>
					<DaySection day={4}>Beer day</DaySection>
				</Box>
			</Container>
		</Box>
	);
};

export default Season23;
