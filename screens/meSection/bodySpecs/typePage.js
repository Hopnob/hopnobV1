import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';
import SwitchSelector from "react-native-switch-selector";

import { Pressable } from 'react-native';
import { useEffect } from 'react';
export default function typePage({navigation}){
    const insets = useSafeArea();
    const url1 = require('../../../assets/images/bodySpecs/1.png');
    const url2 = require('../../../assets/images/bodySpecs/2.png');
    const url3 = require('../../../assets/images/bodySpecs/3.png');
    const url4 = require('../../../assets/images/bodySpecs/4.png');
    const url5 = require('../../../assets/images/bodySpecs/5.png');

    const[url,setUrl]=useState(url1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     setUrl(url2)
    //   });
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
      });
      const gender = [
        { label: "Woman", value: "1" },
        { label: "Man", value: "2" },
      ];
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
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(16,667),}}>Ht. & Wt.  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(16,667)}}>Size </Text>
                        </View>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#E4637C', fontSize:RFValue(16,667),}}>Type  </Text>
                        </View>
            </View>
            <View style={{marginBottom:20,}}>
                          <SwitchSelector
                    backgroundColor='#DADDFC'
                    options={gender}
                    textColor='#2F3A99'
                    buttonColor='#2F3A99'
                    selectedColor='white'
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    />  
            </View>

            {/* subtitle */}
            <View style={{backgroundColor:'white', width:'100%',}}>
                    <Text style={{fontWeight:'700',paddingBottom:10, fontSize:RFValue(16),color:'#2D3791'}}>WHAT IS YOUR BODY TYPE?</Text>
                    <Text style={{fontWeight:'600', fontSize:RFValue(12),paddingRight:30, color:'black'}}>You can see more users with similar body types as you put more detailed information!</Text>
                </View>
             {/* buttons */}
             <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-around',alignItems:'center', width:'100%',backgroundColor:'white'}}>
                <View style={{flexDirection:'column',width:'50%',}}>
                <TouchableOpacity onPress={()=> setUrl(url1)}>
                    <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10,marginBottom:10, paddingVertical:18,alignItems:'center', backgroundColor:'white', }}>
                        <Text style={{color:'black',fontSize:12,fontWeight:'400',fontFamily:'Open-sans' }}>Inverted Triangle</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> setUrl(url2)}>
                <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10,marginBottom:10, paddingVertical:18,alignItems:'center', backgroundColor:'white', }}>
                        <Text style={{color:'black',fontSize:12,fontWeight:'400',fontFamily:'Open-sans' }}>Triangle</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setUrl(url3)}>
                <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10,marginBottom:10, paddingVertical:18,alignItems:'center', backgroundColor:'white', }}>
                        <Text style={{color:'black',fontSize:12,fontWeight:'400',fontFamily:'Open-sans' }}>Rectangle</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setUrl(url4)}>
                <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10,marginBottom:10, paddingVertical:18,alignItems:'center', backgroundColor:'white', }}>
                        <Text style={{color:'black',fontSize:12,fontWeight:'400',fontFamily:'Open-sans' }}>Round</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setUrl(url5)}>
                <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10,marginBottom:10, paddingVertical:18,alignItems:'center', backgroundColor:'white', }}>
                        <Text style={{color:'black',fontSize:12,fontWeight:'400',fontFamily:'Open-sans' }}>Hourglass</Text>
                    </View>
                </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', width:'50%',}}>
                     <Image width={wp('30')} source={url} />
                </View>



             </View>
                {/* Save button */}
                <TouchableOpacity onPress={()=>navigation.navigate('MePage')}>
                <View style={{backgroundColor:"#E4637C",marginTop:20,width:wp(30), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
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
