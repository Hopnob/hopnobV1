import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Topnavigation ({navigation}) {
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
    
const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 
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
