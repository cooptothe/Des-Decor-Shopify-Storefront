import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const StoreScreen = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://www.instagram.com/desdecorandsupplies/" }} />   
    </>

  );
};

export default StoreScreen;