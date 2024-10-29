import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackButton from '../components/BackButton';

const MainMenuPhone = () => {
  const navigation = useNavigation();

  return (
<ScrollView 
  style={styles.mainMenuPhone} 
  contentContainerStyle={{ justifyContent: "space-between", alignItems: "center" }}
>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    paddingBottom: "10%"
  },
});

export default MainMenuPhone;