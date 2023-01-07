import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
export default function endStyleTestPage({navigation}){
    let [fontsLoaded] = useFonts({
        
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return(<>
    <StatusBar style='dark'/>
    <ImageBackground style={{flex:1,justifyContent:'space-around',alignItems:'center'}} source={require('../../../assets/images/styletest/endStyleTest.png')}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'400',marginBottom:20,textAlign:'center', fontSize:22}}>Thank you! </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('MePage')}>
        <Text style={{fontWeight:'700' , fontSize: 15,backgroundColor:'black',color:'white',textAlign:'center',paddingHorizontal:28,paddingVertical:10, borderRadius:30, width:'100%'}}>Continue</Text>
        </TouchableOpacity>
        
        </View>
        
    </ImageBackground>

 
    </>
        
    )
}