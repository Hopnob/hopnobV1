import React, { useState, useRef ,Component } from 'react';
import bgImg from '../../assets/images/userAuthBG.png';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground, Touchable } from 'react-native';


 const verificationPage = () =>{
        const [value, setValue] = useState("");
        // const userAuthPage = () =>{
        //     this.props.navigation.navigate('LoginSignUP');
        // }
        function userAuthPage() {
            this.props.navigation.navigate('LoginSignUP');
        }
        const phoneInput = useRef(null);
            return (
                <ImageBackground source = {bgImg} style = {{flex:1   }}>
                 <View style={styles.containerMain}>
            <View style={styles.bottomView}>
              <Text style={styles.textStyle1}> Verify your number</Text>
              <Text style={styles.textStyle2}> Enter the 4 digit code to verify your account</Text>
              <Text style={styles.textStyle3}> Didn't recive the code?
               <Text style={{fontWeight:700, color: 'white'}}
         onPress={userAuthPage} 
        >SIGNIN
              </Text>
               </Text>
       
    <TouchableOpacity
            style={{
                marginTop:5,
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
              <Text style={{color:'white', fontSize:'20'} }>Next</Text>
          </TouchableOpacity>
            </View>
          </View>
    
                </ImageBackground>
       
            );
    }
 export default verificationPage;
 
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
      fontSize: 22,
      fontWeight:'700'
    },
      textStyle2: {
          fontSize:20,
          paddingTop:30,
          paddingLeft:10,
          paddingRight:60,
        color: '#fff',
      fontWeight:'400',
      marginBottom:30,

      },
      textStyle3: {
        fontSize:18,
        paddingTop:30,
        paddingLeft:10,
        paddingRight:60,
      color: '#fff',
    fontWeight:'400',
    marginBottom:30,

    }
  });