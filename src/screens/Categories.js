import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Categorias = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías de Productos</Text>
      <Button color="#48A9A6" title="Cumpleaños" onPress={() => navigation.navigate("Productos")} />
    </View>
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
