import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const CheckoutScreen = ({ route }) => {
    const { checkoutURL } = route.params; // Access the checkoutURL prop
console.log(checkoutURL)

  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: checkoutURL }} />   
    </>

  );
};

export default CheckoutScreen;
