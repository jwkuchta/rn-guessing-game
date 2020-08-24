import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 }, // takes an object with a width and a height
        shadowOpacity: 0.6,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 5, // elevation for Android and shadow for iOS
        padding: 20,
        borderRadius: 5

    }
})

export default Card