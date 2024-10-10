import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { storefront } from "../api";

const ProductScreen = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct();
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, []);

  console.log(product);
  
  return (
    <View style={styles.consultationScreen}>
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
          <Image
            style={styles.ProductIcon}
            contentFit="contain"
            source={"https://cdn.shopify.com/s/files/1/0652/0311/0145/files/05E6F951-EF47-47AE-884C-C37F003F4CDA.png?v=1715650845"} // Replace with dynamic image if available in product data
          />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      {/* <View style={styles.imgs}>
        <ImageBackground
          style={[styles.frameIcon, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame1x.png")}
        />
        <ImageBackground
          style={[styles.frameIcon1, styles.frameIconFlexBox]}
          resizeMode="contain"
          source={require("../assets/frame11x.png")}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logoIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  logo: {
    height: 300,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bookAConsultation: {
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.2,
    lineHeight: 37,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    alignSelf: "stretch",
  },
  ProductIcon: {
    width: 402,
    height: 361,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 16,
    color: Color.colorGray,
  },
  ProductView: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 175,
    height: 188,
    justifyContent: "flex-end",
  },
  frameIcon1: {
    width: 187,
    height: 183,
  },
  imgs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  consultationScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 874,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
});

export default ProductScreen;

export async function getProduct() {
  const { data } = await storefront(productQuery);
  const product = data.product;
  return product;
}

const gql = String.raw;

const productQuery = gql`
  query getProductByHandle {
    product(handle: "signature-cake-table-bundle") {
      id
      title
      description
      media(first: 10) {
        edges {
          node {
            previewImage {
              url
            }
          }
        }
      }
      variants(first: 3) {
        edges {
          cursor
          node {
            id
            title
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
