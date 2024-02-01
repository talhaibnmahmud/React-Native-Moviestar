import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer screenOptions={{
      headerShown: true,
      drawerHideStatusBarOnOpen: false,
      drawerActiveBackgroundColor: colorTokens.light.green.green5,
      drawerActiveTintColor: colorTokens.light.green.green11,
      drawerInactiveTintColor: colorTokens.light.green.green11,
      drawerInactiveBackgroundColor: colorTokens.light.green.green3,
      drawerContentContainerStyle: {
        paddingTop: 50,
        backgroundColor: colorTokens.light.green.green3,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      },
      drawerLabelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      drawerType: 'slide',
      drawerStatusBarAnimation: 'slide',
      drawerPosition: 'left',
      freezeOnBlur: false,
    }}>
      <Drawer.Screen name="home" options={{
        title: "Moviestar",
        headerShown: false,
        drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
      }} />
      <Drawer.Screen name="favorites" options={{
        title: "Favorites",
        headerShown: false,
        drawerIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />
      }} />
    </Drawer>
  );
};

export default Layout;
