import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure this is installed and imported correctly

const BundleOptionSelect = ({ selectedVariant, voMetafield, voMetafieldv2, handleBundleChange }) => {
  const [bundleSelection, setBundleSelection] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [prevBundleString, setPrevBundleString] = useState(null);

  useEffect(() => {
    if (voMetafieldv2) {
      if (!prevBundleString) {
        const initialOptions = {};
        let initialBundleParts = [];

        voMetafieldv2.forEach((optionGroup) => {
          const groupParts = optionGroup
            .map((option) => {
              const optionName = option.optionName;
              const optionValues = option.optionValues.split(', ');
              initialOptions[optionName] = optionValues[0]; // Set the initial option value
              return optionValues[0]; // Return the initial option value
            })
            .join(' ++ ');

          initialBundleParts.push(groupParts);
        });

        const initialBundleString = initialBundleParts.join(' <> ');

        setSelectedOptions(initialOptions);
        setBundleSelection(initialBundleString);
        setPrevBundleString(initialBundleString);

        handleBundleChange(initialBundleString, initialOptions);
      }

      const bundleParts = voMetafieldv2.map((optionGroup) => {
        return optionGroup
          .map((option) => selectedOptions[option.optionName] || '')
          .join(' ++ ');
      });

      const bundleString = bundleParts.join(' <> ');

      if (bundleString !== prevBundleString) {
        setBundleSelection(bundleString);
        setPrevBundleString(bundleString);

        handleBundleChange(bundleString, selectedOptions);
      }
    }
  }, [selectedOptions, prevBundleString, voMetafield, voMetafieldv2, handleBundleChange]);

  const handleSelectChange = (value, optionName) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: value,
    });
  };

  return (
    <View style={{ alignSelf: "flex-start", width: "90%", left: 10 }}>
      {voMetafieldv2 && voMetafieldv2.map((optionGroup, index) => (
        <View key={index}>
          {optionGroup.map((option, subIndex) => {
            const optionName = option.optionName;
            const optionValues = option.optionValues.split(',');

            let inventories = [];
            if (voMetafield) {
              const matchingInventory = voMetafield.find(item => item.optionName === optionName);
              inventories = matchingInventory ? matchingInventory.optionInventories.split(',') : [];
            }

            return (
              <View key={`${index}-${subIndex}`} style={styles.optionContainer}>
                <Text style={{ alignSelf: "flex-start" }}>{optionName}</Text>
                <Picker
                  selectedValue={selectedOptions[optionName]}
                  onValueChange={(value) => handleSelectChange(value, optionName)}
                >
                  {optionValues.map((value, i) => (
                    inventories[i] !== '0' ? (
                      <Picker.Item key={i} label={value} value={value} />
                    ) : null
                  ))}
                </Picker>
              </View>
            );
          })}
        </View>
      ))}

      {/* Hidden fields (not rendered in React Native, but could be part of the logic) */}
      {Object.keys(selectedOptions).map((key, index) => (
        <Text key={index} style={styles.hiddenField}>
          {`properties[${key}]: ${selectedOptions[key]}`}
        </Text>
      ))}
      <Text style={styles.hiddenField}>{`_bundle_selection: ${bundleSelection}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    marginBottom: 1,
  },
  hiddenField: {
    fontSize: 1, // Note: This won't actually hide in React Native, but can be logged or handled elsewhere
  },
});

export default BundleOptionSelect;
