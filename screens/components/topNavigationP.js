import React ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function TopNavigationBarPrimary({navigator}){
  return(
      <View style={styles.TopNavigationBar}>
          <TouchableOpacity  onPress={() =>  navigator.navigate('DressMePage') }>
            <View style={[styles.card1, styles.elevation]}>
            <Text style={{fontSize:12,fontWeight:'400'}}>Dress me</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>   navigator.navigate('clickandmatchPage')}>
            <View style={[styles.card2, styles.elevation]}>
            <Text style={{fontSize:12,fontWeight:'400'}}>Click & match</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>   navigator.navigate('OutfitsPage')}>
            <View style={[styles.card3, styles.elevation]}>
            <Text style={{fontSize:12,fontWeight:'400'}}>Shop</Text>
            </View>
            </TouchableOpacity>
        </View>
    
  )
}
    
const styles = StyleSheet.create({
 TopNavigationBar: {
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
      elevation: 40,
      shadowColor: 'grey',
    },
});
