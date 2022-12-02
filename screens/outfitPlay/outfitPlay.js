import React, {useState,useRef,useEffect} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import OutfitPlayNavigation from './outfitPlayNavigation';

import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
import Image from 'react-native-scalable-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
const dummyArray = [
    { id: '1',description:"KEEP IT CASUAL", image: require('../../assets/images/dressMe/1.png') },
    { id: '2',description:"WORK ", image: require('../../assets/images/dressMe/2.png') },
    { id: '3',description:"PARTAY!", image: require('../../assets/images/dressMe/3.png')},
    { id: '4',description:"ETHNIC FEELS", image: require('../../assets/images/dressMe/4.png') },
    { id: '5',description:"DATE NIGHT", image: require('../../assets/images/dressMe/5.png') },
    { id: '6',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    
  ];
export default function OutfitPlayPage({navigation}) {
    const [listItems, setListItems] = useState(dummyArray);
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    const ItemView = ({ item }) => {
        return (
                <>
                 <View style={{backgroundColor:'#F5F5F5',borderRadius:5, justifyContent:'space-around',alignItems:'center', width:wp(35)-10,height:wp(45)-25, marginBottom:0, marginRight:10}}>
                   
                   <TouchableOpacity onPress={()=>navigation.navigate('ProductHopnobPage')}>
                     <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} />  
                 </TouchableOpacity>
               </View>
                </>
        );
      };
    
    const insets = useSafeArea();
    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
               <OutfitPlayNavigation navigation={navigation}/> 
                <View
                    style={{ flex:1, backgroundColor:'white',paddingTop:15
                }}>
                    <Text
                        style={{
                            fontSize:16,
                            fontFamily:'Open-sans-Bold',
                            color: '#2D3791',
                            marginBottom:25,
                            paddingLeft:25,paddingRight:25,
                        }}>UNLEASH YOUR CREATIVITY!</Text>  

                        <View style={{backgroundColor:'white',width:wp(100), marginBottom:20}}>
                        <FlatList
                    horizontal
                    data={listItems}
                    //data
                    defined="defined"
                    in="in"
                    constructor="constructor"
                    //Item
                    Separator="Separator"
                    View="View"
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}/>
                        </View>

                        <View style={{backgroundColor:'white',width:wp(100), marginBottom:34}}>
                        <FlatList
                    horizontal
                    data={listItems}
                    //data
                    defined="defined"
                    in="in"
                    constructor="constructor"
                    //Item
                    Separator="Separator"
                    View="View"
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}/>
                        </View>

                <View style={{width:wp(100),backgroundColor:'white',flex:1,justifyContent:'space-around', alignItems:'center'}} >
                    
                          <TouchableOpacity 
                          // onPress={()=> navigation.navigate('WardrobePage')}
                          >
                            <View style={{backgroundColor:'#E4637C',width:wp(50),borderRadius:30, paddingVertical:16,paddingHorizontal:33}}>
                              <Text style={{textAlign:'center',fontWeight:'700',color:'#FFFF',fontFamily:'Open-sans'}}>Add to Outfits</Text>
                            </View>
                          </TouchableOpacity>
                       
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 100,
      },
});
 