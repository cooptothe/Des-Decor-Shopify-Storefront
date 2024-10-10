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

const BridalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bridalScreen}>
      <TouchableOpacity
        style={styles.logoFlexBox}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>
      <Text style={styles.bridal}>{`BRIDAL`}</Text>
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
    height: 300,
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