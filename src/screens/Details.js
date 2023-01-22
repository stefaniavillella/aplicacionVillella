import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';




const Details = () => {
  const dispatch = useDispatch();
  const kit = useSelector((state) => state.product.selected);

  const handleAddItemCart = () => {
        dispatch (addItem(kit))
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.screen}>
        <Image style={{ width: 300, height: 300, marginBottom: 15 }} source={{ uri: kit.image }} ></Image>
      <Text style={styles.title}>{kit.name}</Text>
      <Text>${kit.price}</Text>
      <View style={styles.button}>
      <Button title='Agregar al carrito' onPress={handleAddItemCart} />
      </View>
      </View>
  
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Roboto1",
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 18,
  },
  price: {
    fontSize: 30,
  },
  button: {
    marginTop: 15,
  },
})