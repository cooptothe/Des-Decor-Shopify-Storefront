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

const GuidelinesScreen = () => {
  const navigation = useNavigation();

  const message = (msg) => {
    alert(msg);
  };

  return (
    <View style={styles.guidelinesScreen}>
      <BackButton />
      <Text
        style={styles.rentalGuidelinesAnd}
      >{`RENTAL GUIDELINES AND POLICIES`}</Text>
      <TouchableOpacity
        onPress={() =>
          message(
            `Single Item renting: $300
Bundle Order: $400 
NJ Resident/Pick up orders: $200 
(A damage fee of $50-$100 is charged and then refunded once all items are returned in the form they were rented!)`
          )
        }
      >
        <View style={[styles.rentButton, styles.logoFlexBox]}>
          <Image
            style={styles.rentIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/rent3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          message(
            `Single Item renting - $300
Bundle Order - $400 
NJ Resident/Pick up orders: $200 
(A damage fee of $50-$100 is charged and then refunded once all items are returned in the form they were rented!)`
          )
        }
      >
        <View style={[styles.rentButton, styles.logoFlexBox]}>
          <Image
            style={styles.rentIcon}
            contentFit="contain"
            source={require("../assets/decor3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.rentButton, styles.logoFlexBox]}>
          <Image
            style={styles.rentIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/deposits3x.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.rentButton, styles.logoFlexBox]}>
          <Image
            style={styles.rentIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/contact3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.rentButton, styles.logoFlexBox]}>
          <Image
            style={styles.rentIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/mission3x.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rentalGuidelinesAnd: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  rentIcon: {
    width: 342,
    height: 93,
  },
  rentButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  guidelinesScreen: {
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

export default GuidelinesScreen;
