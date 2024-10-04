import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const BridalScreen = () => {
  return (
    <View style={styles.bridalScreen}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoIconLayout}
          contentFit="contain"
          source={require("../assets/logo1.png")}
        />
      </View>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.bridal}>{`BRIDAL  `}</Text>
        <View style={styles.menuFlexBox}>
          <Image
            style={styles.logoIconLayout}
            contentFit="contain"
            source={require("../assets/bridal1.png")}
          />
        </View>
        <View style={styles.menuFlexBox}>
          <Image
            style={styles.logoIconLayout}
            contentFit="contain"
            source={require("../assets/premi.png")}
          />
        </View>
        <View style={styles.menuFlexBox}>
          <Image
            style={styles.logoIconLayout}
            contentFit="contain"
            source={require("../assets/store.png")}
          />
        </View>
        <Image
          style={styles.logoIconLayout}
          contentFit="contain"
          source={require("../assets/frame-17.png")}
        />
        <View style={styles.menuFlexBox}>
          <Image
            style={styles.logoIconLayout}
            contentFit="contain"
            source={require("../assets/galler.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  logoIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  logoWrapper: {
    height: 168,
    alignSelf: "stretch",
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
  menu: {
    padding: Padding.p_xl,
    gap: 28,
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 11,
    paddingBottom: 52,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default BridalScreen;
