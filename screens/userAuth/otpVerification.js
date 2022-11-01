import React ,{useState,useRef,useEffect} from 'react';
import {Dimensions, SafeAreaView,StatusBar, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import OTPInputView from '@twotalltotems/react-native-otp-input'; 
import * as SecureStore from 'expo-secure-store';
async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    // if (result) {
    //   alert("🔐 Here's your value 🔐 \n" + result);
    // } else {
    //   alert('No values stored under that key.');
    // }
  }
  




import { initializeApp,getApp} from 'firebase/app';
import { ActionCodeURL, getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { Token } from 'graphql';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 
    apiKey: "AIzaSyAcz7MI-8_HSeAiZsEz5mlyfGlI_jmpxwY",
    authDomain: "micro-citadel-359610.firebaseapp.com",
    projectId: "micro-citadel-359610",
    storageBucket: "micro-citadel-359610.appspot.com",
    messagingSenderId: "34345464363",
    appId: "1:34345464363:web:96b25a028d826aa8d8b06e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
if (!app?.options || Platform.OS === 'web') {
throw new Error(
  'This example only works on Android or iOS, and requires a valid Firebase config.'
);
}

 function OtpVerification({navigation}) {
    
    const mobileNumber = navigation.getParam('mobileNumber');
    const [verificationId, setVerificationId] = React.useState();   
    const [verificationCode, setVerificationCode] = React.useState();

    const verificationIdhash = navigation.getParam('hashValue');
        
   
 
  
    async function ValidateOTP (){
        try {
             
            const credential = PhoneAuthProvider.credential(verificationIdhash, verificationCode);
            await signInWithCredential(auth, credential);
            console.log(auth.currentUser);
            save("token", auth.currentUser.accessToken);
            getValueFor("token");
            console.log(getValueFor("token"));
            alert('Phone Authentication Successful');
            
           
            navigation.navigate('UserRegisterPage',{uniqueID: auth.currentUser.uid, accessToken:auth.currentUser.accessToken });
            }catch (err) {
                alert(err);
            // showMessages({ text: `Error: ${err.message}`, color: 'red' });
            }
    }
    

    const [message, showMessages] = React.useState();

        return (
            <View style={styles.appContainer}>
               {/* BackGround */}
               <ImageBackground style={{width:'100%', height:'100%'}} source={require ('../../assets/images/UserLogin/background.png')} >
                   
                   <View style={{padding:25, width:'100%',height:'50%', backgroundColor:'white', bottom:0,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                      <View>
                       <Text style={{fontSize:22, fontWeight:'400'}}> Verify your number </Text>
                      
                       </View>
                       <View style={{marginTop:14,marginBottom:28}}>
                       <Text style={{fontSize:16, fontWeight:'400'}}>
                       Enter the 4 digit code to verify your account and proceed ahead 
                           </Text>
                           {/* <Text style={{fontSize:12, fontWeight:'400'}}>
                       Mobile Number{ mobileNumber}
                           </Text> */}
                       </View>
                       <View >
                           {/* https://www.npmjs.com/package/@twotalltotems/react-native-otp-input*/}
                           <OTPInputView 
                           codeInputFieldStyle={{color:'black',borderColor:'#1E1E1E', borderRadius:(Dimensions.get('window').width>375? 20:15),marginRight:10, width:(Dimensions.get('window').width>375? 70:43),height:(Dimensions.get('window').width>375? 50:50)}}
                           codeInputHighlightStyle={{color:'black'}}
                           onCodeFilled ={  (code=>{
                            setVerificationCode(code);
                            console.log(`Code is ${code}, you are good to go!`)
                           })
                             
                           }
                       
                           autoFocusOnLoad
                            style={{alignSelf:'center', width: Dimensions.get('window').width,height:100,backgroundColor:'white',paddingLeft:22,paddingRight:22 }} pinCount={6}/>
              
                       </View>
                       <View style={{ backgroundColor:'white'}}>
                               <LinearGradient colors={['#1E1E1E', '#1E1E1E', ]}
                                   start={{x: 0, y: 0.5}}
                                   end={{x: 1, y: 1}}
                                   style={{paddingVertical:10, borderRadius: 30}}
                               >
                                   <TouchableOpacity onPress={ ValidateOTP}>
                                   <Text style={{color: '#fff', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Next</Text>
                                   </TouchableOpacity>
                               </LinearGradient>
                       </View>

                    

                       

                       <View style={{justifyContent:'space-around',alignItems:'center',marginTop:20, width:'100%', backgroundColor:'white',marginBottom:100, marginBottom:50}}>
                       <TouchableOpacity onPress={()=>    navigation.navigate('PhoneNumberPage' ) }>
                        <Text style={{fontSize:14,fontWeight:'400',textAlign:'center'}}>Didn’t receive the code? 
                                <Text style={{color:'#F05A28'}}> RESEND 
                        </Text>
                        
                        
                       </Text> 
                       </TouchableOpacity>

                        
                       </View>

                   </View>
                            
                    

               </ImageBackground>

           </View>
       

      );
              
        }
 export default OtpVerification;

const styles = StyleSheet.create({
    
 appContainer:{
     flex:1,
     backgroundColor:'white',
     paddingBottom:50,
 },  
 borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    
  },

  underlineStyleHighLighted: {
    borderColor: "#1E1E1E",
    borderRadius:20,

  },
  
  
});
