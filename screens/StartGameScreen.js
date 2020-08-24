import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number: </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </View>
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
    }
})

export default StartGameScreen