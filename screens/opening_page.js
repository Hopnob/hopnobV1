import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import op1 from '../assets/images/2_OPENING_PAGES.png';

export default class openingPage extends React.Component {
    render() {
      const buttonClickedHandler = () => {
          console.log('You have been clicked a button!');
        };
      return (
        
          <ImageBackground source = {op1} style = {{flex:1   }}>
     <View style={styles.containerMain} >
  
          <View style={styles.button1}>
              <TouchableOpacity 
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}>
                  <Text style={{color:'white'}}>START</Text>
              </TouchableOpacity>
  
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.textStyle}>
                <Text style={{color:'red',padding:"20",fontSize:"20", textAlign:'center', bottom:10}}> Already Have an account?  <Text style={{fontFamily:'Open Sans', color: '#2D3791'}}
        onPress={() => Linking.openURL('###')}>SIGNIN
              </Text> 
              </Text>
              </Text>
          </View>
        </View>
          </ImageBackground> 
      );
    }
  }