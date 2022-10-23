
import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
  export default function MeSettingsPage({ useNavigation }) {
    
      return (
         <View style={styles.appContainer}>
         

        {/* list */}
        <View style={{ flexDirection:'column',justifyContent:'space-around',paddingTop:25,}}>
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:15,height:17}} source={ require('../../assets/images/mePage/settings/1.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Edit Profile</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/settings/2.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Chat with us</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:23,height:16}} source={ require('../../assets/images/mePage/settings/3.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Clothes Upload Manual</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:15,height:15}} source={ require('../../assets/images/mePage/settings/4.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  FAQ</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:16,height:17   }} source={ require('../../assets/images/mePage/settings/5.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Logout</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
             
            
        </View>
     </View>


     
   );
  

}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 

});
