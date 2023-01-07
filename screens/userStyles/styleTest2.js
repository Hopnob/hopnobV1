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

  export default function StyleTestTwo({navigation}){
     
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

                  <View style={{flexDirection:'row',backgroundColor:'white',marginTop:25, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('StyleTestOne') }>
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                    <View style={{width:'50%', alignItems:'flex-end',}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('FaceScanPage') }>
                      <Text style={{fontWeight:'700',fontFamily:'Open-sans', fontSize:12,}}> SKIP </Text>
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
                            <Image height={hp(40)} source={ require('../../assets/images/UserStyles/style2.png')} />
                        </View>

                
         
                    <View style={{marginTop:35,backgroundColor:'white',width:wp(100), position:'absolute',bottom:0,paddingHorizontal:24,paddingBottom:80 }}>

                      <View style={{ marginBottom:15,marginTop:40}}>
                      <Text style={{  fontWeight:'700', fontFamily:'Open-sans', color:'#394297',fontSize:RFValue(14.4,667),}}>ARE YOUR HIPS BIGGER THAN YOUR WAIST? </Text>
                      </View>

                      <View style={{flexDirection:'row'}}>

                     
                 <Pressable onPress={()=>navigation.navigate('FaceScanPage')} children={({ pressed }) => (
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


 