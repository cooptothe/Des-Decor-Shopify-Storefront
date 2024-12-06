import React from "react";
import BackButton from "../components/BackButton";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";

const StorefrontScreen = () => {
    return (
      <View style={styles.container}>
        <BackButton />
        <ImageBackground
          source={require("/Users/student/Des-Decor-Shopify-Storefront/assets/comingsoon.png")}
          style={styles.imageBackground}
        >
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "fit", // Ensures the image fills the screen proportionally
      },
  });

export default StorefrontScreen;