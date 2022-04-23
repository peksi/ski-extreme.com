import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';

export type Weather = 'sunny' | 'cloudy' | 'storm' | 'fog';

export interface WeatherForecastProps {
	value: Weather | null;
	onChange: (value: Weather) => void;
}

const OPTIONS: { [key in Weather]: string } = {
	sunny: 'Sunny, clear skies',
	cloudy: 'Cloudy, but good visibility',
	storm: 'Snow or rain storm',
	fog: 'Low clouds or fog',
};

const WeatherForecast = (props: WeatherForecastProps) => {
	const { value, onChange } = props;
	return (
		<RadioGroup value={value ?? undefined} onChange={(val) => onChange(val as Weather)}>
			<Stack>
				{Object.entries(OPTIONS).map(([option, label]) => {
					return (
						<Radio key={option} value={option}>
							{label}
						</Radio>
					);
				})}
			</Stack>
		</RadioGroup>
	);
};

export default WeatherForecast;
