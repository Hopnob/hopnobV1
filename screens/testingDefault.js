
import { VideoExportPreset } from 'expo-image-picker';
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';

  
//   export default function DefaultTestingPage() {
    export default class DefaultTestingPage extends React.Component {
        render(){

            const outfitButton = () =>{
                this.props.navigation.navigate('OutfitsPage');
            }
            const wardrobeFeedButton =() => {
                this.props.navigation.navigate('WardrobePage');
            }
            const wardrobeHopnobButton = () =>{
                this.props.navigation.navigate('ProductHopnobPage');
            }
            const wardrobeConsumerButton =() => {
                this.props.navigation.navigate('ProductConsumerPage');
            }
            const defaultButton =() => {
                this.props.navigation.navigate('default');
            }
            const addButton =() => {
                this.props.navigation.navigate('addSection');
            }
            const launchButton =() =>{
                this.props.navigation.navigate('launchPage');
            }
            const introButton =() =>{
                this.props.navigation.navigate('IntroductoryPageZero');
            }
              return (
                 <View style={styles.appContainer}>
                        <Text style={{margin:10}}>Page for testing Screens</Text>
                        <View style={{padding:10, flexDirection:'column'}}>
                                <Button onPress={outfitButton} title='Outfits'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeFeedButton} title='Wardrobe Feed'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeHopnobButton} title='Wardrobe Hopnob Product'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeConsumerButton} title='Wardrobe Consumer Product'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={defaultButton} title='Default Page'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={addButton} title='Add Section'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={launchButton} title='Launch Page'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={introButton} title='Introductory Page'/>
                        </View>
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
