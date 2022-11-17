import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const GameScreen = () => {
const [currentGuess, setCurrentGuess] = useState();

useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100-1) + 1));
}, []);

  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>Número elegido del oponente</Text>
      <Text style={{color:"white"}}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title='Menor'/>
        <Button title='Mayor'/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
   },
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  width: 300,
}

})