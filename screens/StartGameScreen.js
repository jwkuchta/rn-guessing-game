import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard, // this is not a component it's an api
    Alert, // again not a component but an api
    Dimensions, // this is an API that helps find out how many pixels we have available
    ScrollView,
    KeyboardAvoidingView //use inside ScrollView !!!
} from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {

    const [ enteredValue, setEnteredValue ] = useState('')
    const [ confirmed, setConfirmed ] = useState(false)
    const [ selectedNumber, setSelectedNumber ] = useState()
    const [ buttonWidth, setButtonWidth ] = useState(Dimensions.get('window').width / 3.5)

    // this way they recalculate on rerender
    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 3.5)
        }
        Dimensions.addEventListener('change', updateLayout)
        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    const numberInputHandler = (inputText) => {
        // replace anything that's not a number with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be a number between 1 and 99', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            {/* <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}></Button> */}
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
        </Card>)
    }

    // we have to wrap everything in TouchableWithoutFeedback component so the keyboard is
    // toggled away when the user clicks outside of the input area
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <TitleText style={styles.title}>Start a New Game!</TitleText>
                    <Card style={styles.inputContainer}>
                        <BodyText>Select a Number: </BodyText>
                        <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={{width: buttonWidth}}>
                                <Button 
                                title="Reset" 
                                color={colors.accent} 
                                onPress={() => resetInputHandler()}/>
                            </View>
                            <View style={{width: buttonWidth}}>
                                <Button 
                                title="Confirm" 
                                color={colors.primary} 
                                onPress={() => confirmInputHandler()}/>
                            </View>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        marginVertical: 10, // replaces marginBottom + marginTop
    },
    inputContainer: {
        minWidth: 300,
        width: '80%',
        maxWidth: '95%',
        alignItems: 'center', // left to right
    },
    buttonContainer: {
        flexDirection: 'row', //so the items are next to each other
        width: '100%', // to use the width of the parent and not just as much as the buttons need
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    // replaced entirely with inline styling to account for screen size and positioning changes
    // button: {
    //     // width: '40%'
    //     width: Dimensions.get('window').width / 3.5 // this essentially does the same as percentage but gives you access to dimensions
    // },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen

// Text doesnt support flexbox-related properties