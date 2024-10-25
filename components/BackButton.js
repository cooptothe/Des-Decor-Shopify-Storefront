// components/BackButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignSelf: "flex-start",
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    width: 60,
    left: 20,
    opacity: "100%",
    backgroundColor: Color.themeColor
  },
  buttonText: {
    color: Color.colorBlack,
    fontSize: 14,
    fontWeight: 
    "500",
    alignSelf: "center",
    paddingTop: 1
  },
});

export default BackButton;
