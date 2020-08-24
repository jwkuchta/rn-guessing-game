import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number: </Text>
                <TextInput />
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
    }
})

export default StartGameScreen

// Text doesnt support flexbox-related properties