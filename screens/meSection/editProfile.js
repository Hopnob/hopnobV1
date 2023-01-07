import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,ImageBackground, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import Image from 'react-native-scalable-image';
import SwitchSelector from "react-native-switch-selector";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
export default function EditProfile({ useNavigation }) {
   
  let [fontsLoaded] = useFonts({
    'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const gender = [
        { label: "Female", value: "1" },
        { label: "Male", value: "2" }
      ];
      const passwords = [
        { label: "Forgot", value: "1" },
        { label: "Edit", value: "2" }
      ];
      const notification = [
        { label: "On", value: "1" },
        { label: "Off", value: "2" }
      ];

      return (
        <>
         <StatusBar style='dark'/>
         
         <View style={styles.appContainer}>
      
        {/* list */}
        <View style={{marginTop:22, marginBottom:10,flexDirection:'row', width:'100%',}}>  
        <View style={{ width:'5%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>
                    <View style={{alignItems:'center',width:'90%',backgroundColor:'white' }}>
                    <ImageBackground style={{width:84,height:84}} source={require('../../assets/images/mePage/profilePic.png')}>
                        <Image width={20} style={{alignSelf:'flex-end',position:'absolute',bottom:0}} source={require('../../assets/images/mePage/pencil.png')}/>
                    </ImageBackground>
                    <Text style={{marginTop:10, color:'#000000',fontSize:24, fontWeight:'400',fontFamily:'Open-sans'}}>RIYA ADAVANI</Text>
                    </View>
        </View>
        <View style={{marginTop:22, marginBottom:50, width:'100%',}}>
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'30%'}}>
                <Text style={{fontSize:16,fontWeight:'600',fontFamily:'Open-sans'}}>Email</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'70%'}}>
                <TextInput  placeholder="" style={{
                borderColor: 'black',
                borderBottomWidth: 1}}
                />

                </View>
                
              </View>
            
                
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontSize:16,fontWeight:'600',fontFamily:'Open-sans'}}>Gender</Text>
                </View>
                <View style={{justifyContent:'flex-start',width:'60%'}}>
                    {/* https://www.npmjs.com/package/react-native-switch-selector */}
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={gender}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />

                </View>
                
              </View>
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'30%'}}>
                <Text style={{fontSize:16,fontWeight:'600',fontFamily:'Open-sans'}}>Birthday</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'70%'}}>
                <TextInput  placeholder="" style={{
                borderColor: 'black',
                borderBottomWidth: 1}}
                />

                </View>
                
              </View>   
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontSize:16,fontWeight:'600',fontFamily:'Open-sans'}}>Password</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'60%'}}>
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={passwords}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />


                </View>
                
              </View>   
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontWeight:'600',fontFamily:'Open-sans',fontSize:16,}}>Notifications</Text>
                </View>
                <View style={{justifyContent:'space-around',width:'60%'}}>
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={notification}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />
                </View>
              </View> 
        </View>
     </View>
        </>
        


     
   );
  

}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 

});
