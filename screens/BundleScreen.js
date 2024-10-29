import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";
import Carousel from "react-native-snap-carousel";
import { Color, Padding } from "../GlobalStyles";
import { storefront } from "../api";
import BackButton from "../components/BackButton";
import BundleOptionSelect from "../components/BundleOptionSelect"; // Import the new component
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: screenWidth } = Dimensions.get("window");

const BundleScreen = ({ route }) => {
  const navigation = useNavigation();
  const [bundle, setBundle] = useState(null);
  const { handle } = route.params; // Get handle from route params
  const [bundleString, setBundleString] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedBundle = await getBundle(handle);
        setBundle(fetchedBundle);
      } catch (error) {
        console.error("Error fetching product:", error);
        alert(
          "There was an issue loading the product details. Please try again."
        );
      }
    };

    fetchProduct();
  }, [handle]);


  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image
        style={styles.carouselImage}
        contentFit="contain"
        source={{ uri: item.node.previewImage.url }}
      />
    </View>
  );

  const handleBundleChange = (newBundleString, options) => {
    setBundleString(newBundleString);
    setSelectedOptions(options);
    console.log(selectedOptions)
  };

  const addToCart = async () => {
    const cartId = await AsyncStorage.getItem("cartId");
    if (!cartId) {
      alert("Cart ID not found. Please try again.");
      return;
    }
  
    const attributes = [
      ...Object.keys(selectedOptions).map((key) => ({
        key: key,
        value: selectedOptions[key],
      })),
      { key: "_bundle_selection", value: bundleString },
    ];
  
    const lines = [
      {
        merchandiseId: bundle.variants.edges[0].node.id,
        quantity: 1,
        attributes: attributes,
      },
    ];
  
    const result = await addCartLines(cartId, lines);
    if (result.error) {
      alert("Error adding to cart: " + result.error[0]?.message);
    } else {
      alert("Product added to cart!");
    }
  };
  

  return (
    <ScrollView style={styles.consultationScreen}>
      <BackButton />
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate("MainMenuPhone")}
      >
        <ImageBackground
          style={styles.logoIcon}
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/logo3x.png")}
        />
      </TouchableOpacity>

      {bundle ? (
        <View style={styles.ProductView}>
          <Text style={styles.productTitle}>{bundle.title}</Text>
          <Text style={styles.productPrice}>
            {`$${bundle.variants.edges[0].node.price.amount}0 ${bundle.variants.edges[0].node.price.currencyCode}`}
          </Text>

          {/* Image Carousel */}
          <Carousel
            data={bundle.media.edges}
            renderItem={renderCarouselItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth - 60} // Adjust item width
            loop={true}
          />

          {/* Render HTML description */}
          <View style={{ padding: 15 }}>
            <RenderHtml
              contentWidth={screenWidth}
              source={{ html: bundle.descriptionHtml }}
            />
          </View>

          {/* Conditionally render BundleOptionSelect */}
          {bundle.productType === "bundle" && (
            <BundleOptionSelect
              voMetafield={
                bundle.variants.edges[0].node.variantOptionsMetafield?.value
              }
              voMetafieldv2={
                bundle.variants.edges[0].node.variantOptionsv2Metafield?.value
              }
              handleBundleChange={handleBundleChange}
            />
          )}

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={addToCart}
            accessibilityLabel="Add this product to your cart"
            accessibilityRole="button"
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ProductView: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
    shadowColor: "black",
    shadowOffset: 2,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  consultationScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 874,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    flex: 1,
  },
  productTitle: {
    fontSize: 34,
    fontWeight: "bold",
    paddingLeft: "4%",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "500",
    color: Color.colorBlack,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 5,
    alignSelf: "flex-start",
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    width: screenWidth - 60,
  },
  carouselImage: {
    width: screenWidth - 60,
    height: 400,
  },
  addToCartButton: {
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Color.themeColor,
    width: "80%", // Adjust width if needed for alignment
    marginVertical: 10,
  },
  addToCartButtonText: {
    color: Color.colorBlack,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BundleScreen;

const gql = String.raw;
export async function getBundle(handle) {
  const bundleQuery = gql`
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        descriptionHtml
        tags
        totalInventory
        onlineStoreUrl
        productType
        media(first: 10) {
          edges {
            node {
              previewImage {
                url
              }
            }
          }
        }
        variants(first: 1) {
          edges {
            cursor
            node {
              metafield(namespace: "simple_bundles", key: "bundled_variants") {
                value
                type
              }
              variantOptionsMetafield: metafield(
                namespace: "simple_bundles"
                key: "variant_options"
              ) {
                value
                type
              }
              variantOptionsv2Metafield: metafield(
                namespace: "simple_bundles"
                key: "variant_options_v2"
              ) {
                value
                type
              }
              id
              title
              image {
                url
              }
              quantityAvailable
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront(bundleQuery, { handle });
  const bundle = data.product;

  if (bundle.variants.edges.length > 0) {
    const variant = bundle.variants.edges[0].node;

    const parseMetafield = (metafield) => {
      if (metafield && metafield.value) {
        try {
          return JSON.parse(metafield.value);
        } catch (error) {
          console.error("Error parsing metafield value:", metafield.value);
          return null; // Return null or handle error as needed
        }
      }
      return null;
    };

    variant.variantOptionsMetafield.value = parseMetafield(
      variant.variantOptionsMetafield
    );
    variant.variantOptionsv2Metafield.value = parseMetafield(
      variant.variantOptionsv2Metafield
    );
  }

  return bundle;
}

export async function addCartLines(cartId, lines) {
  const addCartQuery = gql`
    mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          lines(first: 10) {
            edges {
              node {
                id
                attributes {
                  key
                  value
                }
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
        }

        userErrors {
          field
          message
        }
      }
    }
  `;
  try {
    const variables = {
      cartId,
      lines,
    };

    const response = await storefront(addCartQuery, variables);
    const { cartLinesAdd } = response.data;

    if (cartLinesAdd.userErrors.length > 0) {
      console.error("Errors:", cartLinesAdd.userErrors);
      return { error: cartLinesAdd.userErrors };
    }

    console.log("Updated cart:", cartLinesAdd.cart);
    return { cart: cartLinesAdd.cart };
  } catch (error) {
    console.error("Network or server error:", error);
    return { error };
  }
}
