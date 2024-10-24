import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebView } from "react-native-webview";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackButton from '../components/BackButton';

const ConsultationScreen = () => {
  const navigation = useNavigation();

  // HTML and JavaScript to inject into WebView
  const calendlyHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </head>
      <body style="margin:0;padding:0;overflow:hidden;">
        <div class="calendly-inline-widget" style="width: 100%; height:100%;" data-auto-load="true"></div>
        <script type="text/javascript">
          Calendly.initInlineWidget({
            url: "https://calendly.com/d/y7c-k84-q9w/",
            parentElement: document.querySelector('.calendly-inline-widget')
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.consultationScreen}>
      {/* Title */}
      <Text style={styles.bookAConsultation}>BOOK A CONSULTATION</Text>

      {/* Calendly WebView */}
      <SafeAreaView style={styles.bookingView}>
        <WebView
          style={{ flex: 1 }}
          originWhitelist={["*"]}
          source={{ html: calendlyHtml }}
        />
      </SafeAreaView>

      {/* Decorative Images */}
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
  bookAConsultation: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
  bookingView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    color: 'black'
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
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
});

export default ConsultationScreen;
