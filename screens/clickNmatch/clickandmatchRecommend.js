import React, {useState,useRef,useEffect} from 'react';
import {
    FlatList,ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';

import ClickNMatchNavigation from './clickNmatchNavigation';

import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
 
export default function clickandmatchRecommendedPage({navigation}) {
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      if (!fontsLoaded) {
        return <AppLoading />;
      }
     
    const insets = useSafeArea();
    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                <ClickNMatchNavigation navigation={navigation}/>
                <View
                    style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',paddingTop:15
                }}>
                    <Text
                        style={{
                            fontSize:16,
                            fontFamily:'Open-sans-Bold',
                            color: '#2D3791',
                            marginBottom:20
                        }}>MATCH WITH</Text>  




                    {/* <FlatList
                    numColumns={2}
                    data={listItems}
                    //data
                    defined="defined"
                    in="in"
                    constructor="constructor"
                    //Item
                    Separator="Separator"
                    View="View"
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}/> */}
               {/* Product Image */}

                  <View style={{flexDirection:'row'}}>

                  <View style={{ backgroundColor:'white', width:wp(60)-10, height:hp(70)-80,marginRight:13}}>
                <View style={{alignItems:'flex-start',justifyContent:'space-around'}}>
                    <Text style={{fontSize:12,fontWeight:'700',marginBottom:15}}>YOUR ITEM</Text>
                </View>

                <View style={{ backgroundColor:'#F5F5F5', borderRadius:20, width:wp(60)-10,height:hp(70)-80, marginRight:13}} > 
                
                </View>
           </View>

           <View style={{flexDirection:'column',backgroundColor:'white', borderRadius:0, width:wp(35)-24,height:hp(70)-50 }}>
            
           <View style={{alignItems:'flex-start',justifyContent:'space-around'}}>
                    <Text style={{fontSize:12,fontWeight:'700',marginBottom:15}}>MATCH WITH</Text>
            </View>

            <ScrollView>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24
        }}>

            </View>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24
        }}>

            </View>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24}}>

            </View>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24}}>

            </View>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24}}>

            </View>
            <View style={{marginBottom:5,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        width:wp(35)-24,
        height:wp(35)-24}}>

            </View>
            </ScrollView>


            </View>  

                  </View>
         




                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        <ChatBox />
                </View>
                </View>

                <BottomNavigationBarCMP navigator={navigation}/>
            
  

              
    </>

    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 100,
      },
       
});
 
// import { StatusBar } from 'expo-status-bar';
// import React ,{useState} from 'react';
// import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
 
// import { useSafeArea } from 'react-native-safe-area-context';
// export default function clickandmatchRecommendedPage() {
// const insets = useSafeArea();
//       return (
//         <>
//          <StatusBar style='light'/>
//                 <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
//          <View style={styles.appContainer}>
//      <View style={{flexDirection:'row', justifyContent:'space-around', }}>
//            {/* title */}
//            <View style={{width:'100%',alignItems:'flex-start'}}>
//                     <Text style={{color:'#2D3791',fontWeight:'700'}}>MATCH WITH</Text>
//             </View>
//     </View>

        {/* recommadations */}
     

//      </View>
//      </>


     
//    );
  

// }

// const styles = StyleSheet.create({
//  appContainer:{
//      flex:1,
//      backgroundColor:'white',
//      padding:24,
//  },
//  dropdownView:{
//   flexDirection:'row',
//   margin:5,
//    borderColor:'#D9D9D9',
//    justifyContent:'center',
//     borderTopWidth:0.5,
//     borderBottomWidth:0.5,

        
//  },

//  item:{
//   marginRight:5,
//   marginTop:5,
//   backgroundColor:'#F5F5F5',
//   borderRadius:20,
//   width:100,
//   height:120 ,
//   justifyContent:'center',
//   alignItems:'center'
// },
// dropdown: {
//   width:'40%',
//   margin:5,


//   backgroundColor:'#FFFF',
//   alignItems:'center'
// },
// icon: {
//   marginRight: 5,
// },
// placeholderStyle: {
//   fontSize: 12,
//   fontWeight:'600',
//   paddingLeft:10,
//   paddingRight:10,
// },
// selectedTextStyle: {
//   fontSize: 16,
// },
// iconStyle: {
//   width: 20,
//   height: 20,
// },
// inputSearchStyle: {
//   height: 40,
//   fontSize: 16,
// },

// });
