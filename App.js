import { StyleSheet, View } from "react-native";
import colors from "./constants/colors";
import { useFonts } from "expo-font";

import MainNavigator from "./src/navigation"
import { Provider } from "react-redux";
import store from "./src/store"

export default function App() {

  const [loaded] = useFonts({
    Roboto1: require('./assets/fonts/Roboto-Medium.ttf'),
  });

  console.log(loaded);
  if (!loaded) {
    return null;
  };
  

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 85,
  },
});
