import React ,{useState,useEffect} from 'react';
 
import {Dimensions,  StyleSheet, Text, View,Button,TextInput,TouchableOpacity, Pressable, } from 'react-native';
 
import Image from 'react-native-scalable-image';
 
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Shadow } from 'react-native-shadow-2';
//import basic react native components

import { widthPercentageToDP } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function ClickNMatchNavigation({navigation}){
    let [fontsLoaded] = useFonts({
      'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  
    });
  const [shouldShow, setShouldShow] = useState(false);
  var currPage = navigation.state.routeName;
   
  useEffect(() => {
    // Update the document title using the browser API
    if(currPage=='DressMePageOutfit' || currPage=='clickandmatchRecommendedPage' || currPage== 'OutfitPlayPage'){
      setShouldShow(true);
    }
 });
    if (!fontsLoaded) {
      return <AppLoading />;
    }
      return(
        <View style={{
          width:widthPercentageToDP(100),
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'white',
          paddingTop:20,
          paddingBottom:15,
          paddingHorizontal:15,
      }}>

              {shouldShow ? (
                            <View style={{backgroundColor:'white',paddingVertical:0}}>
                              <TouchableOpacity> 
                        <Image width={25} source={require('../../assets/images/backbuttondark.png')} />
                        </TouchableOpacity>
                            </View>
                      ) : null}

                  <Shadow
                    distance={10}
                    // startColor={'#E2E4E5'}
                    startColor={'#F7F7F7'}  offset={[1, 2]}
                    
                    radius={0}
                    > 
          <LinearGradient colors={[ '#FFF', '#FFF']}
                              start={{
                                  x: 0,
                                  y: 0.5
                              }}
                              end={{
                                  x: 1,
                                  y: 1
                              }}
                              style={[{
                                width:shouldShow==true?widthPercentageToDP(23):widthPercentageToDP(27),
                                paddingVertical:shouldShow==true?20:25,
                                borderRadius: 15,
                                alignItems:'center'}]}
                              >
                              {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                      <TouchableOpacity  onPress={() =>  navigation.navigate('DressMePage') }>
                      <View style={{alignItems:'center'}} >
                          <Image width={30} height={34} source={require('../../assets/images/topNavBar/dressMe.png')} />
                      <Text style={{fontWeight:'400',color:'black', fontFamily:'Open-sans', marginTop:5, fontSize:13,}}>Dress me</Text>
                      </View>
                      </TouchableOpacity>
          </LinearGradient>
          </Shadow>
                              
                              
          <Shadow
                    distance={10}
                    // startColor={'#E2E4E5'}
                    startColor={'#F7F7F7'}  offset={[1, 2]}
                    
                    radius={0}
                    > 
          <LinearGradient colors={['#2D3791', '#4453DF']}
                              start={{
                                  x: 0,
                                  y: 0.5
                              }}
                              end={{
                                  x: 1,
                                  y: 1
                              }}
                              style={[{paddingVertical:shouldShow==true?20:25,

                                width:shouldShow==true?widthPercentageToDP(23):widthPercentageToDP(27),
                                backgroundColor: 'white',
                                borderRadius: 15,}]}
                              >
                      <TouchableOpacity  onPress={() =>  navigation.navigate('clickandmatchPage') }>
                          
                      <View style={{alignItems:'center'}} >
                          <Image width={30} height={34} source={require('../../assets/images/topNavBar/camera2.png')} />
                      <Text style={{fontWeight:'700',color:'white', fontFamily:'Open-sans', marginTop:5, fontSize:13,}}>Click & match</Text>
                      </View>
                      </TouchableOpacity>
          </LinearGradient>
          </Shadow>
          <Shadow
                    distance={10}
                    // startColor={'#E2E4E5'}
                    startColor={'#F7F7F7'}  offset={[1, 2]}
                    
                    radius={0}
                    > 
          <LinearGradient colors={['#FFFF', '#FFFF']}
                              start={{
                                  x: 0,
                                  y: 0.5
                              }}
                              end={{
                                  x: 1,
                                  y: 1
                              }}
                              style={[{
                                paddingVertical:shouldShow==true?20:25,
                                width:shouldShow==true?widthPercentageToDP(23):widthPercentageToDP(27),
                                backgroundColor: 'white',
                                borderRadius: 15,
                                }]}
                              >
                              {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                              <TouchableOpacity  onPress={() =>  navigation.navigate('OutfitPlayPage') }>
                          
                      <View style={{alignItems:'center'}} >
                          <Image width={30} height={34} source={require('../../assets/images/topNavBar/outfitPlay.png')} />
                      <Text style={{fontWeight:'400',color:'black', fontFamily:'Open-sans', marginTop:5, fontSize:13,}}>Outfit Play</Text>
                      </View>
  
                      </TouchableOpacity>
          </LinearGradient>
          </Shadow>
  </View>
      )
  }
  
  const styles = StyleSheet.create({
    appContainer:{
     flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',
     justifyContent:'space-around'
    }, 
    card1: {
     
   },
   card2: {
    
   },
   card3: {
     
   },
   elevation: {
     elevation: 10,
     shadowColor: 'grey',
   },
   
   });
   

 