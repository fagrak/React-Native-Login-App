import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import 'react-native-gesture-handler';

export default class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to panel</Text>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3'
    },
    Text: {
        color: '#fff'
    }
});


