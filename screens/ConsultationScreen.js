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

const ConsultationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.consultationScreen}>
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo33x.png")}
        />
      </Pressable>
      <Text style={styles.bookAConsultation}>BOOK A CONSULTATION</Text>
      <View style={styles.bookingView}>
        <Image
          style={styles.bookingIcon}
          contentFit="contain"
          source={require("../assets/booking1x.png")}
        />
      </View>
      <View style={styles.imgs}>
        <ImageBackground
          style={[styles.frameIcon, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame1x.png")}
        />
        <ImageBackground
          style={[styles.frameIcon1, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame11x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logo: {
    height: 177,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bookAConsultation: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 37,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    alignSelf: "stretch",
  },
  bookingIcon: {
    width: 402,
    height: 361,
  },
  bookingView: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 175,
    height: 188,
    justifyContent: "flex-end",
  },
  frameIcon1: {
    width: 187,
    height: 183,
  },
  imgs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  consultationScreen: {
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

export default ConsultationScreen;