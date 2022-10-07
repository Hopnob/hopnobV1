import React ,{useState,useRef,useEffect} from 'react';
import { SafeAreaView,StatusBar, FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/native';

export default function PhoneNumberPage({navigation}) {
    const refContainer = useRef(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    // const phoneInput = useRef<PhoneInput>(null);
    useEffect(() => {
        // 👇️ this is reference to input element
        console.log(refContainer.current);
    
      }, []);
            

         
              return (
                 

                 <View style={styles.appContainer}>
                    {/* BackGround */}
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
                                                defaultCode="IN"
                                                layout="first"
                                                onChangeText={(text) => {
                                                setValue(text);
                                                }}
                                                onChangeFormattedText={(text) => {
                                                setFormattedValue(text);
                                                }}
                                                withDarkTheme
                                            />
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                const checkValid = refContainer.current?.isValidNumber(value);
                                                setShowMessage(true);
                                                setValid(checkValid ? checkValid : false);
                                                }}
                                            >
                                                <Text>Validate</Text>
                                            </TouchableOpacity>
                                            </SafeAreaView>

                            </View>
                            <View style={{marginBottom:50,paddingBottom:50, backgroundColor:'white'}}>
                                    <LinearGradient colors={['#2D3791', '#4453DF', ]}
                                        start={{x: 0, y: 0.5}}
                                        end={{x: 1, y: 1}}
                                        style={{paddingVertical:9, borderRadius: 30}}
                                    >
                                        <TouchableOpacity onPress={()=> navigation.navigate('OtpVerification') }>
                                        <Text style={{color: '#fff', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Proceed</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                            </View>

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
     paddingBottom:50,
 }, 
  
  
});
