import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Header from '../rn-guessing-game/components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';

export default function App() {

  const [ userNum, setUserNum ] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNum) {
    content = <GameScreen userChoice={userNum}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
