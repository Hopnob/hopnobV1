import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import op1 from '../assets/images/2_OPENING_PAGES.png';

export default class openingPage extends React.Component {
    render() {
      const buttonClickedHandler = () => {
        this.props.navigation.navigate('clickPhotoPage');
        };
        const userAuthPage = () =>{
            this.props.navigation.navigate('LoginSignUP');
        }
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
         onPress={userAuthPage} 
        >SIGNIN
              </Text> 
              </Text>
              </Text>
          </View>
        </View>
          </ImageBackground> 
      );
    }
  }
  
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'center',
      width:"100%"
   
    },
     button1: {
      width: '100%',
      height:"40",
      marginHorizontal:10,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 100, //Here is the trick
    },
    bottomView: {
      width: '100%',
      height: "100",
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 40, //Here is the trick
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },    
    roundButton1: {
        width:"100%",
        justifyContent: 'center',
        padding:20,
  alignItems: 'center',
  backgroundColor: 'black',
  }


  
  });
   