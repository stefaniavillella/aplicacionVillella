
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import { useState } from 'react';
import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    
  };

  const selectedItem = (id) => {
    
    //setItemSelected(list.filter((item) => item.id === id)[0]);
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.containerLista}>
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text style={{ fontSize: 20, color: "#DBFE87" }}>{item.value}</Text>
    </TouchableOpacity>
    </View>
  
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "#B2AA8E" }}>Lista de tareas ✏️</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Agregar tarea"
          placeholderTextColor="white"
          style={styles.inputStyle}
          value={textItem}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C1B33",
    alignItems: "center",
    paddingTop: 100,
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    color: "#03B5AA",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "#03B5AA",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  containerLista: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  }
 
});
