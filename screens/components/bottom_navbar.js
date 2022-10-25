import React from 'react';
import {   View, Text,TouchableOpacity, Image, } from 'react-native';

export default function BottomNavigationBarCMP({navigator}){
  return(
      <View style={{borderWidth:0.2, marginTop:10, paddingTop:10,paddingBottom:10, flexDirection:'row',borderColor:'grey', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white',borderTopRightRadius:20,borderTopLeftRadius:20 }}>
     
      <TouchableOpacity  onPress={() =>  navigator.navigate('WardrobePage')}>
           <View style={{alignItems:'center',padding:5,}}>
               <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/1.png')}/>
               <Text>wardrobe</Text>
           </View>
       </TouchableOpacity>
       
       <TouchableOpacity onPress={() =>  navigator.navigate('AddPageTwo')}>
               <View style={{alignItems:'center',padding:5,}}>
                   <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/2.png')}/>

                   <Text>add</Text>
           </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={() =>  navigator.navigate('OutfitsPage')}>
       <View style={{alignItems:'center',padding:5,}}>
           <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/3.png')}/>
           <Text>outfits</Text>
           </View>
       </TouchableOpacity>

       <TouchableOpacity onPress= {()=> navigator.navigate('MePage')}>
       <View style={{alignItems:'center',padding:5,}}>
           <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/4.png')}/>
           <Text>me</Text>
           </View>
       </TouchableOpacity>
      </View>
  )
}
 


   