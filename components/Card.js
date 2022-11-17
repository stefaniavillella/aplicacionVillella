import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ children, newStyles }) => {
  return <View style={{...styles.inputContainer, ...newStyles}}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    padding: 20,
    alignItems: "center",
    shadowColor: "#C49BBB",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    shadowOpacity: 10,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
