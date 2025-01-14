import React from "react";
import { WebView } from "react-native-webview";
import BackButton from "../components/BackButton";

const Process = () => {
  return (
    <>
    <BackButton />
     <WebView style={{ flex: 1 }} source={{ uri: "https://jumpshare.com/s/qHoy2yKFuW8rkOzOgfqB" }} />   
    </>

  );
};

export default Process;