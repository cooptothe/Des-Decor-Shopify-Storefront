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
import BackButton from '../components/BackButton';

const BridalScreen = () => {
  const navigation = useNavigation();

    // handle method to navigate to ProductScreen with a handle
    const onHandle = (str) => {
      navigation.navigate("ProductScreen", { handle: str });
    };

  return (
    <View style={styles.bridalScreen}>
      <Text style={styles.bridal}>{`BRIDAL`}</Text>
      <TouchableOpacity onPress={() => onHandle("bridal-bundle")}>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/bridal13x.png")}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle("premium-bridal-bundle")}>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/premi3x.png")}
        />
      </View>
      </TouchableOpacity>

      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/store3x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          resizeMethod="scale"
          contentFit="contain"
          source={require("../assets/fronts3x.png")}
        />
      </View>
      <View style={[styles.bridalButton, styles.logoFlexBox]}>
        <Image
          style={styles.bridalIcon}
          contentFit="contain"
          source={require("../assets/galler3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bridal: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 49,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  bridalIcon: {
    width: 342,
    height: 101,
  },
  bridalButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  bridalScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
});

export default BridalScreen;