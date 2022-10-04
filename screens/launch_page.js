

import launch1 from '../assets/images/1_LAUNCH_PAGE.png';
import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
// -------launch page
export default class launchPage extends React.Component{
    render(){
        const buttonClickedHandler = () => {
            this.props.navigation.navigate('Opening');
         };
        return (
                                    
                    <TouchableOpacity
                        style={styles.container}
                       
                    >
            <ImageBackground source = {launch1} style = {{flex:1   }}>

            </ImageBackground>
                      
                    </TouchableOpacity>
                  
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
  
    },
    
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });