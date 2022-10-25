import React ,{useState,useRef,useEffect} from 'react';
import { SafeAreaView,StatusBar, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation, useRoute } from '@react-navigation/native';
 
import OTPInputView from '@twotalltotems/react-native-otp-input'; 
  
 function OtpVerification({navigation}) {
    const mobileNumber = navigation.getParam('mobileNumber');
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
                           <Text style={{fontSize:12, fontWeight:'400'}}>
                       Mobile Number{ mobileNumber}
                           </Text>
                       </View>
                       <View style={{ backgroundColor:'white'}}>
                           {/* https://www.npmjs.com/package/@twotalltotems/react-native-otp-input*/}
                           <OTPInputView 
                           codeInputFieldStyle={{color:'black',borderRadius:20, width:67,height:56}}
                           codeInputHighlightStyle={{color:'black'}}
                           onCodeFilled = {(code => {
                               console.log(`Code is ${code}, you are good to go!`)
                           })}
                           autoFocusOnLoad
                            style={{ width: '100%',height:100, }} pinCount={4}/>
              
                       </View>
                       <View style={{ paddingBottom:50, backgroundColor:'white'}}>
                               <LinearGradient colors={['#2D3791', '#4453DF', ]}
                                   start={{x: 0, y: 0.5}}
                                   end={{x: 1, y: 1}}
                                   style={{paddingVertical:9, borderRadius: 30}}
                               >
                                   <TouchableOpacity onPress={()=> navigation.navigate('UserRegisterPage',{ mobileNumber: mobileNumber}) }>
                                   <Text style={{color: '#fff', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Next</Text>
                                   </TouchableOpacity>
                               </LinearGradient>
                       </View>
                       <View style={{backgroundColor:'white',flexDirection:'row',marginBottom:100, justifyContent:'center', marginBottom:50,alignItems:'center'}}>
                       <Text style={{fontSize:14,fontWeight:'400'}}>Didn’t receive the code? 
                       </Text> 
                       <TouchableOpacity>
                           <Text style={{color:'#F05A28'}}>RESEND</Text>
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
