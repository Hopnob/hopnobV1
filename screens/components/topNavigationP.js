import React ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Shadow} from 'react-native-shadow-2';
import Image from 'react-native-scalable-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

export default function TopNavigationBarPrimary({navigator},{backbutton} ){
  let [fontsLoaded] = useFonts({
    'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

  });
  
  // alert(navigator.state.routeName);
  const [shouldShow, setShouldShow] = useState(false);
  var currPage = navigator.state.routeName;
   
  useEffect(() => {
    // Update the document title using the browser API
    if(currPage=='AddPageTwo' || currPage=='AddHopnobPage' || currPage== 'ProductHopnobPage' || currPage=='ProductConsumerPage'){
      setShouldShow(true);
    }
 });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
 
  return(
          <View style={{
            width:wp(100),
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            paddingTop:20,
            paddingBottom:15,
            paddingHorizontal:15,
            backgroundColor:'white'
          }}>
            
            {shouldShow ? (
              <View style={{backgroundColor:'white',paddingVertical:0}}>
                <TouchableOpacity> 
           <Image width={30} source={require('../../assets/images/backbuttondark.png')} />
           </TouchableOpacity>
              </View>
        ) : null}
          <TouchableOpacity  onPress={() =>  navigator.navigate('DressMePage') }>
                      <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[1, 2]}
                      
                      radius={0}
                      >
                  <View style={[{ 
                        width:shouldShow==true?wp(23):wp(27), paddingVertical:14,
                        backgroundColor: 'white',alignItems:'center',
                        borderRadius: 15,}]}>
                              <Text style={{fontWeight:'400',fontFamily:'Open-sans', fontSize:12,}}>Dress me</Text>
                              </View>
                      </Shadow>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>   navigator.navigate('clickandmatchPage')}>
            <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[1, 2]}
                      
                      radius={0}
                      >
            <View style={[{  width:shouldShow==true?wp(23):wp(27), paddingVertical:14,
      backgroundColor: 'white',alignItems:'center',
      borderRadius: 15,}, ]}>
            <Text style={{fontWeight:'400',fontFamily:'Open-sans',fontSize:12,}}>Click & match</Text>
            </View>
            </Shadow>

            </TouchableOpacity>

            <TouchableOpacity onPress={() =>   navigator.navigate('OutfitPlayPage')}>
            <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[1, 2]}
                      
                      radius={0}
                      >
            <View style={[{  width:shouldShow==true?wp(23):wp(27), paddingVertical:14,
      backgroundColor: 'white',alignItems:'center',
      borderRadius: 15,}, ]}>
            <Text style={{fontWeight:'400',fontFamily:'Open-sans',fontSize:12,fontWeight:'400'}}>Outfit Play</Text>
            </View>
            </Shadow>

            </TouchableOpacity>
        </View>
    
  )
}
    
const styles = StyleSheet.create({
    
    elevation: {
      elevation: 8,
      shadowColor: 'grey',
    },
});
