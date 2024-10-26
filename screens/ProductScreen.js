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
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: screenWidth } = Dimensions.get("window");

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const { handle } = route.params; // Get handle from route params

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(handle); // Pass handle to getProduct
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [handle]);

  const addToCart = async () => {
    const cartId = await AsyncStorage.getItem('cartId'); // Get cart ID from storage
    console.log("Cart loaded from storage:", cartId);
    const lines = [
      {
        merchandiseId: product.variants.edges[0].node.id,
        quantity: 1,
      },
    ];
  
    const result = await addCartLines(cartId, lines);
  
    if (result.error) {
      alert("Error adding to cart: " + result.error[0]?.message);
    } else {
      alert("Item added to cart successfully!");
    }
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image
        style={styles.carouselImage}
        contentFit="contain"
        source={{ uri: item.node.previewImage.url }}
      />
    </View>
  );

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

      {product ? (
        <View style={styles.ProductView}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>
            {`$${product.variants.edges[0].node.price.amount} ${product.variants.edges[0].node.price.currencyCode}`}
          </Text>

          {/* Image Carousel */}
          <Carousel
            data={product.media.edges}
            renderItem={renderCarouselItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth - 60} // Adjust item width
            loop={true}
          />

          {/* Render HTML description */}
          <View style={{ padding: 15 }}>
            <RenderHtml
              contentWidth={screenWidth}
              source={{ html: product.descriptionHtml }}
            />
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
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

export default ProductScreen;

const gql = String.raw;
export async function getProduct(handle) {
  const productQuery = gql`
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

  const { data } = await storefront(productQuery, { handle });
  const product = data.product;
  console.log("VARIANT_ID:", product.variants.edges[0].node.id);
  return product;
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
