import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackButton from "../components/BackButton";

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  return (
    // 1) Wrap everything in a parent container with flex:1 and position: 'relative'
    <View style={styles.screenContainer}> 
      <ScrollView
        style={styles.guidelinesScreen}
        contentContainerStyle={styles.scrollViewContent}
      >
        <BackButton />
        <Text style={styles.rentalGuidelinesAnd}>
          RENTAL GUIDELINES AND POLICIES
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Rent")}>
          <View style={[styles.rentButton]}>
            <Image
              style={styles.rentIcon}
              source={require("../assets/rent3x.png")}
              contentFit="contain"
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Concierge")}>
          <View style={[styles.rentButton]}>
            <Image
              style={styles.rentIcon}
              source={require("../assets/decor3x.png")}
              contentFit="contain"
            />
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate("RefundScreen")}>
          <View style={[styles.rentButton]}>
            <Image
              style={styles.rentIcon}
              source={require("../assets/deposits3x.png")}
              contentFit="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")}>
          <View style={[styles.rentButton]}>
            <Image
              style={styles.rentIcon}
              source={require("../assets/contact3x.png")}
              contentFit="contain"
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* 2) Absolutely position the des.png logo at the bottom-right */}
      <Image
        source={require("../assets/des.png")}
        style={styles.desLogo}
        contentFit="contain"
      />
    </View>
  );
};

export default GuidelinesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    position: "relative", // allows absolute children to position relative to this container
  },
  guidelinesScreen: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollViewContent: {
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  rentButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    marginVertical: 10,
  },
  rentIcon: {
    width: 300,
    height: 100,
  },
  // This is the key style for positioning the image
  desLogo: {
    position: "absolute",
    bottom: -10,   // or 0 if you want it exactly at the edge
    left: 225,    // or 0 if you want it exactly at the edge
    width: 300,    // set width & height as needed
    height: 300,
    zIndex: 999,  // ensure it's on top if needed
  },
});
