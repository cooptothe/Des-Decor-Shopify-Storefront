// CartScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storefront } from "../api";
import BackButton from "../components/BackButton";

const CartScreen = () => {
  const [cart, setCart] = useState(null);

  // Define a function to fetch the cart details
  const fetchCart = async () => {
    const cartId = await AsyncStorage.getItem("cartId");
    if (cartId) {
      const CART_QUERY = `
        query getCart($cartId: ID!) {
          cart(id: $cartId) {
          checkoutUrl
            lines(first: 10) {
              edges {
                node {
                id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      selectedOptions {
								      value
							        }
                      product {
								      title
							        }
                      price {
                        amount
                        currencyCode
                      }
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
            }
          }
        }
      `;

      try {
        const { data } = await storefront(CART_QUERY, { cartId });
        setCart(data?.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (lineId) => {
    const cartId = await AsyncStorage.getItem("cartId"); // Get cart ID from storage
    const lineIds = [
      lineId
    ];

    const result = await removeCartLines(cartId, lineIds);
    if (result.error) {
      alert("Error removing from cart: " + result.error[0]?.message);
    } else {
      alert("Item removed successfully!");
      fetchCart();
    }
  }

  // Render cart items
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.node.merchandise.product.title}</Text>
      <Text>Quantity: {item.node.quantity}</Text>
      <TouchableOpacity onPress={() => removeItem(item.node.id)}>
        <Text style={{ alignSelf: "flex-end", bottom: 10, fontWeight: "400", fontSize: 24, right: 10 }}>-</Text>
      </TouchableOpacity>
      <Text>
        Price: ${item.node.merchandise.price.amount}0{" "}
        {item.node.id}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.header}>Your Cart</Text>
      {cart ? (
        <>
          <FlatList
            data={cart.lines.edges}
            keyExtractor={(item) => item.node.merchandise.id}
            renderItem={renderCartItem}
          />
          <Text style={styles.total}>
            Total: ${cart.cost.totalAmount.amount}0{" "}
            {cart.cost.totalAmount.currencyCode}
          </Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CartScreen;
const gql = String.raw;

export async function removeCartLines(cartId, lineIds) {
  const removeItemQuery = gql`
  mutation removeCartLines($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
        lines(first: 10){
            edges
            {
                node{
                    quantity
                    merchandise{
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
      }   
    }
    
    userErrors {
      field
      message
    }
  }
}
  `
  try {
    const variables = {
      cartId,
      lineIds,
    };

    const response = await storefront(removeItemQuery, variables);
    const { removeCartLine } = response.data;

    console.log("Updated cart:", removeCartLine);
    return { cart: removeCartLine };
  } catch (error) {
    console.error("Network or server error:", error);
    return { error };
  }
}