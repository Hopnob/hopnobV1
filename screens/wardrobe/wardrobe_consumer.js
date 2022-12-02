import React, {useState,useRef,useEffect} from 'react';
import {
    FlatList,ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import { Dropdown } from 'react-native-element-dropdown';
import { Rating, AirbnbRating } from 'react-native-ratings';

import TopNavigationBarPrimary from '../components/topNavigationP';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const WATER_IMAGE = require('../../assets/images/whiterating.png');
 
export default function ProductConsumerPagez({navigation}) {
  const [value, setValue] = useState(null);
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
    const insets = useSafeArea();
  

    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                <TopNavigationBarPrimary navigator={navigation}/>
                <View
                    style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',paddingTop:15
                }}>
                    
                    <View style={{marginBottom:20, flexDirection:'row',width:wp(100)-50,backgroundColor:'white',}}>
                        <View style={{width:wp(50)-20,justifyContent:'space-around', backgroundColor:'white', alignItems:'flex-start'}}> 
                        <Text
                        style={{
                            fontSize:16,
                            fontFamily:'Open-sans-Bold',
                            color: '#2D3791',
                            
                        }}>WARDROBE
                        </Text>  
                        </View>
                    </View>

                        <View style={{flexDirection:'row'}}>

                  <View style={{ backgroundColor:'white', width:wp(60)-10, height:hp(55)-90,marginRight:13}}>

                        <View style={{ backgroundColor:'#F5F5F5', borderRadius:20, width:wp(60)-10,height:hp(55)-90, marginRight:13}} > 
                        
                        </View>
           </View>

           <View style={{flexDirection:'column',backgroundColor:'white', borderRadius:0, width:wp(35)-24,height:hp(55)-90 }}>
            
           

                    <ScrollView>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24
                }}>

                    </View>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24
                }}>

                    </View>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24}}>

                    </View>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24}}>

                    </View>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24}}>

                    </View>
                    <View style={{marginBottom:5,
                borderRadius:20,
                backgroundColor:'#F5F5F5',
                width:wp(35)-24,
                height:wp(35)-24}}>
                    </View>
                    </ScrollView>
                    </View>  
                          </View>
                          <View style={{flexDirection:'column', justifyContent:'space-around',marginTop:18 }}>
           {/* title */}
           <View style={{width:'100%',alignItems:'flex-start'}}>
                    <Text style={{color:'#1E1E1E', fontSize:15,fontWeight:'400'}}> Tshirt Blue  </Text>
            </View>
            <View style={{width:'100%',alignItems:'flex-start', marginTop:5,marginBottom:10 }} >
            <Rating
            type='custom'
            ratingImage={WATER_IMAGE}
            ratingColor='#E4637C'
            ratingBackgroundColor='white'
            ratingCount={5}
            imageSize={30}
            // onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 0 }}
            />
        </View>
        </View>

        <View style={{flexDirection:'column',}}>
          <View style={styles.dropdownView}>
                    <Dropdown
                        style={{  width:'50%',
                        borderRightWidth:1,
                        backgroundColor:'white',
                        alignItems:'center',
                        borderColor:'#D9D9D9'
                      }}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="BRAND"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />

                  <Dropdown
                        style={{
                          width:'50%',
                        backgroundColor:'white',
                        alignItems:'center',
                        borderColor:'#D9D9D9'

                        }}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="FIT"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />

            
          </View>
          <View style={styles.dropdownView}>
                  <Dropdown
                       style={{  width:'50%',
                       borderRightWidth:1,
                       backgroundColor:'white',
                       borderColor:'#D9D9D9',
                       alignItems:'center'
                     }}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="SIZE"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />
                     <Dropdown
                        style={{  width:'50%',
                        backgroundColor:'white',
                        alignItems:'center'
                      }}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="COLOR"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />
          </View>
      </View>

                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        <ChatBox />
                </View>
                </View>

                <BottomNavigationBarCMP navigator={navigation}/>
              
    </>

    );
}
 

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 },
 dropdownView:{
  flexDirection:'row',
    marginBottom:15,
    borderColor:'#D9D9D9',
     justifyContent:'center',
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    paddingVertical:8
 },
 item:{
  marginRight:5,
  marginTop:5,
  backgroundColor:'#F5F5F5',
  borderRadius:20,
  width:100,
  height:120 ,
  justifyContent:'center',
  alignItems:'center'
},
icon: {
  marginRight: 5,
},
placeholderStyle: {
  fontSize: 12,
  fontWeight:'600',
  paddingLeft:10,
  paddingRight:10,
},
selectedTextStyle: {
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},

});
