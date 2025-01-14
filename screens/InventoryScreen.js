import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { storefront } from "../api";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import BackButton from "../components/BackButton";

const InventoryScreen = () => {
  const navigation = useNavigation();
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const fetchedCollections = await getCollections();
        setCollections(fetchedCollections);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <View style={styles.screen}>
      <BackButton />
      <Text style={styles.screenTitle}>{`INVENTORY`}</Text>

      {/* ScrollView for displaying collections */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {collections?.edges.map(({ node: collection }) => (
          <TouchableOpacity
            key={collection.id}
            style={styles.collectionContainer}
            onPress={() =>
              navigation.navigate("ProductsScreen", { handle: collection.handle })
            } // Navigate to detailed collection screen
          >
            {/* Collection Image */}
            <Image
              style={styles.collectionImage}
              source={{ uri: collection.image?.url }}
              contentFit="cover"
            />

            {/* Collection Title */}
            <Text style={styles.collectionName}>{collection.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  collectionContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  collectionImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  collectionName: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
  screenTitle: {
    fontSize: FontSize.size_lgi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default InventoryScreen;

const gql = String.raw;

export async function getCollections() {
  const collectionsQuery = gql`
    query {
      collections(first: 100) {
        edges {
          node {
            id
            title
            handle
            image {
              url
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront(collectionsQuery);
  return data.collections; // Return the list of collections
}
