import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BundleItems = ({ bundleItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <strong>This bundle includes:</strong>
      </Text>
      <FlatList
        data={bundleItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.quantity_in_bundle} x {item.product_title}
            {item.variant_title !== 'Option' ? ` - ${item.variant_title}` : ''}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: "center"
  },
  header: {
    fontWeight: 'light',
    marginBottom: 4,
  },
  item: {
    fontSize: 12,
    marginVertical: 1,
  },
});

export default BundleItems;
