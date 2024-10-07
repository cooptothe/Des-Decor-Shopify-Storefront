import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const BridalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bridalScreen}>
      <Pressable
        style={styles.logoFlexBox}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo23x.png")}
        />
      </Pressable>
      <Text style={styles.bridal}>{`BRIDAL  `}</Text>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/bridal13x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/premi3x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/store3x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/fronts3x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          contentFit="contain"
          source={require("../assets/galler3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
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
  },
  bridalIcon: {
    width: 342,
    height: 101,
  },
  bridalButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
});

export default BridalScreen;