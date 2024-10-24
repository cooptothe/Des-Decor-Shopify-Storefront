import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import BridalScreen from "./screens/BridalScreen";
import BundlesScreen from "./screens/BundlesScreen";
import ConsultationScreen from "./screens/ConsultationScreen";
import GuidelinesScreen from "./screens/GuidelinesScreen";
import InventoryScreen from "./screens/InventoryScreen";
import MainMenuPhone from "./screens/MainMenuPhone";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage'; // For saving cart ID locally
import { useEffect, useState } from "react";
import { storefront } from "./api";  // Import storefront function
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,

} from "react-native";

const Stack = createNativeStackNavigator();

// Define the cart creation mutation
const createCartMutation = `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

const App = () => {
  //const navigation = useNavigation();
  const [cartId, setCartId] = useState(null);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });
  // Function to create a new cart
  const createCart = async () => {
    try {
      // Use the imported storefront function here
      const { data } = await storefront(createCartMutation, { cartInput: {} });
      const cart = data?.cartCreate?.cart;
      if (cart) {
        // Store the cart ID in AsyncStorage for persistent storage
        await AsyncStorage.setItem("cartId", cart.id);
        setCartId(cart.id);
        console.log("Cart created:", cart);
      }
    } catch (error) {
      console.error("Error creating cart:", error);
    }
  };

  // Load cart on app startup
  useEffect(() => {
    const initializeCart = async () => {
      try {
        const storedCartId = await AsyncStorage.getItem("cartId");
        if (!storedCartId) {
          await createCart(); // Create a new cart if none exists
        } else {
          setCartId(storedCartId); // Use the existing cart
          console.log("Cart loaded from storage:", storedCartId);
        }
      } catch (error) {
        console.error("Error initializing cart:", error);
      } finally {
        setHideSplashScreen(true); // Hide splash screen after initialization
      }
    };
  
    initializeCart();
  }, []);  

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>

      <NavigationContainer>
      <TouchableOpacity
        style={styles.logo}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("./assets/logo3x.png")}
        />
      </TouchableOpacity>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="MainMenuPhone"
            screenOptions={{ headerShown: false }}
          >
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
              name="ConsultationScreen"
              component={ConsultationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InventoryScreen"
              component={InventoryScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductScreen"
              component={ProductScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductsScreen"
              component={ProductsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logo: {
    height: 300,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
});

export default App;
