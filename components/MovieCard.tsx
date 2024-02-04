import { colorTokens } from "@tamagui/themes";
import { Link } from "expo-router";
import { Image, Text } from "react-native";
import { Card, Paragraph, YStack } from "tamagui";
import type { Movie as SearchedMovie } from "~/schemas/search.schema";
import type { Movie as TrendingMovie } from "~/schemas/trending.schema";

type MovieCardProps = {
    movie: TrendingMovie | SearchedMovie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Link href={`/(drawer)/home/movie/${movie.id}`} asChild>
            <Card bg={colorTokens.light.green.green5}
                hoverStyle={{ scale: 1.05 }}
                pressStyle={{ scale: 0.95 }}
                animation={"bouncy"}
                style={{
                    marginRight: 10, borderRadius: 10, overflow: "hidden",
                    shadowColor: colorTokens.light.green.green11,
                    shadowOffset: {
                        width: 1,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    flex: 1,
                    maxWidth: 150,
                    maxHeight: 350,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    padding: 0,
                }}
            >
                <Card.Header p={0}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={{ width: 150, height: 225, borderRadius: 10 }}
                        alt={movie.title} />
                </Card.Header>
                <Card.Footer style={{
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    boxSizing: "border-box",
                }}>
                    <YStack style={{ gap: 5, alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 20, maxWidth: 140, fontWeight: "bold", color: colorTokens.light.green.green11 }}>
                            {movie.title}
                        </Text>
                        <Paragraph style={{ fontSize: 14, maxWidth: 150, color: colorTokens.light.green.green11 }}>
                            {movie.release_date}
                        </Paragraph>
                    </YStack>
                </Card.Footer>
            </Card>
        </Link>
    )
}