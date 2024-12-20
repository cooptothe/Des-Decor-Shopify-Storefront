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

const InventoryScreen = () => {
  const navigation = useNavigation();

  // handle method to navigate to collectionScreen with a handle
  const onHandle2 = (str) => {
    navigation.navigate("ProductsScreen", { handle: str });
  };

  return (
    <ScrollView style={styles.inventoryScreen}
    contentContainerStyle={{
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
       }}>
      <BackButton />
      <Text style={styles.inventory}>{`INVENTORY`}</Text>
      <TouchableOpacity onPress={() => onHandle2("walls")} >
        <View style={[styles.wallButton, styles.logoFlexBox]}>
          <Image
            style={styles.wallsIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/walls3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle2("tables")}>
        <View style={[styles.wallButton, styles.logoFlexBox]}>
          <Image
            style={styles.wallsIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/tables3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle2("centerpieces")}>
        <View style={[styles.wallButton, styles.logoFlexBox]}>
          <Image
            style={styles.wallsIcon}
            contentFit="contain"
            source={require("../assets/acc3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle2("balloons")}>
        <View style={[styles.wallButton, styles.logoFlexBox]}>
          <Image
            style={styles.wallsIcon}
            contentFit="contain"
            source={require("../assets/ball3x.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandle2("customs")}>
        <View style={[styles.wallButton, styles.logoFlexBox]}>
          <Image
            style={styles.wallsIcon}
            resizeMethod="scale"
            contentFit="contain"
            source={require("../assets/cust3x.png")}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inventory: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  wallsIcon: {
    width: 342,
    height: 93,
  },
  wallButton: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
  },
  inventoryScreen: {
    backgroundColor: Color.colorWhite,
  },
});

export default InventoryScreen;
