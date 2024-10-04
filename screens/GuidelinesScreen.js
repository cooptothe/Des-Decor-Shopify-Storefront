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
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.guidelinesScreen}>
      <Pressable
        style={[styles.logoWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.wrapperFlexBox]}>
        <Text
          style={styles.rentalGuidelinesAnd}
        >{`RENTAL GUIDELINES AND POLICIES  `}</Text>
        <View style={[styles.rentWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/rent.png")}
          />
        </View>
        <View style={[styles.rentWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/decor.png")}
          />
        </View>
        <View style={[styles.rentWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/deposits.png")}
          />
        </View>
        <View style={[styles.rentWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/contact.png")}
          />
        </View>
        <View style={[styles.rentWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/mission.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logoWrapper: {
    height: 175,
  },
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 50,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    height: 43,
    alignSelf: "stretch",
  },
  rentIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  rentWrapper: {
    flex: 1,
  },
  menu: {
    padding: 25,
    gap: 27,
    flex: 1,
  },
  guidelinesScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 7,
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default GuidelinesScreen;
