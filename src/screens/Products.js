import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";
import KitItem from "../components/KitItem";
import { PRODUCTS } from "../data/products";

const Producto = ({ navigation, route }) => {

const kits = PRODUCTS.filter(item => item.category === route.params.categoryID)

  
  const handleSelectedCategory = (item) => {

    navigation.navigate("Detalles", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderKitItem = ({ item }) => (
    <KitItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={kits}
      keyExtractor={(item) => item.id}
      renderItem={renderKitItem}
      
    />
  );
};

export default Producto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C79AD8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto1",
    marginBottom: 10,
    color: "#FFFFFF"
  },
  
});