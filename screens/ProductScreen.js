import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { storefront } from "../api";

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct();
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, []);

  const addToCart = () => {
    // Implement Add to Cart functionality
    alert("Product added to cart!");
  };

  // set handle
  const { handle } = route.params;

  console.log(handle);

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
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>
            Price:{" "}
            {`${product.variants.edges[0].node.price.amount} ${product.variants.edges[0].node.price.currencyCode}`}
          </Text>
          <Image
            style={styles.ProductIcon}
            contentFit="contain"
            source={product.variants.edges[0]?.node.image.url}
          />
          <Text style={styles.productDescription}>{product.description}</Text>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  ProductIcon: {
    width: 402,
    height: 361,
  },
  productTitle: {
    fontSize: 34,
    fontWeight: "bold",
    paddingLeft: "3%",
    alignSelf: 'flex-start'
  },
  productDescription: {
    fontSize: 16,
    color: Color.colorGray,
    padding: "5%",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.colorBlack,
    paddingRight: 40,
    paddingBottom: 20,
    alignSelf: 'flex-end'
  },
  ProductView: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
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
  addToCartButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartButtonText: {
    color: Color.colorBlack,
    fontSize: 16,
    fontWeight: "bold",
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
  product(handle: "mix-and-match-cake-table-bundle") {
    id
    title
    description
		tags
		options(first: 10) {
			id
			name
		}
    variants(first: 10) {
      edges {
        cursor
        node {
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
