
import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Topnavbar ({navigation}) {
            return (
           <View style={{ marginTop:50, paddingTop:10,paddingBottom:10, position:'absolute', flexDirection:'row', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white', }}>
           
           <TouchableOpacity  onPress={() =>  navigation.navigate('DressMePage')}>
                <View style={{alignItems:'center',padding:14,borderWidth:1,borderRadius:15 }}>
                    <Text>Dress me</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('clickandmatchPage')}>
                    <View style={{alignItems:'center',padding:14,borderWidth:1,borderRadius:15}}>

                        <Text>Click & match</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>  navigation.navigate('OutfitsPage')}>
            <View style={{alignItems:'center',padding:14,borderWidth:1,borderRadius:15}}>
                <Text>Shop</Text>
                </View>
            </TouchableOpacity>

         
               
           </View>
 
  );
}
 
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
       backgroundColor:'black',
    }, 
     
    
});
   