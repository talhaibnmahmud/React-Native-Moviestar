import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: colorTokens.light.green.green5,
        },
        headerTintColor: colorTokens.light.green.green11,
    }} >
        <Stack.Screen name="index" options={{
            title: "Favorites",
            headerLeft: () => <DrawerToggleButton
                tintColor={colorTokens.light.green.green11}
                pressColor={colorTokens.light.green.green11}
                pressOpacity={0.5}
            />,
            headerTitleAlign: "center",
        }} />
    </Stack>;
}

export default Layout