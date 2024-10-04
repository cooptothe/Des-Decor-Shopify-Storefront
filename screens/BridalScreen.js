import { Image } from "expo-image";
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const BridalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bridalScreen, styles.menuFlexBox]}>
      <Pressable
        style={[styles.logoWrapper, styles.menuFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.bridal}>{`BRIDAL  `}</Text>

        <Image
          style={[styles.menuChild, styles.menuChildLayout]}
          contentFit="contain"
          source={require("../assets/frame-14.png")}
        />
        <Image
          style={[styles.menuChild, styles.menuChildLayout]}
          contentFit="cover"
          source={require("../assets/frame-15.png")}
        />
        <Image
          style={[styles.menuChild, styles.menuChildLayout]}
          contentFit="cover"
          source={require("../assets/frame-16.png")}
        />
        <Image
          style={[styles.menuChild, styles.menuChildLayout]}
          contentFit="contain"
          source={require("../assets/frame-17.png")}
        />
        <Image
          style={[styles.menuChild, styles.menuChildLayout]}
          contentFit="cover"
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
  },
  menuChildLayout: {
    width: "100%",
    flex: 1,
  },
  logoIcon: {
    height: 168,
    width: 400,
  },
  logoWrapper: {
    width: 400,
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
  },
  menu: {
    padding: Padding.p_xl,
    gap: Gap.gap_md,
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    paddingHorizontal: 11,
    paddingBottom: 52,
    gap: 28,
    width: "100%",
    flex: 1,
  },
});

export default BridalScreen;