import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../data/products'

import { useSelector } from 'react-redux'

const Details = ({}) => {

  const kit = useSelector((state) => state.product.selected)

  const product = PRODUCTS;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto1",
  },
})