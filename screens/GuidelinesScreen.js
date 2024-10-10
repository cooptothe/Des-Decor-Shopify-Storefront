import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.guidelinesScreen}>
      <TouchableOpacity
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>
      <Text
        style={styles.rentalGuidelinesAnd}
      >{`RENTAL GUIDELINES AND POLICIES`}</Text>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/rent3x.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          contentFit="contain"
          source={require("../assets/decor3x.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/deposits3x.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/contact3x.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/mission3x.png")}
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
    height: 300,
  },
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  rentIcon: {
    width: 342,
    height: 98,
  },
  rentButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  guidelinesScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
});

export default GuidelinesScreen;