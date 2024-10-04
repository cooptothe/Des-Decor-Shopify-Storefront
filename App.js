const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ConsultationScreen from "./screens/ConsultationScreen";
import MainMenuPhone from "./screens/MainMenuPhone";
import BundlesScreen from "./screens/BundlesScreen";
import GuidelinesScreen from "./screens/GuidelinesScreen";
import BridalScreen from "./screens/BridalScreen";
import InventoryScreen from "./screens/InventoryScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="MainMenuPhone"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="ConsultationScreen"
              component={ConsultationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuPhone"
              component={MainMenuPhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BundlesScreen"
              component={BundlesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GuidelinesScreen"
              component={GuidelinesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BridalScreen"
              component={BridalScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InventoryScreen"
              component={InventoryScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
