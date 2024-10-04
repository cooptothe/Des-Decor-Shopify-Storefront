import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ConsultationScreen = () => {
  return (
    <View style={[styles.consultationScreen, styles.menuFlexBox]}>
      <Image
        style={[styles.consultationScreenChild, styles.bookingIconLayout]}
        resizeMethod="scale"
        contentFit="contain"
        source={require("../assets/logo2.png")}
      />
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.bookAConsultation}>BOOK A CONSULTATION</Text>
        <View style={styles.bookingWrapper}>
          <Image
            style={[styles.bookingIcon, styles.bookingIconLayout]}
            contentFit="contain"
            source={require("../assets/booking.png")}
          />
        </View>
        <View style={styles.imgs}>
          <ImageBackground
            style={[styles.frameIcon, styles.frameIconFlexBox]}
            resizeMode="contain"
            source={require("../assets/frame1.png")}
          />
          <ImageBackground
            style={[styles.frameIcon1, styles.frameIconFlexBox]}
            resizeMode="contain"
            source={require("../assets/frame2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    justifyContent: "space-between",
    flex: 1,
  },
  bookingIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  frameIconFlexBox: {
    height: 321,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
  consultationScreenChild: {
    height: 175,
  },
  bookAConsultation: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 37,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    height: 37,
    alignSelf: "stretch",
  },
  bookingIcon: {
    maxHeight: "100%",
    flex: 1,
    maxWidth: "100%",
  },
  bookingWrapper: {
    height: 339,
    width: 402,
  },
  frameIcon: {
    justifyContent: "flex-end",
  },
  frameIcon1: {
    marginLeft: -64,
  },
  imgs: {
    flexDirection: "row",
    justifyContent: "center",
    width: 402,
    alignItems: "center",
  },
  menu: {
    alignSelf: "stretch",
  },
  consultationScreen: {
    backgroundColor: Color.colorWhite,
    height: 874,
    paddingHorizontal: 0,
    paddingVertical: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default ConsultationScreen;
