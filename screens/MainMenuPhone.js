import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const MainMenuPhone = () => {
  return (
    <View style={styles.mainMenuPhone}>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMethod="scale"
        contentFit="contain"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text
          style={[styles.mainMenu, styles.menuFlexBox]}
        >{`MAIN MENU  `}</Text>
        <Image
          style={[styles.menuChild, styles.frameIconLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-2.png")}
        />
        <Image
          style={[styles.menuChild, styles.frameIconLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-3.png")}
        />
        <Image
          style={[styles.menuChild, styles.frameIconLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-4.png")}
        />
        <Image
          style={[styles.menuChild, styles.frameIconLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-5.png")}
        />
        <Image
          style={[styles.menuChild, styles.frameIconLayout]}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/frame-6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  menuFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameIcon: {
    height: 175,
  },
  mainMenu: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  menuChild: {
    maxHeight: "100%",
    flex: 1,
    maxWidth: "100%",
  },
  menu: {
    justifyContent: "space-around",
    padding: Padding.p_xl,
    gap: Gap.gap_md,
  },
  mainMenuPhone: {
    backgroundColor: Color.colorWhite,
    height: 852,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MainMenuPhone;
