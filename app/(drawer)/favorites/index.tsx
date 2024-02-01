import { colorTokens } from "@tamagui/themes";
import React from "react";
import { View } from "react-native";
import { Title } from "~/tamagui.config";

const Favorites = () => {
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
				Favorites
			</Title>
		</View>
	);
};

export default Favorites;
