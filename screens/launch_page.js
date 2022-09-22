import launch1 from '../assets/images/2_OPENING_PAGES.png';
import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// -------launch page
export default class launchPage extends React.Component{
    render(){
        return (
            <ImageBackground source = {launch1} style = {{flex:1   }}>

            </ImageBackground>
        );
    }
}