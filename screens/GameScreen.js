import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList, Dimensions } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import { Ionicons } from '@expo/vector-icons'
import BodyText from '../components/BodyText'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNum = Math.floor(Math.random() * (max-min)) + min
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum
    }
}

// const renderListItem = (value) => {
//     return (
//         <View key={value} style={styles.listItem}>
//             <BodyText>Is it {value}?</BodyText>
//         </View>
//     )
// } 

// HIS WAY WITH THE FLATLIST //
const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
)

const GameScreen = ({ userChoice, onGameOver }) => {

    const initialGuess = generateRandomBetween(1, 100, userChoice)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)
    const [ rounds, setRounds ] = useState(0)
    const [ guesses, setGuesses ] = useState([initialGuess.toString()])

    let currentLow = useRef(1)
    let currentHigh = useRef(100)

    // runs after each render if the specified dependencies change
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver]) // the effect will rerun if one of these dependencies changes

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || direction === 'higher' && currentGuess > userChoice) {
            Alert.alert("Don't lie!", "You know this is wrong...", [{ text: 'Sorry!', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess // if the number I guesses is too high, it is now the new max
        } else {
            currentLow.current = currentGuess + 1
        }
        const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNum)
        setRounds(prevRounds => prevRounds + 1)
        setGuesses(currentGuesses => [nextNum.toString(),...currentGuesses])
    }

    // we can have a different stylesheet entirely for a different screen size
    // let listContainerStyle = styles.listContainer // default
    
    // if (Dimensions.get('window').width < 350) {
    //     listContainerStyle = styles.listContainerBig
    // }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                {/* <Button title="LOWER" onPress={() => nextGuessHandler('lower')}/>
                <Button title="HIGHER" onPress={() => nextGuessHandler('higher')}/> */}
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name='md-remove' size={24} color='white' />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('higher')}>
                    <Ionicons name='md-add' size={24} color='white'/>
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {guesses.map(guess => renderListItem(guess))}
                </ScrollView> */}
                {/* HIS WAY WITH THE FLATLIST */}
                <FlatList
                    keyExtractor={item => item}
                    data={guesses}
                    renderItem={item => renderListItem(guesses.length, item)}
                    // renderItem={renderListItem.bind(this, guesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        // marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        // width: '60%',
        width: Dimensions.get('window').width > 350 ? '60%' : '80%',
        flex: 1 // without this scrolling will not work on Android
    },
    list: {
        flexGrow: 1, // it's more flexible than flex and the container will grow and keeps the other behavior
        justifyContent: 'flex-end' 
    },
    listContainerBig: {
        flex: 1,
        width: '80%'
    }
})

export default GameScreen

