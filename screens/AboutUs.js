import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

const AboutUs = () => {
  // If you want to load the PDF from a local file in iOS, use require here.
  const source = require('../assets/AboutUsPDF.pdf');

  const handleLoadComplete = (numberOfPages, filePath) => {
    console.log(`Number of pages: ${numberOfPages}`);
  };

  const handlePageChanged = (page, numberOfPages) => {
    console.log(`Current page: ${page}`);
  };

  const handleError = (error) => {
    console.log(error);
  };

  const handleLinkPress = (uri) => {
    console.log(`Link pressed: ${uri}`);
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={handleLoadComplete}
        onPageChanged={handlePageChanged}
        onError={handleError}
        onPressLink={handleLinkPress}
        style={styles.pdf}
      />
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
