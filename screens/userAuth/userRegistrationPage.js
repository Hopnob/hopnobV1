import React ,{useState,useRef,useEffect} from 'react';
import { Alert, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity,Dimensions,PixelRatio } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { color } from 'react-native-reanimated';
import { initializeApp,getApp} from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { Token } from 'graphql';
import { useFonts } from 'expo-font';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';


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

import { useSafeArea } from 'react-native-safe-area-context';


export default function UserRegisterPage({navigation}){
    const fetchFonts = async () =>
    await Font.loadAsync({
      'OpenSans': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const mobileNumber = navigation.getParam('mobileNumber');

    const accessToken = navigation.getParam('accessToken');
    const uniqueID = navigation.getParam('uniqueID');
    // checking if a user data is already present
    useEffect(() => {
        axios.get(
            `https://hopnob-backend-cctjhm4vha-uc.a.run.app/api/v1/users/${uniqueID}` ,
        {
            headers: { 
                'Authorization':`Bearer ${accessToken}`
            }
        }).then((response)=>{
          console.log(response.data.user);
            if(response.data.user.email === undefined){
                alert("Hello We just need Few Details :)");
            }else{
                navigation.navigate('StyleTestOne');
            }
            
        }).catch((err)=>{
            // alert(err);
            alert("Hello We just need Few Details :)");
            
        })
      }, [])
    

    const successAlert=()=> {  
        Alert.alert(  
            'User Created',  
            'Welcome to Hopnob',  
            [  
                {  
                    text: 'Next',  
                    onPress: () => navigation.navigate('StyleTestOne') ,  
                    style: 'cancel',  
                },  
           
            ]  
        );  
    }  
    const failAlert=()=> {  
        Alert.alert(  
            'Error',  
            'Failed',  
            [  
                {  
                    text: 'SKIP',  
                    onPress: () => navigation.navigate('StyleTestOne'),  
                    style: 'cancel',  
                },  
               
            ]  
        );  
    } 
    //patching the user data
    const submitHandler=()=> {
        console.log(accessToken);
        console.log(uniqueID);
         axios.patch(
            `https://hopnob-backend-cctjhm4vha-uc.a.run.app/api/v1/users/${uniqueID}` ,
         {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "mobileNumber": mobileNumber,
        }, {
            headers: { 
                'Authorization':`Bearer ${accessToken}`
             }
        }).then((response)=>{
            successAlert();

            console.log("New User Created");
        }).catch(()=>{
            alert("Failed to Register");
            console.log("fail");
        });

    }
   
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').height;
    const insets = useSafeArea();
        return (
            <>
            <StatusBar style='dark'/>
               <View style={{paddingTop: insets.top,}}></View>
               <View style={styles.appContainer}>
               {/* BackGround */}
               <ImageBackground style={{width:wp('100%'), height:'100%'}} source={require ('../../assets/images/UserLogin/background.png')} >
                    <View style={{paddingTop:10,paddingLeft:15}}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('PhoneNumberPage')}>
                                <Image style={{width:40,height:40}} source={require('../../assets/images/backbuttonlight.png')} />
                                </TouchableOpacity>

                            </View>
                            <View style={{paddingLeft:25,paddingRight:25,paddingTop:25,paddingBottom:30, width:wp('100%'),height:deviceHeight>600?440:hp('50%') , backgroundColor:'white', bottom:0,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                       

                       <View style={{ backgroundColor:'white'}}>
                       <Text style={{fontFamily: 'OpenSans', fontSize:22, fontWeight:'400'}}>Let's create your profile </Text>
                                
                                {/* Inputs */}

                                    <TextInput  onChangeText={newfirstName => setFirstName(newfirstName)}  placeholder="First name" 
                                    style={{fontFamily: 'OpenSans', marginTop: 20,marginBottom:17,paddingBottom:8,
                                    borderColor: ' #1E1E1E;',
                                    borderBottomWidth: 0.75
                                }}
                                    />
                                     <TextInput onChangeText={newLastName => setLastName(newLastName)} placeholder="Last name" 
                                     style={{fontFamily: 'OpenSans', marginBottom:17,paddingBottom:8,
                                        borderColor: ' #1E1E1E;',
                                        borderBottomWidth: 0.75
                                    }}
                                    />
                                     <TextInput   onChangeText={newEmail => setEmail(newEmail)} placeholder="Email-id"
                                     style={{fontFamily: 'OpenSans', marginBottom:26,paddingBottom:8,
                                    borderColor: ' #1E1E1E;',
                                    borderBottomWidth: 0.75
                                }}
                                    />
                                     {/* <TextInput  onChangeText={newUsername => setUsername(newUsername)} placeholder="Username" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                     <TextInput onChangeText={newPassword => setPassword(newPassword)} secureTextEntry={true}  placeholder="Password" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    /> */}
                                    

                               <LinearGradient colors={['#1E1E1E', '#1E1E1E', ]}
                                   start={{x: 0, y: 0.5}}
                                   end={{x: 1, y: 1}}
                                   style={{paddingVertical:10, borderRadius: 30, }}
                               >
                                   <TouchableOpacity onPress={submitHandler }>
                                   <Text style={{color: '#fff',fontFamily: 'OpenSans', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Submit</Text>
                                   </TouchableOpacity>
                               </LinearGradient>

                               <Text style={{fontFamily: 'OpenSans',marginTop:20,marginBottom:15, textAlign:'center',fontWeight:'700',fontSize:12}}>OR SIGN UP WITH</Text>

                                {/* view of button */}
                               
                                <View style={{ width:deviceWidth>375?154:wp('40%'),justifyContent:'space-around',alignSelf:'center',
                                alignItems:'center',backgroundColor:'white',marginBottom:20,flexDirection:'row'}} >
 
                                   <TouchableOpacity >
                                    <View style={{alignSelf:'center', marginRight:18, width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'white',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                        <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/fb.png')} />
                                    </View>
                                    </TouchableOpacity>

                                   
                                    <TouchableOpacity>
                                    <View style={{ alignSelf:'center',marginRight:18, width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                            <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/google.png')} />
                                    </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <View style={{alignSelf:'center', width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                    <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/insta.png')} />
                                    </View>
                                    </TouchableOpacity>
                                         
                                </View>
                                <View style={{width:'100%',backgroundColor:'white',}}>
                                <Text style={{fontFamily: 'OpenSans', textAlign:'center',fontWeight:'400',fontSize:8}}>By continuing you agree to our <Text style={{fontFamily: 'OpenSans', textAlign:'center',fontWeight:'700',fontSize:8, color:'#323DA2'}}>TERMS OF SERVICE </Text></Text>
                                <Text style={{fontFamily: 'OpenSans',textAlign:'center',fontWeight:'400',fontSize:8}}>Hopnob services are subject to our <Text style={{fontFamily: 'OpenSans',textAlign:'center',fontWeight:'700',fontSize:8, color:'#323DA2'}}> PRIVACY POLICY </Text></Text>
                               
                                </View>

                           
                                
                       </View>

                   </View>
               </ImageBackground>

           </View>


















               {/*  */}
              



                
               
            </>
          
       

      );
}

const styles = StyleSheet.create({
    
 appContainer:{
     flex:1,
     backgroundColor:'white'
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
