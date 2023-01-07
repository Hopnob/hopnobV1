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
import { ScrollView } from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
 
export default function htandwtPage({navigation}){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
      });
       
   

      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
        

          <View style={styles.appContainer}>

        {/* back button and skip */}

            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'100%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                  
            </View>
            {/* title */}
            <Text style={{fontWeight:'400',fontSize:RFValue(20),marginTop:20, fontStyle:'Open-sans'}}>
            Body Specs
            </Text>
            {/* Body Specs */}
            <View style={{  marginVertical:20,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#E4637C', fontSize:RFValue(16,667),}}>Ht. & Wt.  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(16,667)}}>Size </Text>
                        </View>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(16,667),}}>Type  </Text>
                        </View>
            </View>

            {/* subtitle */}
            <View style={{backgroundColor:'white',width:'100%',}}>
                    <Text style={{fontWeight:'700',paddingBottom:10, fontSize:RFValue(16),color:'#2D3791'}}>WHAT IS YOUR HEIGHT & WEIGHT?</Text>
                    <Text style={{fontWeight:'600', fontSize:RFValue(12),paddingRight:30, color:'black'}}>It will help us in personalizing your shopping experience.</Text>
                </View>
            {/* height */}
            <View style={{backgroundColor:'white',width:'100%',marginTop:22}}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'700',paddingBottom:10,marginRight:30, fontSize:RFValue(15),color:'black'}}>Height</Text>
                   
                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'70%', borderBottomWidth:0.5}}>
                        <TextInput />  
                        <Text style={{fontWeight:'700',paddingBottom:10, fontSize:RFValue(18),color:'black'}}>Ft.</Text>
                        <TextInput />  
                        <Text style={{fontWeight:'700',paddingBottom:10, fontSize:RFValue(18),color:'black'}}>In</Text>
                    </View>
                           
                    </View>
                   
                
                </View>
                {/* wt */}
                <View style={{backgroundColor:'white',width:'100%',marginTop:22}}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'600',paddingBottom:10,marginRight:30, fontSize:RFValue(18),color:'black'}}>Weight</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around', width:'70%', borderBottomWidth:0.5}}>
                        <TextInput />  
                        <Text style={{fontWeight:'600',paddingBottom:10, fontSize:RFValue(18),backgroundColor:'white', color:'black'}}>Kgs.</Text>
                    </View>
                    </View>
                </View>

                {/* Save button */}
                <TouchableOpacity onPress={()=> navigation.navigate('sizePage')}>
                <View style={{backgroundColor:"#E4637C",marginTop:100,width:wp(30), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Save</Text>
                </View>
                </TouchableOpacity>
                
                
        </View>
        
       

       
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
