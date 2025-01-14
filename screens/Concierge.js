import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const Concierge = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://desdecorandsupplies.myshopify.com/policies/privacy-policy" }} />   
    </>

  );
};

export default Concierge;