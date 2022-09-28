import { StatusBar } from 'expo-status-bar';
import {useState} from'react';

//import nav bar components
import Bottomnav from '../components/bottom_navbar';
import Topnavbar from '../components/top_navbar';

import { StyleSheet,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

export default function dressMeHome() {
     const buttonHandler  = () => {
        this.props.navigation.navigate('addSection');
     };
  return (
   <View style={styles.appContainer}>
       <View style={styles.topNavBar}>
           <Topnavbar />
       </View>

        <View style={styles.secondView}>
            <Text style={{fontSize:20,}}> 34 C</Text>

            <Text style={{fontSize:20, borderWidth:1,paddingLeft:10,paddingRight:10,paddingBottom:5,paddingTo:5}}> TODAY  </Text>

            <TouchableOpacity>
                <Image style={{width:40,height:40}} source={require("../../assets/images/dressMe/refresh.png") } /> 
            </TouchableOpacity>

        </View>
       <View style={styles.addingCloths} >
       <TouchableOpacity onPress={buttonHandler} >  <Image style={{width:111,height:130}} source={require("../../assets/images/dressMe/top.png") } />  </TouchableOpacity>
       <TouchableOpacity onPress={buttonHandler} >    <Image style={{width:119,height:170}} source={require("../../assets/images/dressMe/bottom.png") } />  </TouchableOpacity>
       
      
    


                   

       </View >
       <View style={styles.clothing}>
                        <TouchableOpacity onPress={buttonHandler} >
                        
                            <Text style={{color:'white', fontSize:16,textAlign:'center', fontWeight:600}}> 
                            Add clothes to see oufits </Text>

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
     borderBottomWidth:1,
     borderBottomColor:'black',
     paddingBottom:10,

    },
 bottomNavBar:{
     bottom:0,
     paddingTop:10,
     width:'100%',
     position:'absolute',
 }, secondView:{
     padding:10,
     marginTop:10,
     width:"100%",
     flexDirection:'row',
     justifyContent:'space-around'
 },addingCloths:{
     marginTop:30,
    marginLeft:40,
    marginRight:40,
    padding:20,
    borderWidth:1,
    justifyContent:'space-around',
    alignItems:'center'
}
 ,clothing:{
    backgroundColor:'#5BAE58',
    marginTop:30,
    marginLeft:40,
    marginRight:40,
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:5,
}
 
});
