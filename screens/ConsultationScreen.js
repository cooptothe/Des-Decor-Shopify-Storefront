
import React from "react";
import { WebView } from "react-native-webview";

const ConsultationScreen = () => {
  return (
    <WebView style={{ flex: 1 }} source={{ uri: "https://calendly.com/d/y7c-k84-q9w/?month=2024-10" }} />
  );
};

export default ConsultationScreen;
