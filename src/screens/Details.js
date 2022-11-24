import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de producto</Text>
      <Button 
        //style={{marginBottom: 10}}
        color="#C1666B"
        title="Volver a categorías"
        onPress={() => navigation.navigate("Categorias")}
      />
      <Button 
        color="#C1666B"
        title="Volver a Producto"
        onPress={() => navigation.navigate("Productos")}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4B483",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto1",
  },
})