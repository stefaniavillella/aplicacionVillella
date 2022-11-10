import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal as NewModal,
  } from "react-native";
  import React from "react";
  
  const Modal = (props) => {
    const { isVisible, actionDeleteItem } = props;
  
    return (
      <NewModal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={{ backgroundColor: "#03B5AA", alignItems: "center" }}>
            <Text>¿Eliminar elemento? </Text>
          </View>
          <Pressable
              onPress={() => actionDeleteItem()}
              style={{ backgroundColor: "#DBFE87", marginTop: 10 }}
            >
              <Text>Si, eliminar</Text>
            </Pressable>
        </View>
      </NewModal>
    );
  };
  
  export default Modal;
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
  });