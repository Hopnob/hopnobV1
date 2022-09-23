import React, { useState, useRef ,Component } from 'react';
import bgImg from '../../assets/images/userAuthBG.png';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground, Touchable } from 'react-native';

 const LoginSignUpPage = () =>{
        const [value, setValue] = useState("");
      
   

        const phoneInput = useRef(null);
            return (
                <ImageBackground source = {bgImg} style = {{flex:1   }}>
                 <View style={styles.containerMain}>
            <View style={styles.bottomView}>
              <Text style={styles.textStyle1}> Login or Signup</Text>
              <Text style={styles.textStyle2}> Phone Number</Text>
             
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                onChangeFormattedText={(text) => {
                  setValue(text);
                }}
                
              />
     
       
    <TouchableOpacity
            style={{
                marginTop:50,
                borderWidth:1,
                borderColor:'white',
                alignItems:'center',
                justifyContent:'center',
                width:"100",
                height:36,
                color:'red;',
                borderRadius:32,
              }}
              onPress={ ()=>{
                // navigation.navigate('default');

              } } 
          >
              <Text style={{color:'white', fontSize:'20'} }>Proceed</Text>
          </TouchableOpacity>
            </View>
          </View>
    
                </ImageBackground>
       
            );
    }
 export default LoginSignUpPage;
 
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      phoneNumberView: {
        width: '80%',
        height: 50,
      },
     
      bottomView: {
        margin:30,
        width: '80%',
        height: 359,
        backgroundColor: 'rgba(0, 0, 0, 0.5);',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },textStyle1: {
        paddingTop:10,
        paddingLeft:10,
      color: '#fff',
      fontSize: 20,
      fontWeight:'700'
    },
      textStyle2: {
          fontSize:15,
          paddingTop:30,
          paddingLeft:10,
        color: '#fff',
      fontWeight:'400',
      marginBottom:30,

      },
  });