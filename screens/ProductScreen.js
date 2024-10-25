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
import ProductForm from "../components/ProductForm"; // Import the new ProductForm component
import BundleItems from "../components/BundledItems";

const { width: screenWidth } = Dimensions.get("window");

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const { handle } = route.params; // Get handle from route params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(handle);
        setProduct(fetchedProduct);
        // Set variants based on fetched product
        setVariants(fetchedProduct.variants.edges.map(edge => edge.node));
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("There was an issue loading the product details. Please try again.");
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

          {/* Render ProductForm */}
          <ProductForm
            product={product}
            selectedVariant={variants[0]} // Pass the first variant as selected
            variants={variants} // Pass the array of variants
            voMetafield={
              product.variants.edges[0].node.variantOptionsMetafield?.value
            }
            voMetafieldv2={
              product.variants.edges[0].node.variantOptionsv2Metafield?.value
            }
          />
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
    paddingLeft: 25,
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

  if (product.variants.edges.length > 0) {
    const variant = product.variants.edges[0].node;
    
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

    variant.variantOptionsMetafield.value = parseMetafield(variant.variantOptionsMetafield);
    variant.variantOptionsv2Metafield.value = parseMetafield(variant.variantOptionsv2Metafield);
  }

  console.log("Product Type:", product.productType);
  console.log(
    "variantOptionsMetafield:",
    product.variants.edges[0].node.variantOptionsMetafield?.value
  );
  console.log(
    "variantOptionsv2Metafield:",
    product.variants.edges[0].node.variantOptionsv2Metafield?.value
  );

  return product;
}
