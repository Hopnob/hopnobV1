import { StatusBar } from 'expo-status-bar';
import {useState} from'react';

//import nav bar components
import Bottomnav from '../components/bottom_navbar';
import Topnavbar from '../components/top_navbar';

import { StyleSheet,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

export default function addPage() {
    
  return (
   <View style={styles.appContainer}>
       <View style={styles.topNavBar}>
           <Topnavbar />
       </View>

       <View style={styles.banner}>
           <Image style={{position:'absolute',right:0, width: 172,height: 161, justifyContent:'center'}} source={ require('../../assets/images/addMe/bannerAdd2.png')} /> 
            <Text style={{fontSize:19,textAlign:'center', fontWeight:600,width:'60%',padding:40}}>Add “YOUR” clothing images</Text>
           
       </View>

        <View style={styles.clothing}>
        <TouchableOpacity >
        <Text style={{paddingHorizontal:15,textAlign:'center', marginHorizontal:10,paddingVertical:4,color:'white',backgroundColor:'#2B388F', borderRadius:20, fontSize:20, fontWeight:600}}> 
             CLICK  </Text>
        </TouchableOpacity>

        <Text style={{ color:'black', fontSize:16, fontWeight:600}}> 
        photos from your camera</Text>

        </View>

        <View style={{width:"100%",marginTop:40}}>
            <Text style={{color:'black', fontSize:16,textAlign:'center', fontWeight:600}}> OR  </Text>
        </View>

        <View style={styles.ourImage}>
        <TouchableOpacity >
        <Text style={{paddingHorizontal:15,textAlign:'center', marginHorizontal:10,paddingVertical:4,color:'white',backgroundColor:'#2B388F', borderRadius:20, fontSize:20, fontWeight:600}}> 
        UPLOAD  </Text>
        </TouchableOpacity>

        <Text style={{ color:'black', fontSize:16, fontWeight:600}}> 
        pictures from your gallery
         </Text>

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
     marginTop:30,
     width:"100%",
     alignContent:'center',

 },clothing:{
     width:'100%',
     backgroundColor:'rgba(219, 34, 94, 0.3)',
     marginTop:30,
     paddingVertical:10,
     paddingHorizontal:5,
     flexDirection:'row'
 },
 ourImage:{
    width:'100%',
    backgroundColor:'rgba(251, 162, 59, 0.8)',
    marginTop:30,
    paddingVertical:10,
    paddingHorizontal:5,
    flexDirection:'row'

},
 
});
