import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Producto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kits de Cumpleaños</Text>
      <Button 
        color="#D4B483"
        title="Ver detalle"
        onPress={() => navigation.navigate("Detalles")}
      />
    </View>
  );
};

export default Producto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48A9A6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto1",
    marginBottom: 10,
    color: "#FFFFFF"
  },
  
});