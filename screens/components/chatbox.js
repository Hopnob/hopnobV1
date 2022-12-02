import React ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button} from 'react-native';
import Image from 'react-native-scalable-image';
 
export default function ChatBox({navigator}){
     
    return(
        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity>
          <Image width={40} height={40} source={require('../../assets/images/ChatButton.png')}/>
          </TouchableOpacity>
        </View>
  )
}
 