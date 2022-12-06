import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const KitItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.kitItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
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
});