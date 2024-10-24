import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { storefront } from "../api";
import RenderHtml from "react-native-render-html";
import BackButton from '../components/BackButton';

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

  const addToCart = () => {
    alert("Product added to cart!");
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
          <RenderHtml
            contentWidth={screenWidth}
            source={{ html: product.descriptionHtml }}
          />

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
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "500",
    color: Color.colorBlack,
    paddingLeft: 40,
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
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    alignContent: "space-around",
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
        media(first: 10) {
          edges {
            node {
              previewImage {
                url
              }
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
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
  return product;
}
