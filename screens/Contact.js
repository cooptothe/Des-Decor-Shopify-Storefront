import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { storefront } from "../api";
import BackButton from '../components/BackButton';

const Contact = ({ route }) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(null);
  const { handle } = route.params;  // Get handle from route params

  useEffect(() => {
    const fetchPage = async () => {
      const fetchedProduct = await getPage(handle);  // Pass handle to getProduct
      setPage(fetchedProduct);
    };

    fetchPage();
  }, [handle]);

  return (
    <View style={styles.consultationScreen}>
      <BackButton />
      {product ? (
        <View style={styles.ProductView}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>
            {`$${product.variants.edges[0].node.price.amount}0 ${product.variants.edges[0].node.price.currencyCode}`}
          </Text>
          <Image
            style={styles.ProductIcon}
            contentFit="contain"
            source={{ uri: product.variants.edges[0]?.node.image.url }}
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
  ProductIcon: {
    width: 402,
    height: 361,
  },
  productTitle: {
    fontSize: 34,
    fontWeight: "bold",
    paddingLeft: "4%",
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
    fontWeight: '500',
    color: Color.colorBlack,
    paddingLeft: 40,
    paddingBottom: 20,
    paddingTop: 5,
    alignSelf: 'flex-start'
  },
  ProductView: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
    shadowColor: 'black',
    shadowOffset: 2,
    shadowOpacity: .1,
    shadowRadius: 10
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
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    alignContent: 'space-around'
  },
  addToCartButtonText: {
    color: Color.colorBlack,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Contact;


const gql = String.raw;
export async function getProduct(handle) {
  const pageQuery = gql`
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        tags
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

  const { data } = await storefront(pageQuery, { handle });  // Pass handle as a query variable
  const page = data.page;
  return page;
}

