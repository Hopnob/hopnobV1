import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Bottomnav ({navigation}) {
     function TopNavigationBarCMP(){
        return(
                     <View style={styles.TopNavigationBar}>
                        <TouchableOpacity  onPress={() =>   navigation.navigate('DressMePage') }>
                        <View style={[styles.card1, styles.elevation]}>
                        <Text style={{fontSize:12,fontWeight:'400'}}>Dress me</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>  navigation.navigate('clickandmatchPage')}>
                        <View style={[styles.card2, styles.elevation]}>
                        <Text style={{fontSize:12,fontWeight:'400'}}>Click & match</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>  navigation.navigate('OutfitsPage')}>
                        <View style={[styles.card3, styles.elevation]}>
                        <Text style={{fontSize:12,fontWeight:'400'}}>Shop</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
        )
    }
    function BottomNavigationBarCMP(){
        return(
            <View style={{borderWidth:0.2, marginTop:10, paddingTop:10,paddingBottom:10, position:'absolute',bottom:0, flexDirection:'row',borderColor:'grey', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white',borderTopRightRadius:20,borderTopLeftRadius:20 }}>
           
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
        )
    }
    return (
            <View style={{flex:1,backgroundColor:'white'}}>
                        <TopNavigationBarCMP />
                        <BottomNavigationBarCMP />
            </View>
  );
}
const styles = StyleSheet.create({
    TopNavigationBar: {
      top:50,
      position:'absolute',
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },  
      card1: {
        paddingHorizontal:24,paddingVertical:14,
        backgroundColor: 'white',
        borderRadius: 15,
      },
      card2: {
        paddingHorizontal:10,paddingVertical:14,
        backgroundColor: 'white',
        borderRadius: 15,
      },
      card3: {
        paddingHorizontal:35,paddingVertical:14,
        backgroundColor: 'white',
        borderRadius: 15,
      },
      elevation: {
        elevation: 20,
        shadowColor: 'grey',
      },
});
   