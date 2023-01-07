import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BottomNavigationBarCMP from '../../components/bottom_navbar';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';
import SwitchSelector from "react-native-switch-selector";
import { Pressable } from 'react-native';

import ScrollPicker from 'react-native-wheel-scrollview-picker';

 
export default function StyleTestTwoPage({navigation}){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({
        
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      const gender = [
        { label: "Male", value: "1" },
        { label: "Female", value: "2" },
        { label: "Both", value: "3" }
      
      ];

      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
       
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}>

        </View>
        

          <View style={styles.appContainer}>
        {/* back button and skip */}
            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                    <View style={{width:'50%', alignItems:'flex-end',}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('') }>
                      <Text style={{fontWeight:'700',fontFamily:'Open-sans', fontSize:12,}}> SKIP </Text>
                      </TouchableOpacity>
                    </View>
            </View>
            {/* title */}
            <Text style={{fontWeight:'400',fontSize:RFValue(22),marginTop:20, fontStyle:'Open-sans'}}>
            Sizes you wear
            </Text>

                     
                     


            {/* tabs */}
            <View style={{  marginVertical:20,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>BRANDS  </Text>
                        </View>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#E4637C', fontSize:RFValue(12,667)}}>STYLE </Text>
                        </View>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>LIKES  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>DISLIKES </Text>
                        </View>
            </View>

            <View>

            <View style ={{backgroundColor:'red',}}>
                <Text>hello</Text>
                <ScrollPicker
                  dataSource={[
                       'a',
                       'b',
                       'c',
                       'd',
                  ]}
                  selectedIndex={1}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      //
                  }}
                  wrapperHeight={180}
                  wrapperWidth={150}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={60}
                  highlightColor={'#d8d8d8'}
                  highlightBorderWidth={2}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                />
            </View>
           

          {/* <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                      marginTop:17,
                      marginBottom:25
                  }}>WE ARE SHOPPING FOR</Text> 
                    

                        <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                      marginTop:17,
                      marginBottom:25
                  }}>I USUALLY SHOP FOR</Text>  */}


                 
        </View>

                <View style={{width:wp(100),padding:20,backgroundColor:'white',flexDirection:'row', position:'absolute',bottom:10}}>
                      <View style={{width:'50%',justifyContent:'space-around'}}>
                        <Text style={{fontSize:RFValue(24),fontWeight:'400',fontFamily:'Open-sans'}} >02/<Text style={{fontSize:RFValue(12),fontWeight:'400',fontFamily:'Open-sans'}}>2</Text> </Text> 
                      </View>
                      <View style={{width:'50%',alignItems:'flex-end', justifyContent:'space-around'}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('LikesPage')}>
                              <Image width={60} source={require('../../../assets/images/Introductory/Next.png')} />
                          </TouchableOpacity>
                      </View>
                  </View>
        </View>

        <View style={{backgroundColor:'white',width:wp(100)}}>
        <BottomNavigationBarCMP navigator={navigation}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
