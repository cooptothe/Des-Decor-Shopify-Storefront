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
import { Color, Padding } from "../GlobalStyles";
import { storefront } from "../api";

const ProductsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [collection, setCollection] = useState(null);
  const { handle } = route.params;  // Get collection handle from route params

  // handle method to navigate to ProductScreen with a product handle
  const onHandle = (productHandle) => {
    navigation.navigate("ProductScreen", { handle: productHandle });
  };

  useEffect(() => {
    const fetchCollection = async () => {
      const fetchedCollection = await getCollection(handle);  // Fetch the collection by handle
      setCollection(fetchedCollection);
    };

    fetchCollection();
  }, [handle]);

  return (
    <View style={styles.screen}>
      {/* Logo */}
      <TouchableOpacity
        style={[styles.logo, styles.logoFlexBox]}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>

      {/* Collection Title */}
      <Text style={styles.collectionTitle}>
        {collection ? collection.title : "Loading..."}
      </Text>

      {/* ScrollView for displaying products */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {collection?.products?.edges.map(({ node: product }) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            onPress={() => onHandle(product.handle)}  // Navigate with the product's handle
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
              {`$${product.priceRange.minVariantPrice.amount}0 ${product.priceRange.minVariantPrice.currencyCode}`}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: 400,
    height: 300,
  },
  logo: {
    alignSelf: "stretch",
  },
  screen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    paddingTop: Padding.p_xl,
  },
  collectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    alignItems: "center",
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
});

export default ProductsScreen;


const gql = String.raw;
export async function getCollection(handle) {
  const productsQuery = gql`
query getProductsInCollection($handle: String!) {
	collection(handle: $handle) {
		id
		title
		products(first: 50, sortKey: BEST_SELLING) {
			edges {
				node {
					id
					title
					vendor
                    handle
					availableForSale
					images(first: 1) {
						edges {
							node {
								id
								url
								width
								height
								altText
							}
						}
					}
					priceRange {
						minVariantPrice {
							amount
							currencyCode
						}
						maxVariantPrice {
							amount
							currencyCode
						}
					}
				}
			}
		}
	}
}

  `;

  const { data } = await storefront(productsQuery, { handle }); // Pass handle as a query variable
  const collection = data.collection;
  return collection;
}
