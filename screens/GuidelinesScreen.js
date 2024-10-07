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

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.guidelinesScreen}>
      <Pressable
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo1.png")}
        />
      </Pressable>
      <Text
        style={styles.rentalGuidelinesAnd}
      >{`RENTAL GUIDELINES AND POLICIES  `}</Text>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/rent.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          contentFit="contain"
          source={require("../assets/decor.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/deposits.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/contact.png")}
        />
      </View>
      <View style={[styles.rentButton, styles.logoFlexBox]}>
        <Image
          style={styles.rentIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/mission.png")}
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
    alignSelf: "stretch",
    flex: 1,
  },
  logo: {
    width: 402,
    height: 175,
  },
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.inter,
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