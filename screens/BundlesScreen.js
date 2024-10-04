import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BundlesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bundlesScreen, styles.decorToGoFlexBox]}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <Image
          style={styles.icon}
          contentFit="contain"
          source={require("../assets/frame-1.png")}
        />
      </Pressable>
      <ScrollView
        style={styles.menuFlexBox}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.menuScrollViewContent}
      >
        <Text style={[styles.decorToGo, styles.menuFlexBox]}>
          DECOR TO GO BUNDLES
        </Text>
        <Image
          style={[styles.sigCakeIcon, styles.iconLayout]}
          contentFit="contain"
          source={require("../assets/sig-cake.png")}
        />
        <Image
          style={[styles.mixTableIcon, styles.iconLayout]}
          contentFit="contain"
          source={require("../assets/mix-table.png")}
        />
        <Image
          style={[styles.dinnPartyIcon, styles.iconLayout]}
          contentFit="contain"
          source={require("../assets/dinn-party.png")}
        />
        <Image
          style={[styles.kidsPartyIcon, styles.iconLayout]}
          contentFit="contain"
          source={require("../assets/kids-party.png")}
        />
        <Image
          style={[styles.stndrdBundleIcon, styles.iconLayout]}
          contentFit="contain"
          source={require("../assets/stndrd-bundle.png")}
        />
        <Image
          style={[styles.premBundleIcon, styles.bundleIconLayout]}
          contentFit="contain"
          source={require("../assets/prem-bundle.png")}
        />
        <Image
          style={[styles.zodBundleIcon, styles.bundleIconLayout]}
          contentFit="contain"
          source={require("../assets/zod-bundle.png")}
        />
        <Image
          style={[styles.picBundleIcon, styles.bundleIconLayout]}
          contentFit="contain"
          source={require("../assets/pic-bundle.png")}
        />
        <Image
          style={[styles.holBundleIcon, styles.bundleIconLayout]}
          contentFit="contain"
          source={require("../assets/hol-bundle.png")}
        />
        <Image
          style={[styles.corpEventsIcon, styles.bundleIconLayout]}
          contentFit="contain"
          source={require("../assets/corp-events.png")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  decorToGoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconLayout: {
    height: 100,
    width: 283,
  },
  bundleIconLayout: {
    maxHeight: "100%",
    left: "15.45%",
    right: "14.2%",
    width: "70.36%",
    height: "14.7%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  wrapper: {
    height: 181,
    width: "100%",
  },
  decorToGo: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 76,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  sigCakeIcon: {
    zIndex: 1,
  },
  mixTableIcon: {
    zIndex: 2,
  },
  dinnPartyIcon: {
    zIndex: 3,
  },
  kidsPartyIcon: {
    zIndex: 4,
  },
  stndrdBundleIcon: {
    zIndex: 5,
  },
  premBundleIcon: {
    top: "182.36%",
    bottom: "-97.06%",
    zIndex: 6,
  },
  zodBundleIcon: {
    top: "163.09%",
    bottom: "-77.79%",
    zIndex: 7,
  },
  picBundleIcon: {
    top: "143.83%",
    bottom: "-58.53%",
    zIndex: 8,
  },
  holBundleIcon: {
    top: "124.41%",
    bottom: "-39.11%",
    zIndex: 9,
  },
  corpEventsIcon: {
    top: "105%",
    bottom: "-19.7%",
    zIndex: 10,
  },
  bundlesScreen: {
    backgroundColor: Color.colorWhite,
    height: 852,
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
});

export default BundlesScreen;
