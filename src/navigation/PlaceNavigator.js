import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => {
  return (
    
      <PlaceStack.Navigator
        initialRouteName="Direcciones"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? "#" : "#74D1CC",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : "#74D1CC",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <PlaceStack.Screen
          name="Direcciones"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Mis fotos",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="md-add"
                  color={
                    Platform.OS === "android" ? "white" : "#74D1CC"
                  }
                  size={23}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <PlaceStack.Screen
          name="Detalle"
          component={PlaceDetailScreen}
          options={{ title: "Detalle direccion" }}
        />
        <PlaceStack.Screen
          name="Nuevo"
          component={NewPlaceScreen}
          options={{ title: "Nueva direccion" }}
        />
        <PlaceStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Mapa" }}
        />
      </PlaceStack.Navigator>
    
  );
};

export default PlaceNavigator;