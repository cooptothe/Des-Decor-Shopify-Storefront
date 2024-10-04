import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Gap, Padding } from "../GlobalStyles";

const MainMenuPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainMenuPhone}>
      <Image
        style={styles.frameIcon}
        contentFit="contain"
        source={require("../assets/frame.png")}
      />
      <Pressable
        style={[styles.menu, styles.menuFlexBox]}
        onPress={() => navigation.navigate("BundlesScreen")}
      >
        <Text
          style={[styles.mainMenu, styles.menuFlexBox]}
        >{`MAIN MENU  `}</Text>
        <Image
          style={styles.menuChildLayout}
          contentFit="contain"
          source={require("../assets/frame-2.png")}
        />
        <Pressable
          style={[styles.invetoryWrapper, styles.menuFlexBox]}
          onPress={() => navigation.navigate("InventoryScreen")}
        >
          <Image
            style={styles.menuChildLayout}
            contentFit="contain"
            source={require("../assets/invetory.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.invetoryWrapper, styles.menuFlexBox]}
          onPress={() => navigation.navigate("BridalScreen")}
        >
          <Image
            style={styles.menuChildLayout}
            contentFit="contain"
            source={require("../assets/bridal.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.invetoryWrapper, styles.menuFlexBox]}
          onPress={() => navigation.navigate("GuidelinesScreen")}
        >
          <Image
            style={styles.menuChildLayout}
            contentFit="contain"
            source={require("../assets/guidelines.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.invetoryWrapper, styles.menuFlexBox]}
          onPress={() => navigation.navigate("ConsultationScreen")}
        >
          <Image
            style={styles.menuChildLayout}
            contentFit="contain"
            source={require("../assets/consult.png")}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameIcon: {
    height: 175,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  mainMenu: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  menuChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  invetoryWrapper: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "center",
  },
  menu: {
    justifyContent: "space-around",
    padding: Padding.p_xl,
    gap: Gap.gap_md,
  },
  mainMenuPhone: {
    backgroundColor: Color.colorWhite,
    height: 774,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MainMenuPhone;
