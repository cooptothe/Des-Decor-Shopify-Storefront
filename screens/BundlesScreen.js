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

const BundlesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bundlesScreen}>
      <Pressable
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground style={styles.logoIcon} resizeMode="contain" />
      </Pressable>
      <Text style={styles.decorToGo}>DECOR TO GO BUNDLES</Text>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/sig-cake.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/mix-table.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/dinn-party.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/kids-party.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/stndrd-bundle.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/corp-events.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.holBundleIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/hol-bundle.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/pic-bundle.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/zod-bundle.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/prem-bundle.png")}
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
    width: 393,
    height: 193,
  },
  logo: {
    alignSelf: "stretch",
  },
  decorToGo: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 76,
    fontWeight: "500",
    fontFamily: FontFamily.inter,
    color: Color.colorGray,
    textAlign: "center",
  },
  sigCakeIcon: {
    width: 333,
    height: 122,
  },
  signButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  holBundleIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 122,
    alignSelf: "stretch",
    width: "100%",
  },
  bundlesScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    gap: 42,
    alignItems: "center",
    width: "100%",
  },
});

export default BundlesScreen;