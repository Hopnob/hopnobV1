import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
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

 
export default function LikesPage({navigation}){
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
            Tell us your likes
            </Text>

                     
                     


            {/* tabs */}
            <View style={{  marginVertical:20,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>BRANDS  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>STYLE </Text>
                        </View>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#E4637C', fontSize:RFValue(12,667),}}>LIKES  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>DISLIKES </Text>
                        </View>
            </View>

            <View>

            <Text
             style={{
                 fontSize:16,
                 fontWeight:'700',
                 fontFamily:'Open-sans',
                 color: '#2D3791',
                 marginBottom:25
             }}>WHICH FIT & DESIGN DO YOU LIKE</Text>
           
           <ScrollView style={{backgroundColor:'white',marginBottom:120}}>
            <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/straight.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/aline.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/slim.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),paddingBottom:50, backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/shiny.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
             
           </View>
                <View style={{width:'100%' ,alignItems:'flex-end', position:'absolute',bottom:60}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('DislikesOnePage')}>
                    <Image width={50} source={require('../../../assets/images/Introductory/Next.png')} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
         

                 

                 
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
