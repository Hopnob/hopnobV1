
import { VideoExportPreset } from 'expo-image-picker';
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';

  
//   export default function DefaultTestingPage() {
    export default class Bottomnavbar extends React.Component {
        render(){

           
              return (
                 <View style={styles.appContainer}>
                         <Text>Hlw</Text>
                </View>
        
        
             
           );
        }
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 
});
