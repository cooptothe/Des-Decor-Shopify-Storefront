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
import CheckoutScreen from "./screens/CheckoutScreen";
import GalleryScreen from "./screens/GalleryScreen";
import RefundScreen from "./screens/RefundScreen";
import ContactScreen from "./screens/ContactScreen";
import StoreScreen from "./screens/StoreScreen";
import StorefrontScreen from "./screens/StorefrontScreen";
import AboutUs from "./screens/AboutUs";
import Rent from "./screens/Rent";
import Concierge from "./screens/Concierge";
import EventScreen from "./screens/EventScreen";
import Process from "./screens/Process";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; // For saving cart ID locally
import { useEffect, useState } from "react";
import { storefront } from "./api"; // Import storefront function
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import BundleScreen from "./screens/BundleScreen";
import CartScreen from "./screens/Cart";

const Stack = createNativeStackNavigator();
const navigationRef = React.createRef();

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
          // console.log("Cart loaded from storage:", storedCartId);
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
      <NavigationContainer ref={navigationRef}>
        <View>
          <TouchableOpacity
            style={styles.cart}
            onPress={() => navigationRef.current?.navigate("CartScreen")}
          >
            <ImageBackground
              style={styles.cartButton}
              resizeMethod="scale"
              resizeMode="contain"
              source={require("./assets/shopping-cart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ig}
            onPress={() => navigationRef.current?.navigate("GalleryScreen")}
          >
            <ImageBackground
              style={styles.igButton}
              resizeMethod="scale"
              resizeMode="contain"
              source={require("./assets/ig.png")}
            />
          </TouchableOpacity>
          <ImageBackground
            style={styles.logo}
            resizeMethod="scale"
            source={require("./assets/logo3x.png")}
          />
          <TouchableOpacity
            style={styles.home}
            onPress={() => navigationRef.current?.navigate("MainMenuPhone")}
          >
            <ImageBackground
              style={styles.homeButton}
              resizeMethod="scale"
              resizeMode="contain"
              source={require("./assets/house.png")}
            />
          </TouchableOpacity>
        </View>

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
            <Stack.Screen
              name="BundleScreen"
              component={BundleScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckoutScreen"
              component={CheckoutScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GalleryScreen"
              component={GalleryScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RefundScreen"
              component={RefundScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactScreen"
              component={ContactScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StorefrontScreen"
              component={StorefrontScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StoreScreen"
              component={StoreScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rent"
              component={Rent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Concierge"
              component={Concierge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventScreen"
              component={EventScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Process"
              component={Process}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  cart: {
    alignSelf: "flex-end",
    right: 25,
    top: 50,
    padding: 5,
  },
  ig: {
    alignSelf: "flex-start",
    left: 25,
    top: 10,
    padding: 5,
  },
  home: {
    alignSelf: "center",
    bottom: 20,
  },
  cartButton: {
    height: 30,
    width: 35,
  },
  igButton: {
    height: 30,
    width: 30,
  },
  homeButton: {
    height: 30,
    width: 35,
  },
  logo: {
    height: 200,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default App;
