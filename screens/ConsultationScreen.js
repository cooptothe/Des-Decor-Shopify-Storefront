import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { WebView } from "react-native-webview";

const ConsultationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.consultationScreen}>
      {/* Logo */}
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.bookAConsultation}>BOOK A CONSULTATION</Text>

      {/* Calendly WebView */}

      <WebView
        style={styles.bookingView}
        source={{
          uri: "https://calendly.com/d/y7c-k84-q9w/",
        }}
      />

      {/* Decorative Images */}
      <View style={styles.imgs}>
        <ImageBackground
          style={[styles.frameIcon, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame1x.png")}
        />
        <ImageBackground
          style={[styles.frameIcon1, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame11x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logo: {
    height: 300,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bookAConsultation: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 37,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    alignSelf: "stretch",
  },
  bookingView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 175,
    height: 188,
    justifyContent: "flex-end",
  },
  frameIcon1: {
    width: 187,
    height: 183,
  },
  imgs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  consultationScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
});

export default ConsultationScreen;
