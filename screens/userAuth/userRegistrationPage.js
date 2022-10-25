import React ,{useState,useRef,useEffect} from 'react';
import { Alert, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

 
export default function UserRegisterPage({navigation}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const mobileNumber = navigation.getParam('mobileNumber');
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
            'Please provide a diffrent input',  
            [  
                {  
                    text: 'Next',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
               
            ]  
        );  
    } 
    const submitHandler=()=> {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(mobileNumber);


        axios.post("https://hopnob-backend-cctjhm4vha-uc.a.run.app/api/v1/auth/register", 
        {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "username": username,
            "password": password,
            "mobileNumber": mobileNumber,
        }
        )
          .then((response) => {
            successAlert();
            console.log('Success');
            console.log(response.status);
          }).catch((response)=>{
            failAlert();
            console.log('Falied to Create new user');
            console.log(response);
          })
          ;

    }
        return (
            <View style={styles.appContainer}>
               {/* BackGround */}
               <ImageBackground style={{width:'100%', height:'100%'}} source={require ('../../assets/images/UserLogin/background.png')} >

                   <View style={{padding:25, width:'100%',height:'80%', backgroundColor:'white', bottom:0,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                      <View>
                       <Text style={{fontSize:22, fontWeight:'400'}}> Let’s create your profile </Text>
                       {/* <Text style={{fontSize:12, fontWeight:'400'}}>
                       Mobile Number { mobileNumber}
                           </Text> */}
                       </View>

                       <View style={{ backgroundColor:'white'}}>
                                {/* Inputs */}
                                <TextInput  onChangeText={newfirstName => setFirstName(newfirstName)}  placeholder="First name" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                     <TextInput onChangeText={newLastName => setLastName(newLastName)} placeholder="Last name" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                     <TextInput  onChangeText={newEmail => setEmail(newEmail)} placeholder="Email-Id" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                     <TextInput  onChangeText={newUsername => setUsername(newUsername)} placeholder="Username" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                     <TextInput onChangeText={newPassword => setPassword(newPassword)} secureTextEntry={true}  placeholder="Password" style={{margin: 15,
                                    borderColor: 'black',
                                    borderBottomWidth: 1}}
                                    />
                                    

                               <LinearGradient colors={['#2D3791', '#4453DF', ]}
                                   start={{x: 0, y: 0.5}}
                                   end={{x: 1, y: 1}}
                                   style={{paddingVertical:9, borderRadius: 30,marginTop:15}}
                               >
                                   <TouchableOpacity onPress={submitHandler }>
                                   <Text style={{color: '#fff', textAlign: 'center',fontSize: 15,fontWeight:'700'}}>Submit</Text>
                                   </TouchableOpacity>
                               </LinearGradient>

                               <Text style={{marginTop:20, textAlign:'center',fontWeight:'700',fontSize:12}}>OR SIGN UP WITH</Text>

                                {/* view of button */}
                                <View style={{marginTop:14, flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                                    
                                    <View style={{width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                    <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/fb.png')} />
                                    </View>
                                    
                                    <View style={{width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                    <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/google.png')} />
                                    
                                    </View>
                                   
                                    <View style={{width:40,height:40,justifyContent:'space-around',alignItems:'center', backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#D9D9D9',borderRadius:8}}>
                                    <Image style={{ width: '100%',height: '70%',resizeMode: 'contain',}} source={require('../../assets/images/UserLogin/insta.png')} />
                                   
                                    </View>

                                </View>
                                


                               <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                               <Text style={{marginTop:20, textAlign:'center',fontWeight:'400',fontSize:12}}>By continuing you agree to our</Text>
                               <Text style={{marginTop:20, textAlign:'center',fontWeight:'400',fontSize:12, color:'#323DA2'}}>TERMS OF SERVICE </Text>
                               </View>

                               <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                               <Text style={{textAlign:'center',fontWeight:'400',fontSize:12}}>Hopnob services are subject to our</Text>
                               <Text style={{ textAlign:'center',fontWeight:'400',fontSize:12, color:'#323DA2'}}>PRIVACY POLICY </Text>
                               </View>
                                
                       </View>

                   </View>
                   
               </ImageBackground>

           </View>
       

      );
}

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
