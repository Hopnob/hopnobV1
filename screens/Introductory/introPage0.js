import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

  
//   export default function DefaultTestingPage() {
    export default class IntroductoryPageZero extends React.Component {
        render(){
            const introButtonPage =() =>{
                this.props.navigation.navigate('IntroductoryPageOne');
            }
              return (
                 <View style={styles.appContainer}>
                    {/* image background */}
                    <TouchableOpacity onPress={introButtonPage}>
                            <Image style={{width:'100%',height:'100%'}} source={ require('../../assets/images/Introductory/launchPage.png')} />
                    </TouchableOpacity>
                </View>
           );
        }
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'#D9D9D9',
 }, 
});
