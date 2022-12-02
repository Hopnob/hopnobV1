import React ,{useState} from 'react';
import {Dimensions, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

import {getToken} from './userAuth/otpVerification';
import axios from 'axios';
import { initializeApp,getApp} from 'firebase/app';
import { ActionCodeURL, getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
const firebaseConfig = {
 
    apiKey: "AIzaSyAcz7MI-8_HSeAiZsEz5mlyfGlI_jmpxwY",
    authDomain: "micro-citadel-359610.firebaseapp.com",
    projectId: "micro-citadel-359610",
    storageBucket: "micro-citadel-359610.appspot.com",
    messagingSenderId: "34345464363",
    appId: "1:34345464363:web:96b25a028d826aa8d8b06e"
};
const app = initializeApp(firebaseConfig);
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { Token } from 'graphql';

const auth = getAuth(app);
if (!app?.options || Platform.OS === 'web') {
    throw new Error(
      'This example only works on Android or iOS, and requires a valid Firebase config.'
    );
    }
export default function DefaultTestingPage({navigation}) {
    
    const [accessToken,setAccessToken] = useState('');
    const mobileNumber = navigation.getParam('mobileNumber');
    useEffect(()=>{
       getToken().then(token=> 
       { if(token!=null){
        setAccessToken(token)   
        // alert(token)
        }else{
            alert('No token present')
        }
    }
    )
    } ,[])
    console.log(accessToken);
    console.log(mobileNumber);
    
    function getData(){
        axios.get(
            `https://hopnob-backend-cctjhm4vha-uc.a.run.app/api/v1/users/${mobileNumber}` ,
        {
            headers: { 
                'Authorization':`Bearer ${accessToken}`
            }
        }).then((response)=>{
          console.log(response.data.user);
            if(response.data.user.email === undefined){
                alert("Hello We just need Few Details :)");
            }else{
                alert("Welcome Back");
            }
            
        }).catch((err)=>{
            // alert(err);
            alert(err);
           
        })
    }
    // useEffect(() => {
    
    //   }, [])
    
    
 

   const signOutUser = async () => {
        try {
            SecureStore.deleteItemAsync('token').then(
                alert('User Is Signout')
               )
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.appContainer}>
                      <Text>JUST A PAGE</Text>
                      <View style={{margin:10}}>
                      <Button onPress={ getData } title='Style Test'/>
                      </View>
                        <View>
                        {/* <Button onPress={signOutUser} title='Signout'/> */}

                        </View>
        </View>
        
        
    );
}
 

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     marginTop:30,
     padding:30,
     backgroundColor:'white',
 }, 
});
