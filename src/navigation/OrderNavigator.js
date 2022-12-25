
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/OrdersScreen";


const Stack = createNativeStackNavigator();

export default OrderNavigator = () => {
  return (
    
      <Stack.Navigator 
      initialRouteName="Orders" 
      screenOptions={{
        headerStyle: 
        { backgroundColor: "#74D1CC"}
      }}>
        <Stack.Screen 
        name="Orders" 
        component={OrdersScreen} 
        options={{
          title: "Órdenes"
        }} />
      </Stack.Navigator>
    
  );
};