import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard // this is not a component it's an api
} from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {

    const [ enteredValue, setEnteredValue ] = useState()

    const numberInputHandler = (inputText) => {
        // replace anything that's not a number with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    // we have to wrap everything in TouchableWithoutFeedback component so the keyboard is
    // toggled away when the user clicks outside of the input area
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number: </Text>
                    <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={colors.accent} onPress={() => {}}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={colors.primary} onPress={() => {}}/>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
        marginVertical: 10, // replaces marginBottom + marginTop
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center', // left to right
    },
    buttonContainer: {
        flexDirection: 'row', //so the items are next to each other
        width: '100%', // to use the width of the parent and not just as much as the buttons need
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '40%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})

export default StartGameScreen

// Text doesnt support flexbox-related properties