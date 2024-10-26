// CartScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storefront } from "../api"; // Replace with your actual API function

const CartScreen = () => {
  const [cart, setCart] = useState(null);

  // Define a function to fetch the cart details
  const fetchCart = async () => {
    const cartId = await AsyncStorage.getItem("cartId");
    if (cartId) {
      const CART_QUERY = `
        query getCart($cartId: ID!) {
          cart(id: $cartId) {
            lines(first: 10) {
              edges {
                node {
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
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

  // Render cart items
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.node.merchandise.title}</Text>
      <Text>Quantity: {item.node.quantity}</Text>
      <Text>
        Price: {item.node.merchandise.price.amount} {item.node.merchandise.price.currencyCode}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cart ? (
        <>
          <FlatList
            data={cart.lines.edges}
            keyExtractor={(item) => item.node.merchandise.id}
            renderItem={renderCartItem}
          />
          <Text style={styles.total}>Total: {cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</Text>
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
