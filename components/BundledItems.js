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
            {item.variant_title !== 'Default Title' ? ` - ${item.variant_title}` : ''}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default BundleItems;
