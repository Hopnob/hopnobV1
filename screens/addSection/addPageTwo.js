import React ,{ useState, } from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import Image from 'react-native-scalable-image';
import TopNavigationBarPrimary from '../components/topNavigationP';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AddCollections from '../components/AddCollections';
import ChatBox from '../components/chatbox';
import { useSafeArea } from 'react-native-safe-area-context';
export default function AddPageTwo({navigation}){
    const insets = useSafeArea();

    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
        
        <View style={{justifyContent:'space-around',alignItems:'center', flexDirection:'row'}}>
                <View>
                  <TopNavigationBarPrimary navigator={navigation} />  
                </View>
        </View>

          <View style={styles.appContainer}>
        {/* banner */}
            
            <View style={{marginTop:35}}>
            <Image width={wp(100)-48} source ={ require ('../../assets/images/addMe/bannerLP2.png')} />
            </View>
            
            
            <AddCollections navigation={navigation} />
             
            
            <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
            <ChatBox />
            </View>
            </View>
            <View style={{backgroundColor:'white',
            width:wp(100)}}>
            <BottomNavigationBarCMP navigator={navigation}/>
            </View>
            </>

      
    )
}



const styles = StyleSheet.create({
 appContainer:{
    flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',
 },  
});
