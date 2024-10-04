import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const BridalScreen = () => {
  return (
    <View style={[styles.bridalScreen, styles.menuFlexBox]}>
      <Image
        style={styles.bridalScreenChild}
        resizeMethod="scale"
        contentFit="contain"
        source={require("../assets/frame-13.png")}
      />
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.bridal}>{`BRIDAL  `}</Text>
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-14.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-15.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-16.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-17.png")}
        />
        <Image
          style={styles.menuChild}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-18.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bridalScreenChild: {
    width: 400,
    height: 168,
  },
  bridal: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 49,
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
    padding: Padding.p_xl,
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    paddingHorizontal: 11,
    paddingBottom: 52,
    gap: 28,
    width: "100%",
  },
});

export default BridalScreen;