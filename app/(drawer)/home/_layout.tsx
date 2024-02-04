import { DrawerToggleButton } from "@react-navigation/drawer";
import { colorTokens } from "@tamagui/themes";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
	return <Stack screenOptions={{
		headerStyle: {
			backgroundColor: colorTokens.light.green.green5,
		},
		headerTintColor: colorTokens.light.green.green11,
		headerShadowVisible: false,
		statusBarHidden: false,
		statusBarColor: colorTokens.light.green.green7,
		statusBarStyle: "dark",
		statusBarTranslucent: true,
		statusBarAnimation: "slide",
		navigationBarColor: colorTokens.light.green.green7,
		navigationBarHidden: false,
		headerBlurEffect: "systemUltraThinMaterialLight",
		headerBackTitleVisible: true,
		headerBackTitle: "Back",
	}} >
		<Stack.Screen name="index" options={{
			title: "Moviestar",
			headerLeft: () => <DrawerToggleButton
				tintColor={colorTokens.light.green.green11}
				pressColor={colorTokens.light.green.green11}
				pressOpacity={0.5}
			/>,
			headerTitleAlign: "center",
			headerBackTitle: "Back",
			headerBackTitleVisible: true,
		}} />
		<Stack.Screen name="movie/[id]" options={{
			title: "Movie",
			headerTitleAlign: "center",
			headerBackTitle: "Back",
			headerBackTitleVisible: true,
		}} />
	</Stack>;
};

export default Layout;
