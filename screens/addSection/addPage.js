import { StatusBar } from 'expo-status-bar';
import {useState} from'react';

//import nav bar components
import Bottomnav from '../components/bottom_navbar';
import Topnavbar from '../components/top_navbar';

import { StyleSheet,ImageBackground, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

export default function addPage() {
    
  return (
   <View style={styles.appContainer}>
       <View style={styles.topNavBar}>
           <Topnavbar />
       </View>

       <View style={styles.banner}>
            <ImageBackground style={{ width:"100%",height:206,justifyContent:'center'}} source={ require('../../assets/images/addMe/bannerAdd.png')}>
                <Text style={{fontSize:19,textAlign:'center', fontWeight:600,width:'40%',padding:5}}>Start with your favorite items</Text>
                <Text style={{fontSize:16,textAlign:'center', fontWeight:400,width:'40%',padding:10}}>Add just 15 clothes to begin!</Text>
            </ImageBackground>
       </View>

        <View style={styles.clothing}>
        <TouchableOpacity>
        
            <Text style={{color:'white', fontSize:16,textAlign:'center', fontWeight:600}}> 
            <Text style = {{textDecorationLine: 'underline'}}> CLICK HERE
            </Text>  to Add “YOUR” Clothing images</Text>

        </TouchableOpacity>
        </View>

        <View style={{width:"100%",marginTop:40}}>

            <Text style={{color:'black', fontSize:16,textAlign:'center', fontWeight:600}}> OR  </Text>

        </View>

        <View style={styles.ourImage}>
        <TouchableOpacity>
        
            <Text style={{color:'white', fontSize:16,textAlign:'center', fontWeight:600}}> 
            <Text style = {{textDecorationLine: 'underline'}}> CLICK HERE
            </Text>  to Select from “OUR” images</Text>

        </TouchableOpacity>
        </View>


       <View style={styles.bottomNavBar}>
           <Bottomnav />
       </View>

   </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white'
 }, 
 topNavBar:{
     paddingTop:10,
     width:'100%',
 },
 bottomNavBar:{
     bottom:0,
     paddingTop:10,
     width:'100%',
     position:'absolute',
 },banner:{
     width:'100%',
     marginTop:30,

 },clothing:{
     width:'100%',
     backgroundColor:'#5BAE58',
     marginTop:30,
     borderRadius:20,
     paddingVertical:10,
     paddingHorizontal:5,
 },
 ourImage:{
    width:'100%',
    backgroundColor:'#C87600',
    marginTop:30,
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:5,
},
 
});
