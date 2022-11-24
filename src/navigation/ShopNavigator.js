import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import Products from "../screens/Products";
import Details from "../screens/Details";


const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categorias" component={Categories} />
        <Stack.Screen name="Productos" component={Products} />
        <Stack.Screen name="Detalles" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};