import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const InventoryScreen = () => {
  return (
    <View style={[styles.inventoryScreen, styles.menuFlexBox]}>
      <Image
        style={[styles.inventoryScreenChild, styles.childLayout]}
        resizeMethod="scale"
        contentFit="contain"
        source={require("../assets/frame-7.png")}
      />
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.inventory}>{`INVENTORY  `}</Text>
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-8.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-9.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-10.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          contentFit="contain"
          source={require("../assets/frame-11.png")}
        />
        <Image
          style={[styles.menuChild, styles.childLayout]}
          contentFit="contain"
          source={require("../assets/frame-12.png")}
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
  childLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  inventoryScreenChild: {
    height: 175,
  },
  inventory: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 76,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    height: 43,
    alignSelf: "stretch",
  },
  menuChild: {
    maxHeight: "100%",
    flex: 1,
    maxWidth: "100%",
  },
  menu: {
    padding: Padding.p_xl,
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  inventoryScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    width: "100%",
    alignItems: "center",
  },
});

export default InventoryScreen;
