import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const BundlesScreen = () => {
  const navigation = useNavigation();

  // handle method to navigate to ProductScreen with a handle
  const onHandle = (str) => {
    navigation.navigate("ProductScreen", { handle: str });
  };

  return (
    <View style={styles.bundlesScreen}>
      <TouchableOpacity
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>
      <Text style={styles.decorToGo}>DECOR TO GO BUNDLES</Text>
      <ScrollView>
        <TouchableOpacity
          onPress={() => onHandle("signature-cake-table-bundle")}
        >
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/sig-cake3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onHandle("mix-and-match-cake-table-bundle")}
        >
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/mix-table3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("dinner-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/dinn-party3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("kids-party-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/kids-party3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("bridal-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/stndrd-bundle3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("corporate-events-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/corp-events3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("holiday-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/hol-bundle3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("picnic-table")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/pic-bundle3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("zodiac-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/zod-bundle3x.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandle("premium-bridal-bundle")}>
          <View style={[styles.signButton, styles.logoFlexBox]}>
            <Image
              style={styles.sigCakeIcon}
              resizeMethod="scale"
              contentFit="contain"
              source={require("../assets/prem-bundle3x.png")}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  logo: {
    alignSelf: "stretch",
  },
  decorToGo: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  sigCakeIcon: {
    width: 342,
    height: 93,
  },
  signButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 20,
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
