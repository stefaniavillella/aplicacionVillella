import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import GridItem from "../components/GridItem";
import {CATEGORIES} from "../data/categories"

const Categorias = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Productos", {
      categoryID: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      
    />
  );
};



export default Categorias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DFDA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto1",
    marginBottom: 10,
  },

});
