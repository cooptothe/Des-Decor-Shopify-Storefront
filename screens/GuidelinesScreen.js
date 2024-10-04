import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.guidelinesScreen}>
      <Pressable
        style={[styles.logoWrapper, styles.menuFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={[styles.logoIcon, styles.menuFlexBox1]}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text
          style={styles.rentalGuidelinesAnd}
        >{`RENTAL GUIDELINES AND POLICIES  `}</Text>
        <Image
          style={styles.menuChild}
          contentFit="cover"
          source={require("../assets/frame-19.png")}
        />
        <Image
          style={styles.menuChild}
          contentFit="cover"
          source={require("../assets/frame-20.png")}
        />
        <Image
          style={styles.menuChild}
          contentFit="cover"
          source={require("../assets/frame-21.png")}
        />
        <Image
          style={styles.menuChild}
          contentFit="cover"
          source={require("../assets/frame-22.png")}
        />
        <Image
          style={styles.menuChild}
          contentFit="cover"
          source={require("../assets/frame-23.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
  },
  logoIcon: {
    alignSelf: "stretch",
  },
  logoWrapper: {
    width: 402,
    height: 175,
  },
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    height: 43,
    alignSelf: "stretch",
  },
  menuChild: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  menu: {
    padding: 25,
    gap: 27,
    alignSelf: "stretch",
    flex: 1,
  },
  guidelinesScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 7,
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default GuidelinesScreen;