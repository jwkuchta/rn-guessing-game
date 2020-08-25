import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Header from '../rn-guessing-game/components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [ userNum, setUserNum ] = useState()
  const [ guessRounds, setGuessRounds ] = useState(0)

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = rounds => {
    setGuessRounds(rounds)
  }

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNum(null)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNum={userNum} onRestart={newGameHandler}/>
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
