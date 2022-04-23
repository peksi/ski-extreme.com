import React from 'react';
import { Box, Button, Collapse, Heading, Text } from '@chakra-ui/react';
import styles from './ExtremeOMeter.module.css';

export interface ExtremeOMeterProps {
	value: number; // 1-8
}

const COLORS: { [key: number]: string } = {
	1: 'green.500',
	2: 'green.500',
	3: 'green.500',
	4: 'green.300',
	5: 'orange.300',
	6: 'orange.500',
	7: 'red.500',
	8: 'red.500',
};

const ExtremeOMeter = (props: ExtremeOMeterProps) => {
	const { value } = props;

	const getTitle = () => {
		switch (value) {
			case 1:
			case 2:
			case 3:
			case 4:
				return 'Responsible skiing';
			case 5:
				return 'Minor risk';
			case 6:
				return 'Moderate risk';
			case 7:
				return 'Extreme';
			case 8:
				return 'Death-defying';
		}
	};

	const getDescription = () => {
		switch (value) {
			case 1:
			case 2:
			case 3:
			case 4:
				return "There's no such thing as zero-risk freeskiing, but this route with this weather is close. Nice!";
			case 5:
				return "Watch out, you're venturing outside of the bounds of low-risk skiing! Avalanche accidents are still rare, but possible on these sorts of routes.";
			case 6:
				return 'Increased risk of potentially deadly avalanche accidents. Is it worth it, or should you choose a safer line on this weather?';
			case 7:
				return 'You should probably consider not doing this route';
			case 8:
				return 'If you want to die, this one is for you.';
		}
	};

	return (
		<Box className={styles.wrapper} bg="gray.200">
			<Box className={styles.top} maxWidth="600" margin="0 auto">
				{!value ? (
					<Text>We need some more information to give you an Extreme-o-rating!</Text>
				) : (
					<>
						<Text fontWeight="bold">
							{value}: {getTitle()}
						</Text>
						<Text>{getDescription()}</Text>
					</>
				)}
			</Box>
			<Collapse in={!!value}>
				<Box p="2">
					<Box className={styles.scale}>
						<Box className={styles.scaleFrame} borderColor="gray.400">
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
							<Box className={styles.scaleSeparator} bg="gray.400" />
						</Box>
						<Box className={styles.progress} bg={COLORS[value]} width={`${100 * (value / 8)}%`}>
							<Text className={styles.value} color="white" fontWeight="bold">
								{value || ''}
							</Text>
						</Box>
					</Box>
				</Box>
			</Collapse>
		</Box>
	);
};

export default ExtremeOMeter;
