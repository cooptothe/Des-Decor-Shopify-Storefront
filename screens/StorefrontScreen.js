import React from "react";
import BackButton from "../components/BackButton";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

const StorefrontScreen = () => {
  const handleOpenLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <BackButton />

        <View style={styles.linksContainer}>
          {/* First hyperlink */}
          <TouchableOpacity onPress={() => handleOpenLink("https://www.theknot.com/marketplace/des-decor-hoboken-nj-2078514?fbclid=PAAabs9HWNd6k5kftP7aq98tURO8Hs6LMTGPsTCuiStrlyoAQd7PRYeEPAnXU_aem_AdgS5OkljcLa-50FsqCGNnxyJbMNigac7qq0NADaJjdvgrbkGEB_pu6K-9fgBjgsmjo")}>
            <Text style={styles.linkText}>The Knot</Text>
          </TouchableOpacity>

          {/* Second hyperlink */}
          <TouchableOpacity onPress={() => handleOpenLink("https://www.weddingwire.com/biz/des-decor/7caab82427a6d1d0.html")}>
            <Text style={styles.linkText}>Wedding Wire</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  linksContainer: {
    // Position your links however you want:
    // For example, near the bottom with some padding:
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
  },
  linkText: {
    color: "#0066CC",
    fontSize: 18,
    marginVertical: 8,
    textDecorationLine: "underline",
  },
});

export default StorefrontScreen;
