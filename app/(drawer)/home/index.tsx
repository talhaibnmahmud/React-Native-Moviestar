import { colorTokens } from "@tamagui/themes";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Card } from "tamagui";
import { Title } from "~/tamagui.config";

const Home = () => {
	return (
		<View style={{
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			gap: 20,
			backgroundColor: colorTokens.light.green.green3,
		}}>
			<Title style={{
				color: colorTokens.light.green.green11,
				fontSize: 30,
				fontWeight: "bold",
			}}>
				Home
			</Title>
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
		</View>
	);
};

export default Home;
