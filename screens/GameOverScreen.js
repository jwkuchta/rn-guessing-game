import React from 'react'
import { View, StyleSheet, Text, Button, Image, Dimensions, ScrollView } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
            <TitleText>GAME OVER!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/success.png')} 
                // source={{uri: 'https://media0.giphy.com/media/Rm9RzjSAfXm4o/giphy.gif'}}
                style={styles.image} 
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number was: <Text style={styles.highlight}>{props.userNum}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
        </ScrollView>    
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    // you have to set width+height to 100% when using web images
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        // width: 300,
        width: Dimensions.get('window').width * 0.7,
        // height: 300,
        height: Dimensions.get('window').width * 0.7,
        // borderRadius: 150,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 5,
        borderColor: 'gray',
        // marginVertical: 30,
        marginVertical: Dimensions.get('window').height / 40,
        overflow: 'hidden' // otherwise the image will overlap the container
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 50,
        // marginVertical: 10
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        // fontSize: 20
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
})

export default GameOverScreen