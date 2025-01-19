import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const Process = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://coral-tony-19.tiiny.site" }} />   
    </>

  );
};

export default Process;