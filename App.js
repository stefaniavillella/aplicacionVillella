
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import colors from "./constants/colors";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />
  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina numerador"} />
      {content}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 85,
  },
});
