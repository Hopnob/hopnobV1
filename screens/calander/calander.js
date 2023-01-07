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
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { Dropdown } from 'react-native-element-dropdown';

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
export default function calanderPage({navigation}){
    const insets = useSafeArea();
    const [value, setValue] = useState(null);

    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      });
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
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>
            </View>
            {/* title */}
            <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'white', }}>
                <View style={{width:'50%'}}>
                <Text style={{fontWeight:'400',fontSize:RFValue(20), fontStyle:'Open-sans'}}>
                    Calendar
                </Text>
                </View>
                <View style={{width:'50%',alignItems:'flex-end'}}>
                <Dropdown
                          style={{  width:'100%',
                          backgroundColor:'#FFFF',
                          alignItems:'center'}}
                          placeholderStyle={{fontSize: 14,
                            color:'#2D3791',
                            fontWeight:'700',
                            fontFamily:'Open-sans',
                            paddingLeft:10,
                            paddingRight:10,}}
                          selectedTextStyle={{fontSize: 16,}}
                          inputSearchStyle={{height: 40,
                            fontSize: 16,}}
                          iconStyle={styles.iconStyle}
                          data={data}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder="December 2022"
                          searchPlaceholder="Search..."
                          value={value}
                          onChange={item => {
                          setValue(item.value);
                          }}
                      />
                </View>
            

            </View>
            {/* list */}
           
           
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>1 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>SAT</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                                <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>

                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>

                </View>
           
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                       <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                           <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>1 OCT</Text>
                           <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>SAT</Text>
                       </View>

                       <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                            <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                            <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                            </View>
                            <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                            <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                            </View>
                            <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                            <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                            </View>
                       </View>

                       <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                           <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                       </View>

               </View>
               <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>2 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>SUN</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>

                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>

                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>3 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>Mon</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>

                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>

                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>4 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>TUE</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>

                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>

                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>5 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>WED</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>

                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>

                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#D9D9D9',paddingTop:10, paddingBottom:10, width:wp(100),backgroundColor:'none'}}>
                       
                        <View style={{width:wp(15),marginRight:10, alignItems:'center',paddingTop:5}}>
                            <Text style={{fontWeight:'700',fontSize:15, fontFamily:'Open-sans'}}>6 OCT</Text>
                            <Text style={{fontWeight:'600',fontSize:12, fontFamily:'Open-sans'}}>THU</Text>
                        </View>

                        <View style={{flexDirection:'row',width:wp(35)+20,marginRight:40 }}>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5,marginRight:10, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                             <View style={{borderRadius:5, width:wp(15),height:wp(25),backgroundColor:'#F3F3F3'}} >
                             <View style={{position:'absolute',bottom:0,margin:5}}>
                                     <Text style={{color:'#B0B0B0',}}>X</Text>
                                </View>
                             </View>
                        </View>
                        <View style={{justifyContent:'space-around',width:wp(20), backgroundColor:'none', alignItems:'center',}}>
                            <Image width={20} source={require('../../assets/images/addMe/addLP2.png')}/>
                        </View>
                </View>

              
        </ScrollView>
        <View style={{backgroundColor:'white'}}>
            <BottomNavigationBarCMP navigator={navigation} />
        </View>
       

       
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
