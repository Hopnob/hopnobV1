import React ,{useState,useRef,useEffect} from 'react';
import { SafeAreaView,StatusBar, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/native';




import { initializeApp,getApp} from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
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


export default function PhoneNumberPage({navigation}) {
    const refContainer = useRef(null);
    const [value, setValue] = useState("");
    
    const [formattedValue, setFormattedValue] = useState("");

    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

  
    // const phoneInput = useRef<PhoneInput>(null);
    // useEffect(() => {
    //     // 👇️ this is reference to input element
    //     console.log(refContainer.current);
    
    //   }, []);
            
      
      const proceedButtonHandler=()=>{
        
        console.log(formattedValue);

        navigation.navigate('OtpVerification',{mobileNumber: formattedValue } );
      }

    const recaptchaVerifier = React.useRef(null);
    const [verificationId, setVerificationId] = React.useState();   
    const [verificationCode, setVerificationCode] = React.useState();
   
    const [message, showMessages] = React.useState();
    
              return (
                 

                 <View style={styles.appContainer}>
                    {/* BackGround */}
                    <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={app.options}
                    //   attemptInvisibleVerification
                    />
                    <ImageBackground style={{width:'100%', height:'100%'}} source={require ('../../assets/images/UserLogin/background.png')} >
                        
                        <View style={{padding:25, width:'100%',height:'50%', backgroundColor:'white', bottom:0,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                           <View>
                            <Text style={{fontSize:22, fontWeight:'400'}}>Login with mobile</Text>
                            </View>
                            <View style={{marginTop:14,marginBottom:28}}>
                            <Text style={{fontSize:16, fontWeight:'400'}}>Enter your mobile number to continue with Hopnob and earn coupons </Text>
                            </View>
                            <View style={{marginTop:14,marginBottom:20}}>
                                {/* https://www.abstractapi.com/guides/react-native-phone-number-verification article  */}
                         
                                <SafeAreaView style={styles.wrapper}>
                                            {showMessage && (
                                                <View style={styles.message}>
                                                <Text>Value : {value}</Text>
                                                <Text>Formatted Value : {formattedValue}</Text>
                                                <Text>Valid : {valid ? "true" : "false"}</Text>
                                                </View>
                                            )}
                                            <PhoneInput
                                                ref={refContainer}
                                                defaultValue={value}
                                                defaultCode="US"
                                                layout="first"
                                                onChangeText={(text) => {
                                                setValue(text);
                                                }}
                                                onChangeFormattedText={(text) => {
                                                setFormattedValue(text);
                                                }}
                                                withDarkTheme
                                            />
                                            {/* <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                const checkValid = refContainer.current?.isValidNumber(value);
                                                setShowMessage(true);
                                                setValid(checkValid ? checkValid : false);
                                                }}
                                            >
                                                <Text>Validate</Text>
                                            </TouchableOpacity> */}
                                            </SafeAreaView>

                            </View>
                            <TouchableOpacity 
                            onPress={
                                async () => {
                                // The FirebaseRecaptchaVerifierModal ref implements the
                                // FirebaseAuthApplicationVerifier interface and can be
                                // passed directly to `verifyPhoneNumber`.
                                try {
                                const phoneProvider = new PhoneAuthProvider(auth);
                                const verificationId = await phoneProvider.verifyPhoneNumber(
                                    formattedValue,
                                    recaptchaVerifier.current
                                );
                                setVerificationId(verificationId);
                                showMessages({
                                    text: 'Verification code has been sent to your phone.',
                                });
                                alert("Verification code has been set on "+ formattedValue)
                                navigation.navigate('OtpVerification',{mobileNumber: formattedValue, hashValue:verificationId } );
                                } catch (err) {
                                    alert(err.message);
                                    // alert("Failed")
                                // showMessages({ text: `Error: ${err.message}`, color: 'red' });
                                }
                            }}
                            
                            >
                            <View style={{marginBottom:50,borderRadius:30,paddingVertical:10, backgroundColor:'#1E1E1E',alignItems:'center', justifyContent:'space-around'}}>
                                 
                                        <Text style={{color: '#fff', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Proceed</Text>
                                       
                                    {/* <LinearGradient colors={['#2D3791', '#4453DF', ]}
                                        start={{x: 0, y: 0.5}}
                                        end={{x: 1, y: 1}}
                                        style={{paddingVertical:9, borderRadius: 30}}
                                    >
                                        
                                    </LinearGradient> */}
                            </View>
                            </TouchableOpacity>


                        </View>
                        
                    </ImageBackground>

                </View>
            

           );
        }
// }

const styles = StyleSheet.create({
    
 appContainer:{
     flex:1,
     backgroundColor:'white',
     paddingBottom:30,
 }, 
  
  
});
