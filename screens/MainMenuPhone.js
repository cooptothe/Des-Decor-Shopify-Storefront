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

const MainMenuPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainMenuPhone, styles.logoFlexBox]}>
      <View style={[styles.logo, styles.logoFlexBox]}>
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </View>
      <Text style={styles.mainMenu}>{`MAIN MENU`}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BundlesScreen")}
      >
        <Image
          style={styles.icon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/bundlesB3x.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InventoryScreen")}
      >
        <Image
          style={styles.icon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/invetory3x.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GuidelinesScreen")}
      >
        <Image
          style={styles.icon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/guidelines3x.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BridalScreen")}
      >
        <Image
          style={styles.icon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/bridal3x.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ConsultationScreen")}
      >
        <Image
          style={styles.icon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/consult3x.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logoIcon: {
    width: 400,
    height: 300,
  },
  logo: {
    alignItems: "center",
  },
  mainMenu: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  button: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  icon: {
    width: 342,
    height: 93,
  },
  mainMenuPhone: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10%"
  },
});

export default MainMenuPhone;