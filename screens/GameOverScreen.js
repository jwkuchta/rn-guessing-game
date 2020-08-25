import React from 'react'
import { View, StyleSheet, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>GAME OVER!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                // source={require('../assets/success.png')} 
                source={{uri: 'https://media0.giphy.com/media/Rm9RzjSAfXm4o/giphy.gif'}}
                style={styles.image} 
                // resizeMode='cover'
                />
            </View>
            <BodyText>Number of rounds: {props.rounds}</BodyText>
            <BodyText>Number was: {props.userNum}</BodyText>
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
    }
})

export default GameOverScreen