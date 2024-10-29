import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const ContactScreen = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://desdecorandsupplies.myshopify.com/pages/contact" }} />   
    </>

  );
};

export default ContactScreen;