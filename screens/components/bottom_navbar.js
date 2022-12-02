import React from 'react';
import {   View, Text,TouchableOpacity, Image, } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function BottomNavigationBarCMP({navigator}){
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
  return(
    
      <View style={{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        marginTop:0, paddingTop:10,paddingBottom:10, flexDirection:'row',borderColor:'grey', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white',borderTopRightRadius:20,borderTopLeftRadius:20 }}>
     
      <TouchableOpacity  onPress={() =>  navigator.navigate('WardrobePage')}>
           <View style={{alignItems:'center',padding:5,}}>
               <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/1.png')}/>
               <Text style={{fontWeight:'400', fontFamily:'Open-sans',fontSize:10}}>wardrobe</Text>
           </View>
       </TouchableOpacity>
       
       <TouchableOpacity onPress={() =>  navigator.navigate('AddPageTwo')}>
               <View style={{alignItems:'center',padding:5,}}>
                   <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/2.png')}/>

                   <Text style={{fontWeight:'400', fontFamily:'Open-sans',fontSize:10}}>add</Text>
           </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={() =>  navigator.navigate('OutfitsPage')}>
       <View style={{alignItems:'center',padding:5,}}>
           <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/3.png')}/>
           <Text style={{fontWeight:'400', fontFamily:'Open-sans',fontSize:10}}>outfits</Text>
           </View>
       </TouchableOpacity>

       <TouchableOpacity onPress= {()=> navigator.navigate('MePage')}>
       <View style={{alignItems:'center',padding:5,}}>
           <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/4.png')}/>
           <Text style={{fontWeight:'400', fontFamily:'Open-sans',fontSize:10}}>me</Text>
           </View>
       </TouchableOpacity>
      </View>
  )
}
 


   