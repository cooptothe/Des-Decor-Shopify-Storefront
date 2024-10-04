import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GuidelinesScreen = () => {
  return (
    <View style={[styles.guidelinesScreen, styles.menuFlexBox]}>
      <Image
        style={styles.guidelinesScreenChild}
        resizeMethod="scale"
        contentFit="contain"
        source={require("../assets/logo2.png")}
      />
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text
          style={styles.rentalGuidelinesAnd}
        >{`RENTAL GUIDELINES AND POLICIES  `}</Text>
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-19.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-20.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-21.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-22.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-23.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  guidelinesScreenChild: {
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
    justifyContent: "center",
    padding: 25,
    gap: 27,
    alignSelf: "stretch",
  },
  guidelinesScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 7,
    paddingVertical: 0,
    width: "100%",
  },
});

export default GuidelinesScreen;