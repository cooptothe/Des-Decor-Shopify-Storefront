import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const GalleryScreen = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://www.instagram.com/desdecorandsupplies/" }} />   
    </>

  );
};

export default GalleryScreen;
