import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import colors from '../constants/colors'
import TitleText from '../components/TitleText'

const Header = props => {
    return (
        <View style={
            {...styles.headerBase, ...Platform.select({ios: styles.headerIos, android: styles.headerAndroid})}
            }>
            <TitleText>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Platform.OS == 'android' ? colors.primary : 'white',
        // borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'transparent',
        // borderBottomWidth: Platform.OS == 'ios' ? 1 : 0
    },
    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    }
})

export default Header