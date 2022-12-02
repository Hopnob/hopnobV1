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
import DressMeNavigation from './dressMeNavigation';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
import Image from 'react-native-scalable-image';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { TouchableOpacity } from 'react-native-gesture-handler';
const dummyArray = [
    { id: '1',description:"KEEP IT CASUAL", image: require('../../assets/images/dressMe/1.png') },
    { id: '2',description:"WORK ", image: require('../../assets/images/dressMe/2.png') },
    { id: '3',description:"PARTAY!", image: require('../../assets/images/dressMe/3.png')},
    { id: '4',description:"ETHNIC FEELS", image: require('../../assets/images/dressMe/4.png') },
    { id: '5',description:"DATE NIGHT", image: require('../../assets/images/dressMe/5.png') },
    { id: '6',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    
  ];
const WATER_IMAGE = require('../../assets/images/heart.png');
export default function DressMePage({navigation}) {
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
                <View style={{backgroundColor:'white',width:wp(50)-30,marginBottom:24, marginRight:20}}>
                    
                        <View style={{width: wp(50)-38,height:wp(50)-38,borderRadius:20,padding:10, backgroundColor:'#F5F5F5'}}>
                            <View style={{width:'100%',alignItems:'flex-end', }}>
                            <Rating
                            type='custom'
                            ratingImage={WATER_IMAGE}
                            ratingColor='#2F3A99'
                            ratingBackgroundColor='#F5F5F5'
                            ratingCount={1}
                            imageSize={30}
                            // onFinishRating={this.ratingCompleted}
                            starContainerStyle={
                                {
                                    backgroundColor:'white',width:100
                                }
                            }
                            />
                            </View>

                            <View style={{bottom:0,position:'absolute', width:'100%',alignItems:'flex-start',paddingBottom:10,paddingLeft:10 }}>
                            <Image width={16} height={16} source={require('../../assets/images/dressMe/cancel.png')} />
                            </View>
                        </View>
                    {/* <Image width={} source={item.image} /> */}
                  
                
                </View>
                </>
        );
      };
    
    const insets = useSafeArea();
    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                    <DressMeNavigation navigation={navigation}/>
                <View
                    style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',paddingTop:15
                }}>
                    
                    <View style={{marginBottom:20, flexDirection:'row',width:'100%',backgroundColor:'white',}}>
                        <View style={{width:'95%', alignItems:'flex-start'}}> 
                        <Text
                        style={{
                            fontSize:16,
                            fontFamily:'Open-sans-Bold',
                            color: '#2D3791',
                            
                        }}>TRY THESE OUTFITS TODAY!
                        </Text>  
                        </View>
                        <View style={{width:'5%', alignItems:'flex-end', backgroundColor:'white'}}>
                        <Image width={30} height={30} source={require('../../assets/images/dressMe/refresh.png')}/>
                        </View>
                    </View>
                     
                   

                    <FlatList
                    numColumns={2}
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
    //  <View style={styles.appContainer}>

    //         <View
    //             style={{
    //                 flexDirection: 'row',
    //                 justifyContent: 'space-around'
    //             }}>
    //             {/* title */}
    //             <View
    //                 style={{
    //                     width: '100%',
    //                     alignItems: 'flex-start'
    //                 }}>

    //             </View>

    //         </View>

    //         <View
    //             style={{
    //                 flexDirection: 'column',
    //                 justifyContent: 'space-around'
    //             }}>
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     justifyContent: 'space-around',
    //                     marginTop: 20,
    //                     marginBottom: 20
    //                 }}>
    //                 <TouchableOpacity onPress={() => navigation.navigate('DressMePageOutfit')}>
    //                     <View
    //                         style={{
    //                             marginRight: 20
    //                         }}>
    //                         <Image
    //                             style={{
    //                                 width: 154,
    //                                 height: 152,
    //                                 marginBottom: 8
    //                             }}
    //                             source={require('../../assets/images/dressMe/1.png')}/>
    //                         <Text
    //                             style={{
    //                                 fontSize: 12,
    //                                 fontWeight: '700'
    //                             }}>KEEP IT CASUAL</Text>
    //                     </View>
    //                 </TouchableOpacity>

    //                 <View>
    //                     <Image
    //                         style={{
    //                             width: 154,
    //                             height: 152,
    //                             marginBottom: 8
    //                         }}
    //                         source={require('../../assets/images/dressMe/2.png')}/>
    //                     <Text
    //                         style={{
    //                             fontSize: 12,
    //                             fontWeight: '700'
    //                         }}>WORK
    //                     </Text>
    //                 </View>
    //             </View>
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     justifyContent: 'space-around',
    //                     marginTop: 20,
    //                     marginBottom: 20
    //                 }}>
    //                 <View
    //                     style={{
    //                         marginRight: 20
    //                     }}>
    //                     <Image
    //                         style={{
    //                             width: 154,
    //                             height: 152,
    //                             marginBottom: 8
    //                         }}
    //                         source={require('../../assets/images/dressMe/3.png')}/>
    //                     <Text
    //                         style={{
    //                             fontSize: 12,
    //                             fontWeight: '700'
    //                         }}>PARTAY</Text>
    //                 </View>
    //                 <View>
    //                     <Image
    //                         style={{
    //                             width: 154,
    //                             height: 152,
    //                             marginBottom: 8
    //                         }}
    //                         source={require('../../assets/images/dressMe/4.png')}/>
    //                     <Text
    //                         style={{
    //                             fontSize: 12,
    //                             fontWeight: '700'
    //                         }}>ETHNIC FEELS
    //                     </Text>
    //                 </View>

    //             </View>
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     justifyContent: 'space-around',
    //                     marginTop: 20,
    //                     marginBottom: 20
    //                 }}>

    //                 <View
    //                     style={{
    //                         marginRight: 20
    //                     }}>
    //                     <Image
    //                         style={{
    //                             width: 154,
    //                             height: 152,
    //                             marginBottom: 8
    //                         }}
    //                         source={require('../../assets/images/dressMe/5.png')}/>
    //                     <Text
    //                         style={{
    //                             fontSize: 12,
    //                             fontWeight: '700'
    //                         }}>DATE NIGHT</Text>
    //                 </View>
    //                 <View>
    //                     <Image
    //                         style={{
    //                             width: 154,
    //                             height: 152,
    //                             marginBottom: 8
    //                         }}
    //                         source={require('../../assets/images/dressMe/6.png')}/>
    //                     <Text
    //                         style={{
    //                             fontSize: 12,
    //                             fontWeight: '700'
    //                         }}>JUST BRUNCHIN’
    //                     </Text>
    //                 </View>

    //             </View>
    //         </View>

    //     </View>