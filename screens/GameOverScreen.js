import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import colors from '../constants/colors'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>GAME OVER!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/success.png')} 
                // source={{uri: 'https://media0.giphy.com/media/Rm9RzjSAfXm4o/giphy.gif'}}
                style={styles.image} 
                // resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number was: <Text style={styles.highlight}>{props.userNum}</Text>
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // you have to set width+height to 100% when using web images
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 5,
        borderColor: 'gray',
        marginVertical: 30,
        overflow: 'hidden' // otherwise the image will overlap the container
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 50,
        marginVertical: 10
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default GameOverScreen