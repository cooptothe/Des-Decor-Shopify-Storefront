import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const AboutUs = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://harlequin-tine-85.tiiny.site/" }} />   
    </>

  );
};

export default AboutUs;