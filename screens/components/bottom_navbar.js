import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bottomnav ({navigation}) {
    function TopNav()  {
        // const navigation = useNavigation();
        return(
            <View style={{ marginTop:50, paddingTop:10,paddingBottom:10, position:'absolute', flexDirection:'row', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white', }}>
               <TouchableOpacity  onPress={() =>   navigation.navigate('DressMePage') }>
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
                <View style={{alignItems:'center',padding:14, borderWidth:1,borderRadius:15}}>
                    <Text>Shop</Text>
                    </View>
                </TouchableOpacity>
               </View>
        )
    
    }

    return (
                <>
                    <TopNav />
                
            <View style={{borderWidth:0.2, marginTop:10, paddingTop:10,paddingBottom:10, position:'absolute',bottom:0, flexDirection:'row',borderColor:' #444444', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white',borderTopRightRadius:20,borderTopLeftRadius:20 }}>
           
           <TouchableOpacity  onPress={() =>  navigation.navigate('WardrobePage')}>
                <View style={{alignItems:'center',padding:5,}}>
                    <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/1.png')}/>
                    <Text>wardrobe</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('AddPageTwo')}>
                    <View style={{alignItems:'center',padding:5,}}>
                        <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/2.png')}/>

                        <Text>add</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>  navigation.navigate('OutfitsPage')}>
            <View style={{alignItems:'center',padding:5,}}>
                <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/3.png')}/>
                <Text>outfits</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> navigation.navigate('MePage')}>
            <View style={{alignItems:'center',padding:5,}}>
                <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/4.png')}/>
                <Text>me</Text>
                </View>
            </TouchableOpacity>
               
           </View>
 
                </>

  );
}
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
       backgroundColor:'black',
    }, 
    
});
   