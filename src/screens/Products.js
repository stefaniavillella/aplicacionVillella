import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useEffect } from "react";
import KitItem from "../components/KitItem";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredProduct, selectedProduct } from "../store/actions/product.action";

const Producto = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const productos = useSelector ((state)=> state.product.filteredProduct);
  const category = useSelector ((state)=> state.categories.selected);

  useEffect(()=> {
   dispatch(filteredProduct(category.id))
  }, [])

  const handleSelectedCategory = (item) => {
    dispatch(selectedProduct(item.id))
    navigation.navigate("Detalles", {
      name: item.name,
    });
  };



  

  const renderKitItem = ({ item }) => (
    <KitItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={renderKitItem}
      
    />
  );
};

export default connect()(Producto);






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