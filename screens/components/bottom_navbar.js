import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import {scale} from 'react-native-size-matters';

// images description array
const icons = [
    {
        image:  require('../../assets/images/bottomNavBar/wardrobe.png'),
    },

    {
        image:  require('../../assets/images/bottomNavBar/add.png'),
    },

    {
        image:  require('../../assets/images/bottomNavBar/outfits.png'),
    },
 
    {
        image:  require('../../assets/images/bottomNavBar/me.png'),
    },
];

const Bottomnav =() =>{
    const addClickedHandler = () => {
        this.props.navigation.navigate('addSection');
     };
  return (
    <View style={styles.containerMain} >
         <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
               <View style={{padding:10,justifyContent:'space-around',alignItems:'center'}}> 
                    <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
                    <Image style={{width:30,height:30}} source={icons[0].image}></Image>
                    <Text style={{fontSize:12,fontWeight:700}}>Wardrobe</Text>
                    </TouchableOpacity>
               </View>
               
               <View style={{padding:10,justifyContent:'space-around',alignItems:'center'}}>
               <TouchableOpacity onPress={addClickedHandler} style={{justifyContent:'space-around',alignItems:'center' }}>
               <Image style={{width:30,height:30}} source={icons[1].image}></Image>
                    
                <Text style={{fontSize:12,fontWeight:700}}>Add</Text>
               </TouchableOpacity>
                </View>
                <View style={{padding:10,justifyContent:'space-around',alignItems:'center'}}>
               <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
               <Image style={{width:30,height:30}} source={icons[2].image}></Image>

                <Text style={{fontSize:12,fontWeight:700}}>Outfits</Text>
               </TouchableOpacity>
                </View>
                <View style={{padding:10,justifyContent:'space-around',alignItems:'center'}}> 
               <TouchableOpacity style={{justifyContent:'space-around',alignItems:'center' }}>
               <Image style={{width:30,height:30}} source={icons[3].image}></Image>

                <Text style={{fontSize:12,fontWeight:700}}>Me</Text>
               </TouchableOpacity>
                </View>
         </View>
    </View>
  );
}
export default Bottomnav;
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      width:"100%"
    }, 
     
    
});
   