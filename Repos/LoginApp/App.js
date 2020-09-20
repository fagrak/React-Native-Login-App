import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
//import 'react-native-gesture-handler';

const Application = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile }
}, {
  navigationOptions: {
    header: false,
  }
});

export default createAppContainer(Application);




