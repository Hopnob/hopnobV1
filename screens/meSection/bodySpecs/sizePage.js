import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
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
export default function sizePage({navigation}){
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
        

          <ScrollView style={styles.appContainer}>

        {/* back button and skip */}

            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:5, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
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
            <View style={{  marginVertical:15,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(16,667),}}>Ht. & Wt.  </Text>
                        </View>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#E4637C', fontSize:RFValue(16,667)}}>Size </Text>
                        </View>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'32%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(16,667),}}>Type  </Text>
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
            <View style={{backgroundColor:'white',width:'100%',}}>
                    <Text style={{fontWeight:'600', paddingBottom:10,fontFamily:'Open-sans',fontSize:15,color:'black'}}>Topwear</Text>
            </View>
            {/* sizes */}
            <ScrollView style={{backgroundColor: 'white',padding:10,marginRight:10 }} horizontal={true}>
                 <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>XXS</Text>
                </View>
                <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>XS</Text>
                </View>
                <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>S</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>M</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>L</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>XL</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>XXL</Text>
                </View>
            </ScrollView>

            <View style={{backgroundColor:'white',padding:10, borderWidth:0.5,borderColor:'#2F3A99'}}>
                <View style={{ flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:20,height:20,backgroundColor:'#2F3A99',borderRadius:50}}>
                        <Text style={{fontWeight:'400',textAlign:'center', color:'#FFF',fontFamily:'Open-sans', fontSize:16,}}>i</Text>
                    </View>
                <Text style={{fontWeight:'400',padding:10,color:'#2F3A99',fontFamily:'Open-sans', fontSize:16,}}>Size Guide</Text>
                </View>
                <View style={{ borderBottomColor:'#2F3A99' ,borderBottomWidth:1, flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans',fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>UK</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>EU</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>US</Text>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>8</Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>36</Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>4</Text>
                </View>
                {/*  */}
                <View style={{ borderBottomColor:'#2F3A99' ,borderBottomWidth:1, flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans',fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>In Inches</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>Waist</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>Hips </Text>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>  </Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>   26</Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}> 36</Text>
                </View>
            </View>
            {/* subttitle */}
            <View style={{backgroundColor:'white',marginTop:10, width:'100%',}}>
                    <Text style={{fontWeight:'600', paddingBottom:10,fontFamily:'Open-sans',fontSize:15,color:'black'}}>Bottomwear</Text>
            </View>
            <ScrollView style={{backgroundColor: 'white',padding:10,marginRight:10 }} horizontal={true}>
                 <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>22</Text>
                </View>
                <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>24</Text>
                </View>
                <View style={{marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>26</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>28</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>30</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>32</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>34</Text>
                </View>
                <View style={{ marginRight:10,width:45,height:45, borderRadius:50,borderWidth:1,borderColor:'#2F3A99', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontWeight:'700',padding:10,fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>36</Text>
                </View>
            </ScrollView>

            <View style={{backgroundColor:'white',padding:10, borderWidth:0.5,borderColor:'#2F3A99'}}>
                <View style={{ flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:20,height:20,backgroundColor:'#2F3A99',borderRadius:50}}>
                        <Text style={{fontWeight:'400',textAlign:'center', color:'#FFF',fontFamily:'Open-sans', fontSize:16,}}>i</Text>
                    </View>
                <Text style={{fontWeight:'400',padding:10,color:'#2F3A99',fontFamily:'Open-sans', fontSize:16,}}>Size Guide</Text>
                </View>

                <View style={{ borderBottomColor:'#2F3A99' ,borderBottomWidth:1, flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans',fontFamily:'Open-sans',color:'#2F3A99', fontSize:12,}}>In Inches</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>Waist</Text>
                <Text style={{fontWeight:'700',padding:5,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>Hips </Text>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>  </Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}>   26</Text>
                <Text style={{fontWeight:'700',padding:8,color:'#2F3A99',fontFamily:'Open-sans', fontSize:12,}}> 36</Text>
                </View>
                
            </View>
             
                {/* Save button */}
                <TouchableOpacity onPress={()=> navigation.navigate('typePage')}>
                <View style={{backgroundColor:"#E4637C",marginVertical:50,width:wp(30), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Save</Text>
                </View>
                </TouchableOpacity>
                
                
        </ScrollView>
        
       

       
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
