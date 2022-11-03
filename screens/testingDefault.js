import React ,{useState} from 'react';
import {Dimensions, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

import {getToken} from './userAuth/otpVerification';

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

const auth = getAuth(app);
if (!app?.options || Platform.OS === 'web') {
    throw new Error(
      'This example only works on Android or iOS, and requires a valid Firebase config.'
    );
    }
export default function DefaultTestingPage({navigation}) {
    const [tokenpresent,setTokenpresent] = useState('');

    useEffect(()=>{
        getToken().then(token => setTokenpresent(token))
        if(tokenpresent ===null ) {
            alert('Please SignIn');
                navigation.navigate('PhoneNumberPage');
        }
        console.log(tokenpresent);
 
    },[]);
 

    signOutUser = async () => {
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
                      <Text>Dummy Dashboard</Text>
                      <View style={{margin:10}}>

                      <Button onPress={ ()=>    getToken().then(token => console.log(token))} title='Check Token'/>

                      </View>
                        <View>
                        <Button onPress={signOutUser} title='Signout'/>

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
