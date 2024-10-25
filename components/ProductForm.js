import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BundleOptionSelect from './BundleOptionSelect'; // Adjust the import based on your file structure


const ProductForm = ({
  product,
  selectedVariant,
  variants,
  voMetafield,
  voMetafieldv2,
}) => {
  // Initialize state for bundle selection and selected options
  const [bundleSelection, setBundleSelection] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(selectedVariant); // Start with the selected variant

  // Define a function to handle bundle changes
  const handleBundleChange = (bundleString, options) => {
    setBundleSelection(bundleString);
    setSelectedOptions(options);
  };

  // Initialize an empty array to store line items
  let lines = [];

  // Check if a selected variant exists
  if (selectedOptions) {
    // Create a line item object for the selected variant
    const line = {
      merchandiseId: selectedOptions.id,
      quantity: 1,
    };

    // Check if there are selected options or a bundle selection
    if (Object.keys(selectedOptions).length > 0 || bundleSelection) {
      // Add attributes to the line item, including selected options and bundle selection
      line.attributes = Object.keys(selectedOptions)
        .map((key) => ({
          key: key,
          value: selectedOptions[key],
        }))
        .concat({
          key: '_bundle_selection',
          value: bundleSelection,
        });
    }

    // Push the line item to the lines array
    lines.push(line);
  }

  return (
    <View style={{ flex: 1, alignSelf: "stretch", padding: 10, width: "90%" }}>
      {/* Render Picker for variant selection */}
      <Text style={{ fontSize: 16, marginBottom: 2 }}>Options:</Text>
      <Picker
        selectedValue={selectedOptions}
        onValueChange={(itemValue) => {
          // Find the selected variant from the variants array
          const selected = variants.find(variant => variant.id === itemValue);
          setSelectedOptions(selected);
        }}
      >
        {variants.map((variant) => (
          <Picker.Item
            key={variant.id}
            label={variant.title}
            value={variant.id} // Use the variant ID as the value
          />
        ))}
      </Picker>

      {/* Render BundleOptionSelect component with relevant props */}
      <BundleOptionSelect
        voMetafield={voMetafield}
        voMetafieldv2={voMetafieldv2}
        handleBundleChange={handleBundleChange}
      />

      {/* Render AddToCartButton with relevant props */}
      <Button
        title={selectedOptions?.availableForSale ? 'Add to cart' : 'Sold out'}
        disabled={!selectedOptions || !selectedOptions.availableForSale}
        onPress={() => {
          // Logic for adding to cart goes here
          console.log("Adding to cart:", lines);
        }}
      />
    </View>
  );
};

export default ProductForm;
