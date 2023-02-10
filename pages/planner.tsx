import { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Collapse,
	Container,
	Heading,
	List,
	ListIcon,
	ListItem,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AvalancheForecast from '../components/AvalancheForecast';
import WeatherForecast, { Weather } from '../components/WeatherForecast';
import ExtremeOMeter from '../components/ExtremeOMeter';

const SnowSafety: NextPage = () => {
	const [avalancheLevel, setAvalanceLevel] = useState<number | null>(null);
	const [weather, setWeather] = useState<Weather | null>(null);
	const [isOver25, setIsOver25] = useState<string | null>(null);
	const [over25Time, setOver25Time] = useState<string | null>(null);
	const [steepSlopesAbove, setSteepSlopesAbove] = useState<string | null>(null);
	const [easyToNavigate, setEasyToNavigate] = useState<string | null>(null);

	const getRouteRating = (): number | undefined => {
		switch (isOver25) {
			case 'yes': {
				switch (over25Time) {
					case 'small':
						return 2;
					case 'medium':
						return 3;
					case 'large':
						return 3;
				}
			}
			case 'yes-forest':
			case 'no': {
				if (steepSlopesAbove === 'yes') {
					return 2;
				} else {
					switch (easyToNavigate) {
						case 'yes':
							return 0;
						case 'no': {
							switch (weather) {
								case 'sunny':
									return 1;
								case 'cloudy':
									return 1;
								case 'storm':
									return 2;
								case 'fog':
									return 2;
							}
						}
					}
				}
			}
		}
	};

	const getTotalRating = (): number | null => {
		const routeRating = getRouteRating();
		if (!avalancheLevel || routeRating === undefined) return null;
		return routeRating + avalancheLevel;
	};

	const totalRating = getTotalRating();

	return (
		<Box h="100vh">
			<Head>
				<title>Ski Extreme Planner</title>
				<meta name="description" content="For the believeable ski heroes who ski the extreme" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container pt={8} pb="400px">
				<Heading>Ski Extreme Tour Planner</Heading>
				<Text>
					Planning a ski tour and wondering how risky it is? Just answer a few questions below and
					get your very own Extreme-o-rating™.
				</Text>
				<Box mt={4}>
					<Heading size="md">Avalanche forecast</Heading>
					<Text mb="2">What is the expected avalanche forecast during the tour?</Text>
					<AvalancheForecast value={avalancheLevel} onChange={setAvalanceLevel} />
				</Box>
				<Box mt={4}>
					<Heading size="md">Weather forecast</Heading>
					<Text mb="2">What is the expected weather during the tour?</Text>
					<WeatherForecast value={weather} onChange={setWeather} />
				</Box>
				<Box mt={4}>
					<Heading size="md">Route</Heading>
					<Text mb="2">Does the route pass through slopes steeper than 25°?</Text>
					<RadioGroup value={isOver25 ?? undefined} onChange={setIsOver25}>
						<Stack>
							<Radio value="yes">Yes</Radio>
							<Radio value="yes-forest">Yes, but only in forested areas</Radio>
							<Radio value="no">No</Radio>
						</Stack>
					</RadioGroup>
				</Box>
				<Collapse in={isOver25 === 'yes'} animateOpacity>
					<Text mt="4" mb="2">
						How much time are you spending on slopes steeper than 25°?
					</Text>
					<RadioGroup value={over25Time ?? undefined} onChange={setOver25Time}>
						<Stack>
							<Radio value="small">
								Only briefly passing, but otherwise the route is under 25°
							</Radio>
							<Radio value="medium">Longer sections of the route are steeper than 25°</Radio>
							<Radio value="large">Most of the route is steeper than 25°</Radio>
						</Stack>
					</RadioGroup>
				</Collapse>
				<Collapse in={isOver25 !== 'yes'} animateOpacity>
					<Text mt="4" mb="2">
						Does the route pass through open areas with large steep slopes (30-40°) above?
					</Text>
					<RadioGroup value={steepSlopesAbove ?? undefined} onChange={setSteepSlopesAbove}>
						<Stack>
							<Radio value="yes">Yes</Radio>
							<Radio value="no">No</Radio>
						</Stack>
					</RadioGroup>
					<Text mt="4" mb="2">
						How easy is it to stay on the planned route?
					</Text>
					<RadioGroup value={easyToNavigate ?? undefined} onChange={setEasyToNavigate}>
						<Stack>
							<Radio value="yes">It is possible to stay on the route in any visibility</Radio>
							<Radio value="no">
								Staying on the planned route requires precise navigation and/or good visibility
							</Radio>
						</Stack>
					</RadioGroup>
				</Collapse>
				<ExtremeOMeter value={totalRating ?? 0} />
			</Container>
		</Box>
	);
};

export default SnowSafety;
