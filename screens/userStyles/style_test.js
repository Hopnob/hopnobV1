import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions,  StyleSheet, Text, View,Button,TextInput,TouchableOpacity, Pressable, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import { useSafeArea } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Shadow} from 'react-native-shadow-2';

  export default function StyleTestOne({navigation}){

          let [fontsLoaded] = useFonts({
            'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
          });
          if (!fontsLoaded) {
            return <AppLoading />;
          }

          const insets = useSafeArea();
              return (
                <>
                 <StatusBar style='light'/>
                 <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                 <View style={styles.appContainer}>
                  <View style={{flexDirection:'row',backgroundColor:'white', width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                    {/* <View style={{ width:'50%', alignItems:'flex-start',marginTop:25}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                       <Image width={40} height={40} source={require('../../assets/images/backbutton.png')} />
                      </TouchableOpacity>
                    </View>
                   */}

                    <View style={{width:'100%', alignItems:'flex-end',marginTop:25}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                      <Text style={{fontWeight:'700', fontFamily:'Open-sans', fontSize:RFValue(12,667),}}> SKIP </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                    
                    {/* title */}
                    <View style={{marginTop:15}}>
                        <Text style={{fontWeight:'400',fontFamily:'Open-sans', fontSize:RFValue(20,667),}}>Easy size comparison</Text>
                    </View>

                    {/* tabs */}
                    <View style={{  marginTop:26,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'48%', borderBottomWidth:1,marginRight:'4%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#E4637C', fontSize:RFValue(15,667),}}>Bust  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'48%', borderBottomWidth:1,}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(15,667)}}> Hips </Text>
                        </View>
                    </View>

                   
                    <View style={{
                    height:hp(50),
                    marginTop:40,
                    alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'white'
                    }}>
                            <Image height={hp(40)} source={ require('../../assets/images/UserStyles/style1.png')} />
                        </View>

                    
                 
               
                
         
                    <View style={{marginTop:35,backgroundColor:'white',width:wp(100), position:'absolute',bottom:0,paddingHorizontal:24,paddingBottom:80 }}>

                      <View style={{ marginBottom:15,marginTop:40}}>
                      <Text style={{  fontWeight:'700', fontFamily:'Open-sans', color:'#394297',fontSize:RFValue(14.4,667),}}>IS YOUR BUST BIGGER THAN YOUR WAIST? </Text>
                      </View>

                      <View style={{flexDirection:'row'}}>

                     
                 <Pressable onPress={()=>navigation.navigate('StyleTestTwo')} children={({ pressed }) => (
                      <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[1, 2]}
                      
                      radius={0}
                      >
                          <View style={{width:wp(31)-14,borderRadius:10, marginRight:10, paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'400',fontFamily:'Open-sans' }}>Yes</Text>
                          </View>
                          </Shadow>
                      )}/>
      
                     

                      <Pressable children={({ pressed }) => (
                        <Shadow
                        distance={10}
                        // startColor={'#E2E4E5'}
                        startColor={'#F7F7F7'}  offset={[1, 2]}
                        
                        radius={0}
                        >
                          <View style={{width:wp(31)-14,borderRadius:10, marginRight:10,paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'400',fontFamily:'Open-sans' }}>No</Text>
                          </View>
                          </Shadow>

                      )}/>

                  <Pressable children={({ pressed }) => (
                    <Shadow
                    distance={10}
                    // startColor={'#E2E4E5'}
                    startColor={'#F7F7F7'}  offset={[1, 2]}
                    
                    radius={0}
                    >
                          <View style={{width:wp(31)-14,borderRadius:10, paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'400',fontFamily:'Open-sans' }}>Same Size</Text>
                          </View>
                          </Shadow>

                  )}/>

                      </View>
                     
                  
                  
{/*                       
                      <View style={{backgroundColor:'red',marginBottom:16, flexDirection:'row'}}>
                       
                       <View style={{backgroundColor:'white',width:wp(32)}}>
                       <Pressable  
                      onPress={()=> navigation.navigate('StyleTestTwo')}
                      children={({ pressed }) => (
                        <Text 
                        style={{
                        fontWeight:pressed?'700':'400',
                        fontFamily:'Open-sans',
                        shadowColor: 'black',
                        shadowOffset: { width: 1, height: 0.5 * 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 0.8 * 2,
                        elevation:2,
                        borderRadius:10, width:wp(25),marginRight:wp(6), height:43,paddingVertical:13, textAlign:'center', backgroundColor:pressed? '#E4637C' : '#FFFF', fontSize:14,  color: pressed ? '#FFFF' : '#1E1E1E'}}>
                         Yes
                        </Text>
                      )}/>
                       
                       </View>
                      
                      <View style={{backgroundColor:'white',width:wp(32)}}>
                      <Pressable
                      children={({ pressed }) => (
                        <Text 
                        style={{
                          fontFamily:'Open-sans',
                          shadowColor: 'black',
                        shadowOffset: { width: 1, height: 0.5 * 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 0.8 * 2,
                        elevation:2,

                        borderRadius:pressed?10:10, width:wp(25),height:43,paddingVertical:13,textAlign:'center', backgroundColor:pressed?'#E4637C' : '#FFFF', fontSize:14,fontWeight:pressed?'700':'400', color: pressed ? '#FFFF' : '#1E1E1E'}}>
                         No
                        </Text>
                      )}/>
                      </View>
                     

                        <View style={{backgroundColor:'white',width:wp(32)}}>
                        <Pressable
                      children={({ pressed }) => (
                        <Text style={{fontFamily:'Open-sans',
                          shadowColor: 'black',
                        shadowOffset: { width: 1, height: 0.5 * 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 0.8 * 2,
                        elevation:2,
                          borderRadius:10, width:wp(25),height:43,paddingVertical:13,textAlign:'center', backgroundColor:pressed?'#E4637C' : '#FFFF', fontSize:14,fontWeight:pressed?'700':'400', color: pressed ? '#FFFF' : '#1E1E1E'}}>
                         Same Size
                        </Text>
                      )}/>
                        </View>
                        
                        
                      </View> */}
              
                     

                    </View>
                     
                </View>
                </>
               
           );
    
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white'
 }, 
 
 btnNormal: {
  
  elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
 
},
btnPress: {
   elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
}

});
