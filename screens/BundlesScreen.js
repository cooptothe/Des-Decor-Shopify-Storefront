import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const BundlesScreen = () => {
  return (
    <View style={styles.bundlesScreen}>
      <Image
        style={[styles.bundlesScreenChild, styles.childLayout]}
        contentFit="contain"
        source={require("../assets/frame-1.png")}
      />
      <View style={[styles.decorToGoBundlesWrapper, styles.decorFlexBox]}>
        <Text style={[styles.decorToGo, styles.decorFlexBox]}>
          DECOR TO GO BUNDLES
        </Text>
      </View>
      <View style={[styles.menu, styles.decorFlexBox]} centerContent="true">
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-25.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-26.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-27.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-28.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-29.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-30.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-31.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-32.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-33.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-34.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  decorFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bundlesScreenChild: {
    height: 193,
  },
  decorToGo: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 76,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    flex: 1,
  },
  decorToGoBundlesWrapper: {
    height: 1,
  },
  menuChild: {
    maxHeight: "100%",
    flex: 1,
  },
  menu: {
    height: 1398,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    gap: Gap.gap_md,
  },
  bundlesScreen: {
    backgroundColor: Color.colorWhite,
    height: 852,
    gap: 40,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default BundlesScreen;
