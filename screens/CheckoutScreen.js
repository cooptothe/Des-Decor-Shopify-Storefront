
import React from "react";
import { WebView } from "react-native-webview";

const CheckoutScreen = ({ route }) => {
    const { checkoutURL } = route.params; // Access the checkoutURL prop
console.log(checkoutURL)

  return (
    <WebView style={{ flex: 1 }} source={{ uri: checkoutURL }} />
  );
};

export default CheckoutScreen;
