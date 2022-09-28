import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import {scale} from 'react-native-size-matters';

// images description array
const icons = [
    {
        image:  require('../../assets/images/topNavBar/dressMe.png'),
    },

    {
        image:  require('../../assets/images/topNavBar/clickNmatch.png'),
    },

    {
        image:  require('../../assets/images/topNavBar/shop.png'),
    },
 
    
];

const Topnavbar =() =>{
  return (
    <View style={styles.containerMain} >
         <View style={{backgroundColor:'none',flexDirection:'row',justifyContent:'space-around'}}>
               <View style={{borderRadius:15, padding:10,justifyContent:'space-around',alignItems:'center',backgroundColor:'#5BAE58'}}> 
                    <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
                    <Image style={{width:60,height:60}} source={icons[0].image}></Image>
                    <Text style={{ color:'white',fontSize:12,fontWeight:700}}>Dress Me</Text>
                    </TouchableOpacity>
               </View>
               
               <View style={{borderRadius:15, padding:10,justifyContent:'space-around',alignItems:'center', backgroundColor:"#E95689"}}>
               <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
               <Image style={{ width:60,height:60}} source={icons[1].image}></Image>
                    
                <Text style={{color:'white', fontSize:12,fontWeight:700}}>Click N Match</Text>
               </TouchableOpacity>
                </View>
                <View style={{borderRadius:15, padding:10,justifyContent:'space-around',alignItems:'center',  backgroundColor:"#2B388F"}}>
               <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
               <Image style={{color:'white',width:60,height:60}} source={icons[2].image}></Image>

                <Text style={{color:'white',fontSize:12,fontWeight:700}}>Shop</Text>
               </TouchableOpacity>
                </View>
                
         </View>
    </View>
  );
}
export default Topnavbar;
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      width:"100%"
    }, 
     
    
});
   