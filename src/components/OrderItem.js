import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
};

const sumTotal = (list) => {
    list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0)
}

const OrderItem = ({item, onDelete}) => {
  return (
    <View style={styles.gridItem}>
        <View>
          <Text>{formatDay(item.date)}</Text>
          <Text>${sumTotal(item.items)}</Text>
        </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({})