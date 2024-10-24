import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { storefront } from "../api";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackButton from '../components/BackButton';

const BundlesScreen = () => {
  const navigation = useNavigation();
  const [bundle, setBundles] = useState(null);

  // handle method to navigate to ProductScreen with a product handle
  const onHandle = (productHandle) => {
    navigation.navigate("ProductScreen", { handle: productHandle });
  };

  useEffect(() => {
    const fetchBundles = async () => {
      const fetchedBundles = await getBundles(); // Fetch the bundles
      setBundles(fetchedBundles);
    };

    fetchBundles();
  }, []);

  return (
    <View style={styles.screen}>
      <BackButton />
      <Text
        style={styles.screenTitle}
      >{`BUNDLES`}</Text>
      {/* Collection Title */}
      <Text style={styles.collectionTitle}>
        {bundle ? bundle.title : "Loading..."}
      </Text>

      {/* ScrollView for displaying products */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {bundle?.edges.map(({ node: product }) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            onPress={() => onHandle(product.handle)} // Navigate with the product's handle
          >
            {/* Product Image */}
            <Image
              style={styles.productImage}
              contentFit="contain"
              source={{ uri: product.images.edges[0]?.node.url }}
            />

            {/* Product Title */}
            <Text style={styles.productTitle}>{product.title}</Text>

            {/* Product Price */}
            <Text style={styles.productPrice}>
              {`$${product.priceRange.minVariantPrice.amount} ${product.priceRange.minVariantPrice.currencyCode}`}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
  },
  collectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    padding: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  productContainer: {
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
    height: 300,
    width: 300,
    shadowColor: "black",
    shadowOffset: 2,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: Color.colorBlack,
    textAlign: "center",
  },
  screenTitle : {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
  }
});

export default BundlesScreen;

const gql = String.raw;
export async function getBundles() {
  const bundlesQuery = gql`
    query getProductsAndVariants {
      products(first: 100, query: "product_type:'bundle'") {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront(bundlesQuery); // No need to pass handle
  return data.products; // Return the list of products
}
