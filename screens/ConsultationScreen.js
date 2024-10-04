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

const ConsultationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.consultationScreen, styles.menuFlexBox]}>
      <Pressable
        style={[styles.logoWrapper, styles.imgsFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="contain"
          source={require("../assets/logo2.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Text style={styles.bookAConsultation}>BOOK A CONSULTATION</Text>
        <View style={styles.bookingWrapper}>
          <Image
            style={styles.bookingIcon}
            contentFit="contain"
            source={require("../assets/booking.png")}
          />
        </View>
        <View style={[styles.imgs, styles.imgsFlexBox]}>
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
  imgsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIconFlexBox: {
    height: 321,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logoWrapper: {
    height: 175,
    alignSelf: "stretch",
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
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
    width: 402,
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
