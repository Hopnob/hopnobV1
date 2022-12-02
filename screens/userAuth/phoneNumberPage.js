import React, {useState, useRef, useEffect} from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import {useNavigation} from '@react-navigation/native';
import {useSafeArea} from 'react-native-safe-area-context';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import {initializeApp, getApp} from 'firebase/app';
import {getAuth, PhoneAuthProvider, signInWithCredential} from 'firebase/auth';
import {FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import {Dimensions} from 'react-native';
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

if (
    !app
        ?.options || Platform.OS === 'web'
) {
    throw new Error(
        'This example only works on Android or iOS, and requires a valid Firebase confi' +
        'g.'
    );
}


export default function PhoneNumberPage({navigation}) {
    const refContainer = useRef(null);
    const [value, setValue] = useState("");

    const [formattedValue, setFormattedValue] = useState("");

    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

     


    const recaptchaVerifier = React.useRef(null);
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState();

    const [message, showMessages] = React.useState();
    const deviceWidth = Dimensions
        .get('window')
        .width;
    const deviceHeight = Dimensions
        .get('window')
        .height;
        let [fontsLoaded] = useFonts({
            'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
          });
          if (!fontsLoaded) {
            return <AppLoading />;
          }
    const insets = useSafeArea();
    
    return(
        <>
        < StatusBar style = 'dark' />
        <View style={{paddingTop: insets.top,backgroundColor: 'black'}}></View>
        <KeyboardAvoidingView  enabled="enabled"
            behavior={Platform.OS === 'ios'
                ? 'padding'
                : null}
            style={{
                flexGrow: 1
            }}>
            <View style={styles.appContainer}>
            <FirebaseRecaptchaVerifierModal
             ref={recaptchaVerifier} firebaseConfig={app.options}
                    //   attemptInvisibleVerification
                />
                <ImageBackground
                    style={{
                        width: wp('100%'),
                        height: '100%'
                    }}
                    source={require('../../assets/images/UserLogin/background.png')}>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 15
                        }}>
                        <TouchableOpacity onPress={() => navigation.navigate('IntroductoryThree')}>
                            <Image
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                                source={require('../../assets/images/backbuttonlight.png')}/>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            padding: 25,
                            width: wp('100%'),
                            height: deviceHeight > 600
                                ? 342
                                : hp('50%'),
                            backgroundColor: 'white',
                            bottom: 0,
                            position: 'absolute',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30
                        }}>
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'Open-sans',
                                    fontSize: 22,
                                    fontWeight: '400'
                                }}>Login with mobile</Text>
                        </View>
                        <View
                            style={{
                                marginTop: 14,
                                marginBottom: 28
                            }}>
                            <Text
                                style={{
                                    fontFamily: 'Open-sans',
                                    fontSize: 16,
                                    fontWeight: '400'
                                }}>Enter your mobile number to continue with Hopnob and earn coupons
                            </Text>
                        </View>
                      
                        <View
                            style={{
                                marginTop: 14,
                                marginBottom: 20
                            }}>
                            {/*  https://www.abstractapi.com/guides/react-native-phone-number-verification article  */}
                            <SafeAreaView
                                style={{
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}>
                                {
                                    showMessage && (
                                        <View style={styles.message}>
                                            <Text>Value : {value}</Text>
                                            <Text>Formatted Value : {formattedValue}</Text>
                                            <Text>Valid : {
                                                    valid
                                                        ? "true"
                                                        : "false"
                                                }</Text>
                                        </View>
                                    )
                                }
                                <PhoneInput
                                    ref={refContainer}
                                    defaultValue={value}
                                    defaultCode="IN"
                                    layout="first"
                                    onChangeText={(text) => {
                                        setValue(text);
                                    }}
                                    onChangeFormattedText={(text) => {
                                        setFormattedValue(text);
                                    }}
                                    withDarkTheme="withDarkTheme"
                                    containerStyle={{
                                        borderRadius: 75,
                                        borderWidth: 1,
                                        width: '100%',
                                        backgroundColor: 'white'
                                    }}
                                    textInputProps={{
                                        borderLeftWidth: 1,
                                        color: 'black',
                                        paddingLeft: 10
                                    }}
                                    textContainerStyle={{
                                        backgroundColor: 'white',
                                        borderTopRightRadius: 75,
                                        borderBottomRightRadius: 75
                                    }}/> 
                                    {/* <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                const checkValid = refContainer.current?.isValidNumber(value);
                                                setShowMessage(true);
                                                setValid(checkValid ? checkValid : false);
                                                }}
                                            >
                                                <Text>Validate</Text>
                                            </TouchableOpacity> */
                                }
                            </SafeAreaView>

                            

                        </View>

                        <TouchableOpacity
                            onPress={async () => {
                                // The FirebaseRecaptchaVerifierModal ref implements the
                                // FirebaseAuthApplicationVerifier interface and can be passed directly to
                                // `verifyPhoneNumber`.
                                try {
                                    const phoneProvider = new PhoneAuthProvider(auth);
                                    const verificationId = await phoneProvider.verifyPhoneNumber(
                                        formattedValue,
                                        recaptchaVerifier.current
                                    );
                                    setVerificationId(verificationId);
                                    showMessages({text: 'Verification code has been sent to your phone.'});
                                    alert("Verification code has been set on " + formattedValue)
                                    navigation.navigate('OtpVerification', {
                                        mobileNumber: formattedValue,
                                        hashValue: verificationId
                                    });
                                } catch (err) {
                                    alert(err.message);
                                    // alert("Failed") showMessages({ text: `Error: ${err.message}`, color: 'red'
                                    // });
                                }
                            }}>
                            <View
                                style={{
                                    marginBottom: 50,
                                    borderRadius: 30,
                                    paddingVertical: 10,
                                    backgroundColor: '#1E1E1E',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>

                                <Text
                                    style={{
                                        fontFamily: 'Open-sans',
                                        color: '#fff',
                                        textAlign: 'center',
                                        fontSize: 15,
                                        fontWeight: '700'
                                    }}>Proceed</Text>

                                {/* <LinearGradient colors={['#2D3791', '#4453DF', ]}
                                        start={{x: 0, y: 0.5}}
                                        end={{x: 1, y: 1}}
                                        style={{paddingVertical:9, borderRadius: 30}}
                                    >

                                    </LinearGradient> */
                                }
                            </View>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>
        </KeyboardAvoidingView>
        </>
    )
}
// export default function PhoneNumberPage({navigation}) {

//     const insets = useSafeArea();
//     return (
//         <> < StatusBar style = 'dark' />

//         <KeyboardAvoidingView
//             enabled="enabled"
//             behavior={Platform.OS === 'ios'
//                 ? 'padding'
//                 : null}
//             style={{
//                 flexGrow: 1
//             }}>

//             <View style={styles.appContainer}>
//                 {/* BackGround */}
               
                
//             </View>
//         </KeyboardAvoidingView>

//     </>

//     );
// }
// }

const styles = StyleSheet.create({

    appContainer: {
        flex: 1
    }
});