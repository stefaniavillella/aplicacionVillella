import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const KitItem = ({ item, image, onSelected }) => {

  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.kitItem}>
      <View>
      <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.details}>{item.description}</Text>
          <Text style={styles.details}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default KitItem;

const styles = StyleSheet.create({
  kitItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#E0D2CD",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto1",
  },
  details: {
    fontSize: 18,
  },
  ImageContainer: {
    backgroundColor: "#E0D2CD",
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
  
  },
});