import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions,  StyleSheet, Text, View,Button,TextInput,TouchableOpacity, Pressable, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import { useSafeArea } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import BottomNavigationBarCMP from '../components/bottom_navbar';
//import basic react native components

import { widthPercentageToDP } from 'react-native-responsive-screen';
import ChatBox from '../components/chatbox';
import AddCollections from '../components/AddCollections';
import DressMeNavigation from './dressMeNavigation';
 




export default function DressMeZero({navigation}){
  
          const deviceWidth = Dimensions.get('window').width;
          let [fontsLoaded] = useFonts({
            'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
            'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

          });
          if (!fontsLoaded) {
            return <AppLoading />;
          }
          
          const insets = useSafeArea();

              return (
                <>
                 <StatusBar style='light'/>
                 <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                 <DressMeNavigation navigation={navigation} />
             
                
            <View style={styles.appContainer}>
            <View style={{marginTop:0}}>
                

                {/* banner */}
              <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo')}>
              <Image style={{alignSelf:'center'}} width={wp(100)-48} source={require('../../assets/images/dressMe/banner.png')} />
              </TouchableOpacity>
              
                <AddCollections navigation={navigation} />


            </View>
                <ChatBox/>
          </View>
                <BottomNavigationBarCMP style={{position:'absolute', }} navigator={navigation}/>
                
                 
                </>
               
           );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',
  justifyContent:'space-around'
 }, 
 card1: {
  width:widthPercentageToDP(27),
  paddingVertical:25,
  borderRadius: 15,
  alignItems:'center'
},
card2: {
  paddingVertical:25,
  width:widthPercentageToDP(27),
  backgroundColor: 'white',
  borderRadius: 15,
},
card3: {
  paddingVertical:25,
  width:widthPercentageToDP(27),
  backgroundColor: 'white',
  borderRadius: 15,
},
elevation: {
  elevation: 10,
  shadowColor: 'grey',
},

});

