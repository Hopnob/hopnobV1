import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import bgImg from './assets/images/intro.png';
import Navigator from './routes/homeStack';




import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import openingPage from './screens/opening_page';
import launchPage from './screens/launch_page';
import introPage from './screens/intro_page';


const RootStack  = createStackNavigator (
    {
        default:introPage,
        Home: launchPage,
        Opening: openingPage
    },
    {
        initialRouteName:'default',
    }

);
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer/>
    }
} 
