import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Header from '../rn-guessing-game/components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import * as Font from 'expo-font'
import { AppLoading } from 'expo' // prolongs the initial screen so certains tasks can be finished (like font fetching)

export default function App() {

  const [ userNum, setUserNum ] = useState()
  const [ guessRounds, setGuessRounds ] = useState(0)
  const [ dataLoaded, setDataLoaded ] = useState(false)

  const fetchFonts = () => {
    // you tell Expo and React Native about the fonts you want to use
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }

  if (!dataLoaded) {
    console.log(dataLoaded)
    // it takes a function as an argument. When this promise resolves it will call the callback
    return (
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err)}
      />
    )   
  }

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber)
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
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
