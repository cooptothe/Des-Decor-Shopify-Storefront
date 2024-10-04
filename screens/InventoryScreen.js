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
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const InventoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.inventoryScreen, styles.wrapperFlexBox]}>
      <Pressable
        style={[styles.logoWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={[styles.logoIcon, styles.menuFlexBox]}
          resizeMode="contain"
          source={require("../assets/logo2.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.wrapperFlexBox]}>
        <Text style={styles.inventory}>{`INVENTORY  `}</Text>
        <View style={[styles.wallsWrapper, styles.wrapperFlexBox]}>
          <Image
            style={[styles.wallsIcon, styles.wallsIconLayout]}
            contentFit="contain"
            source={require("../assets/walls.png")}
          />
        </View>
        <View style={[styles.wallsWrapper, styles.wrapperFlexBox]}>
          <Image
            style={[styles.wallsIcon, styles.wallsIconLayout]}
            contentFit="contain"
            source={require("../assets/tables.png")}
          />
        </View>
        <View style={[styles.wallsWrapper, styles.wrapperFlexBox]}>
          <Image
            style={[styles.wallsIcon, styles.wallsIconLayout]}
            contentFit="contain"
            source={require("../assets/acc.png")}
          />
        </View>
        <View style={[styles.wallsWrapper, styles.wrapperFlexBox]}>
          <Image
            style={[styles.wallsIcon, styles.wallsIconLayout]}
            contentFit="contain"
            source={require("../assets/ball.png")}
          />
        </View>
        <View style={[styles.wallsWrapper, styles.wrapperFlexBox]}>
          <Image
            style={[styles.wallsIcon, styles.wallsIconLayout]}
            contentFit="contain"
            source={require("../assets/cust.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  wallsIconLayout: {
    width: "100%",
    flex: 1,
  },
  logoIcon: {
    alignSelf: "stretch",
  },
  logoWrapper: {
    height: 175,
    alignSelf: "stretch",
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
  wallsIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  wallsWrapper: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  menu: {
    padding: Padding.p_xl,
    gap: Gap.gap_md,
    alignSelf: "stretch",
    flex: 1,
  },
  inventoryScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    width: "100%",
    flex: 1,
  },
});

export default InventoryScreen;
