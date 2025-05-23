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

const BridalScreen = () => {
  const navigation = useNavigation();

  // handle method to navigate to ProductScreen with a handle
  const onHandle = (str) => {
    navigation.navigate("BundleScreen", { handle: str });
  };

  const onHandle2 = (str) => {
    navigation.navigate("ProductsScreen", { handle: str });
  };

  return (
    <ScrollView
      style={styles.bridalScreen}
      contentContainerStyle={{
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
      }}
    >
      <BackButton />

      <Text style={styles.bridal}>{`BRIDAL`}</Text>
      <TouchableOpacity onPress={() => onHandle("bridal-bundle")}>
        <View style={[styles.bridalButton, styles.logoFlexBox]}>
          <Image
            style={styles.bridalIcon}
            contentFit="contain"
            source={require("../assets/galler3x.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onHandle2("bridal-collection")}>
        <View style={[styles.bridalButton, styles.logoFlexBox]}>
          <Image
            style={styles.bridalIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/bridal13x.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("StoreScreen")}>
        <View style={[styles.bridalButton, styles.logoFlexBox]}>
          <Image
            style={styles.bridalIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/store3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StorefrontScreen")}>
        <View style={[styles.bridalButton, styles.logoFlexBox]}>
          <Image
            style={styles.bridalIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/fronts3x.png")}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bridal: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  bridalIcon: {
    width: 300,
    height: 100,
  },
  bridalButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 15,
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default BridalScreen;
