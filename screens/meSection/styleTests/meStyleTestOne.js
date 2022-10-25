import React from "react";
import { useState } from 'react';
import { FlatList,Dimensions,StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import BottomNavigationBarCMP from "../../components/bottom_navbar";
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('window').width };


export default function MeStyleTestOne({navigation}){
    const insets = useSafeArea();
    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
      );
      
      const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
      );
      
      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });
      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ]);
    

    return(<>
         <View style={{paddingTop: insets.top}}>
           
        </View>
       
        <View style={{backgroundColor:'red', flex:1,width:'100%' }}>
        
        <View style={{flex:1,backgroundColor:'green',marginHorizontal:24,marginTop:12, marginBottom:70}}>
        
        <View style={{width:'100%',backgroundColor:'yellow', }}>
            <View style={{width:'100%'}}><Text style={{textAlign:'right',fontWeight:'600',fontSize:12}}>SKIP</Text></View>

            <View style={{width:'100%'}}><Text style={{textAlign:'left',fontSize:22,fontWeight:'400'}}>Brands you like</Text></View>

            <View style={{width:'100%'}}>
                <Text>SERACH BAR</Text>
            </View>
        </View>
        <View style={{width:'100%',backgroundColor:'pink', }}>
            <Text>Hello</Text>
            <TabView
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
            })}
            />
        </View>

        </View>

       
        <View style={{position:'absolute',bottom:0,width:'100%' }}>
            <BottomNavigationBarCMP navigator={navigation}/>
        </View>
        </View>
    </>
       
    )
}
const styles = StyleSheet.create({
    scene: {
      flex: 1,
   
    },
    main:{
      backgroundColor:'white',
      paddingLeft:24,
      paddingRight:24,
  },
   item:{
      marginRight:5,
      marginTop:5,
      backgroundColor:'#F5F5F5',
      borderRadius:5,
      width:100,
      height:120 ,
      justifyContent:'center',
      alignItems:'center'
  }, 
});

;