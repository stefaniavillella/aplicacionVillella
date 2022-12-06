import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
    
  );
};