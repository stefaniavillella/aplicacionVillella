import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import GridItem from "../components/GridItem";

import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const Categorias = ({ navigation }) => {

  const categories = useSelector ((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Productos", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      
    />
  );
};



export default connect() (Categorias);






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
