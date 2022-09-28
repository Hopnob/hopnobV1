import React, { useState, useRef ,Component } from 'react';
import bgImg from '../../assets/images/userAuthBG.png';
import { StyleSheet,TextInput, View, Text,TouchableOpacity,ImageBackground, Touchable } from 'react-native';
import { Placeholder } from 'react-bootstrap';


 const userRegistration = () =>{
        const [value, setValue] = useState("");
      
        const CButton = ({ text }) => {
            return (
              <TouchableOpacity style={{ 
              padding: 18,
              width: "30%",
              borderRadius:50,
              height: 30,}}>
                <Text style={ {fontSize: 15,
    color: "white",
    textAlign: "center",} 
    }>{text}</Text>
              </TouchableOpacity>
            );
          };
        const [text, onChangeText] = React.useState("");
        const processedHandler = () =>{
          navigation.navigate('StyleTest');
        }

        const phoneInput = useRef(null);
            return (
                <ImageBackground source = {bgImg} style = {{flex:1   }}>
                 <View style={styles.containerMain}>
            <View style={styles.bottomView}>
              <Text style={styles.textStyle1}> Create Your Profile </Text>

                
    <TextInput
                placeholder="First Name"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
<TextInput
                placeholder="Last Name"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
                placeholder="Email"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
                placeholder="UserName"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
                placeholder="Password"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
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
              onPress={ processedHandler } 
          >
              <Text style={{color:'white', fontSize:'20'} }>Submit</Text>
          </TouchableOpacity>
          <Text style={{fontSize:14,textAlign:'center',color:'white', margin:5}}> OR </Text>
          <Text style={{fontSize:12,color:'white', margin:5}}> Complete SignUp with </Text>
          <View style={styles.parent}>
          <CButton text={"FB"} />
          <CButton text={"Google"} />
          <CButton text={"INSTA"} />
        </View>

           <Text style={{fontSize:10,color:'white', margin:8}}> By continuing you agree to our Terms of Service
Hopnob services are subject to our Privacy Policy </Text>
            
            </View>
          </View>
    
                </ImageBackground>
       
            );
    }
 export default userRegistration;
 
const styles = StyleSheet.create({
    input: {
        color:'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      parent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
      },
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
        height: 670,
        backgroundColor: 'rgba(0, 0, 0, 0.5);',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },textStyle1: {
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:40,
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