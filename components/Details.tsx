import { colorTokens } from "@tamagui/themes";
import { useQuery } from "@tanstack/react-query";
import { Image, ImageBackground } from "react-native";
import { Paragraph, ScrollView, Text, YStack } from "tamagui";
import { fetchMovieDetails } from "~/lib/api";
import { Details } from "~/schemas/details.schema";
import { Main, Title } from "~/tamagui.config";

type MovieDetailsProps = {
    id: string;
}

export const MovieDetails = ({ id }: MovieDetailsProps) => {
    const movieQuery = useQuery<Details>({
        queryKey: ["movie", id],
        queryFn: () => fetchMovieDetails(Number(id)),
        enabled: !!id,
        refetchInterval: 60 * 60 * 1000,
    });

    return (

        <Main style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            backgroundColor: colorTokens.light.green.green3,
        }}
        >
            <ScrollView style={{
                backgroundColor: colorTokens.light.green.green3,
            }}
            >
                <ImageBackground
                    source={{ uri: `https://image.tmdb.org/t/p/original${movieQuery.data?.backdrop_path}` }}
                    style={{
                        width: "100%",
                        height: 340,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}
                >
                    <Image style={{
                        width: 200,
                        height: 300,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        borderRadius: 10,
                        margin: 20,
                    }}
                        source={{ uri: `https://image.tmdb.org/t/p/original${movieQuery.data?.poster_path}` }}
                    />
                </ImageBackground>

                <YStack style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 10,
                    padding: 20,
                }}
                    animation={"lazy"}
                    enterStyle={{
                        opacity: 0,
                        y: 10,
                    }}
                >
                    <Title style={{
                        color: colorTokens.light.green.green11,
                        fontSize: 30,
                        fontWeight: "bold",
                    }}
                    >{movieQuery.data?.title} <Text style={{
                        color: colorTokens.light.green.green11,
                        fontSize: 15,
                    }} >({movieQuery.data?.release_date?.split("-")[0]})</Text></Title>

                    <Paragraph style={{
                        color: colorTokens.light.green.green10,
                        fontSize: 20,
                    }}
                    >{movieQuery.data?.overview}</Paragraph>
                </YStack>
            </ScrollView>
        </Main>
    )
}