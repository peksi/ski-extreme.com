import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import styles from './AvalancheForecast.module.css';

export interface AvalancheForecastProps {
	value: number | null; // 1 to 5;
	onChange: (value: number | null) => void;
}

const COLORS: { [key: number]: string } = {
	1: 'green.500',
	2: 'green.300',
	3: 'yellow.300',
	4: 'orange.300',
	5: 'red.300',
};

const AvalancheForecast = (props: AvalancheForecastProps) => {
	const { value, onChange } = props;

	const renderBox = (val: number) => {
		return (
			<Box
				as="button"
				className={`${styles.box} ${value === val ? styles.boxSelected : ''}`}
				bg={COLORS[val]}
				onClick={() => onChange(val)}
			>
				<Text fontWeight="bold">{val}</Text>
			</Box>
		);
	};

	return (
		<Box className={styles.wrapper}>
			{renderBox(1)}
			{renderBox(2)}
			{renderBox(3)}
			{renderBox(4)}
			{renderBox(5)}
		</Box>
	);
};

export default AvalancheForecast;
