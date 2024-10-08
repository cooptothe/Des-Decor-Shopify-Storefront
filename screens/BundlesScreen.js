import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  ScrollView
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import { useState, useEffect } from 'react';

const BundlesScreen = () => {
  const navigation = useNavigation();
  // create state for product handle
  const [handle, setHandle] = useState("");

  return (
    <ScrollView style={styles.bundlesScreen}>
      <Pressable
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground style={styles.logoIcon} resizeMode="contain" source={require("../assets/logo3x.png")} />
      </Pressable>
      <Text style={styles.decorToGo}>DECOR TO GO BUNDLES</Text>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/sig-cake3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/mix-table3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/dinn-party3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/kids-party3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/stndrd-bundle3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/corp-events3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.holBundleIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/hol-bundle3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/pic-bundle3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/zod-bundle3x.png")}
        />
      </View>
      <View style={[styles.signButton, styles.logoFlexBox]}>
        <Image
          style={styles.sigCakeIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/prem-bundle3x.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: 380,
    height: 300,
  },
  logo: {
    alignSelf: "stretch",
  },
  decorToGo: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 76,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
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
    gap: 45,
    width: "100%",
  },
});

export default BundlesScreen;