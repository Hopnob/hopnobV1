import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import {  StyleSheet, Text, View,TouchableOpacity, Dimensions,ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class IntroductoryPageOne extends React.Component {
        render(){
            const introButtonPage =() =>{
                this.props.navigation.navigate('IntroductoryPageTwo');
            }
            const dimensions = Dimensions.get('window');
            const DeviceWidth = dimensions.width;
            const DeviceHeight = dimensions.height;

            
            console.log("Height "+DeviceHeight+" Width "+DeviceWidth);
              return (
                <>
                    <StatusBar style='dark'/>

                    <View style={styles.appContainer}>
                    {/* title */}
                    
                    <View style={{  backgroundColor:'white', marginTop:50}}>
                        <View style={{paddingLeft:25,paddingRight:25, backgroundColor:'white' }}>
                        <Text style={{fontSize:22,fontWeight:'400'}}>How Hopnob works?</Text>
                        <View style={{marginTop:30,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'30%', borderBottomWidth:1,}}>
                                <Text style={{paddingBottom:5, color:'#E4637C', fontSize:15,fontWeight:'700',}}>Click</Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                                <Text style={{paddingBottom:5,color:'#A2A2A2', fontSize:15,fontWeight:'700'}}>Match</Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                                <Text style={{paddingBottom:5, color:'#A2A2A2', fontSize:15,fontWeight:'700'}}>Explore</Text>
                        </View>
                          </View>
                        </View>

                        

                    <Image style={{marginTop:16,}} width={wp('100%')}  source={ require('../../assets/images/Introductory/banner1.png')} />
                    
                  


                    </View>
 
                    <View style={{flex:1,justifyContent:'space-around', backgroundColor:'white',marginTop:0, paddingLeft:25,paddingRight:25, }}>
                                <View style={{ justifyContent:'space-around',alignItems:'center', flexDirection:'row',width:'100%', }}>
                                                <View style={{width:'85%',  alignItems:'flex-start'}}>
                                                                <Text style={{ fontSize:20,fontWeight:'400',paddingRight:50, }}>Take a picture of your clothes & earn cashback </Text>
                                                </View>
                                                <View style={{width:'15%',  alignItems:'flex-end'}}>
                                                        <TouchableOpacity onPress={introButtonPage} >
                                                                <Image width={75} height={75} source={ require ('../../assets/images/Introductory/Next.png')}/>
                                                        </TouchableOpacity>
                                                
                                                </View>    
                                </View>
                                      
                        </View>
                   
                </View>
                </>

           );
        }
}

const styles = StyleSheet.create({
 appContainer:{
      flex:1,
     backgroundColor:'white',
//     justifyContent:'space-around',
    // alignItems:'center'
 }, 
});
