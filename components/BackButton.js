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
    padding: 12,
    alignSelf: "flex-start",
    borderRadius: 15,
    borderWidth: 1,
    height: 45,
    width: 75,
    left: 25,
  },
  buttonText: {
    color: Color.colorBlack,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center"
  },
});

export default BackButton;
