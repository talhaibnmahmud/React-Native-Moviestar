import { colorTokens } from "@tamagui/themes";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ImageBackground } from "react-native";
import { Input, ScrollView, Spinner, YStack } from "tamagui";
import { MovieCard } from "~/components/MovieCard";
import { useDebounce } from "~/hooks/useDebounce";
import { fetchTrendingMovies, searchMovies } from "~/lib/api";
import type { Search } from "~/schemas/search.schema";
import type { Trending } from "~/schemas/trending.schema";
import { Container, Main, Subtitle, Title } from "~/tamagui.config";

const Home = () => {
	const [search, setSearch] = React.useState("");
	const debouncedSearch = useDebounce(search, 500);

	const trendingQuery = useQuery<Trending>({
		queryKey: ["trending"],
		queryFn: () => fetchTrendingMovies(),
		refetchInterval: 60 * 60 * 1000,
	})

	const searchQuery = useQuery<Search>({
		queryKey: ["search", debouncedSearch],
		queryFn: () => searchMovies(debouncedSearch),
		enabled: debouncedSearch.trim().length > 0,
	})

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
						}}
							value={search}
							onChangeText={setSearch} />
					</YStack>
				</Container>
			</ImageBackground>

			<Subtitle style={{
				color: colorTokens.light.green.green11,
				fontSize: 24,
				fontWeight: "bold",
				paddingHorizontal: 20,
			}}>
				{debouncedSearch.trim().length > 0 ? "Search Results" : "Trending Movies"}
			</Subtitle>

			{searchQuery.isLoading || searchQuery.isFetching || trendingQuery.isLoading || trendingQuery.isFetching ? <Spinner size="large" /> :
				<ScrollView horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingHorizontal: 20 }}>
					{searchQuery.data?.results ? searchQuery.data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />) : trendingQuery.data?.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
				</ScrollView>
			}
		</Main>
	);
};

export default Home;
