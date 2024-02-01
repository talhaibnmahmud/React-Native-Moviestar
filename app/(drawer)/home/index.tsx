import { colorTokens } from "@tamagui/themes";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text } from "react-native";
import { Card, Input, Spinner, YStack } from "tamagui";
import { Container, Main, Subtitle, Title } from "~/tamagui.config";

const Home = () => {
	const trendingQuery = useQuery({
		queryKey: ["trending"],
		queryFn: () => fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=2a7b1c6a7b1d4b4b4e2c4b1f5a7b1d4b"),
	})
	console.log(trendingQuery.data);

	const searchQuery = useQuery({
		queryKey: ["search"],
		queryFn: () => fetch("https://api.themoviedb.org/3/search/movie?api_key=2a7b1c6a7b1d4b4b4e2c4b1f5a7b1d4b&query=avengers"),
	})
	console.log(searchQuery.data);

	return (
		<Main style={{
			flex: 1,
			alignItems: "flex-start",
			justifyContent: "flex-start",
			gap: 20,
			backgroundColor: colorTokens.light.green.green3,
		}}>
			<ImageBackground source={{ uri: "https://image.tmdb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" }} style={{
				width: "100%",
				height: 200,
				justifyContent: "flex-end",
				alignItems: "flex-start",
			}}>


				<Container style={{
					flex: 1,
					alignItems: "flex-start",
					justifyContent: "flex-end",
				}}>
					<YStack style={{
						alignItems: "flex-start",
						justifyContent: "flex-end",
						gap: 10,
					}}>
						<Title style={{
							color: colorTokens.light.green.green11,
							fontSize: 48,
							fontWeight: "bold",
						}}
							enterStyle={{
								opacity: 0,
								scale: 1.5,
								y: -10,
							}}
							animation="quick" >
							Home
						</Title>
						<Input placeholder="Search for a movie..." style={{
							width: 300,
							height: 50,
							backgroundColor: colorTokens.light.green.green7,
							borderRadius: 10,
							borderColor: colorTokens.light.green.green11,
							fontSize: 20,
							// Move the screen up when the keyboard is open
							// https://reactnative.dev/docs/keyboard#keyboardavoidingview
						}} />
					</YStack>
				</Container>
			</ImageBackground>

			<Subtitle style={{
				color: colorTokens.light.green.green11,
				fontSize: 24,
				fontWeight: "bold",
				paddingHorizontal: 20,
			}}>
				Trending Movies
			</Subtitle>

			{trendingQuery.isLoading || trendingQuery.isFetching ? <Spinner size="large" /> : null}
			{searchQuery.isLoading || searchQuery.isFetching ? <Spinner size="large" /> : null}
			<Link href={"/(drawer)/home/movie/1"} asChild>
				<Pressable style={{
					width: 300,
					height: 50,
					backgroundColor: colorTokens.light.green.green7,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 10,
				}}>
					<Text style={{
						color: colorTokens.light.green.green11,
						fontSize: 20,
						fontWeight: "bold",
					}}
					>Movie 1</Text>
				</Pressable>
			</Link>
			<Card style={{
				width: 300,
				backgroundColor: colorTokens.light.green.green5,
			}}>
				<Card.Header>
					<Text style={{
						color: colorTokens.light.green.green11,
						fontSize: 20,
						fontWeight: "bold",
					}}>Header</Text>
				</Card.Header>
				<Card.Footer style={{
					backgroundColor: colorTokens.light.green.green7,
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderBottomStartRadius: 10,
					borderBottomEndRadius: 10,
				}}>
					<Text style={{
						color: colorTokens.light.green.green11,
						fontSize: 20,
						fontWeight: "bold",
					}}
					>Footer</Text>
				</Card.Footer>
			</Card>
		</Main>
	);
};

export default Home;
