import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
 import { useEffect } from "react";
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 

  
export default function TestingPageOtp(){
   
    return (
      <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>Login</Text>
      <View style={{backgroundColor:'red', height:hp(50),width:wp(50)}}>
      <Text style={{textAlign:'center',fontSize:20}}>SSSSSSSS</Text>
          <Text style={{textAlign:'center',fontSize:hp('2%')}}>SSSSSSSS</Text>
          
      </View>

      </View>
    </View>
      
    );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
});
