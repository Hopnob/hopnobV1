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

export default function ProductHopnobPage({navigation}) {

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
                    <Text style={{color:'#1E1E1E', fontSize:15,fontWeight:'400'}}> Blue Blouse </Text>
            </View>
            <View style={{width:'100%',alignItems:'flex-start', marginTop:10}} >
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

                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        <ChatBox />
                </View>
                </View>

                <BottomNavigationBarCMP navigator={navigation}/>
              
    </>

    );
}

 

// import React ,{useState} from 'react';
// import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
 

// import { useSafeArea } from 'react-native-safe-area-context';
 
// {/* <View style={{paddingTop: insets.top}}>
//  </View> */}



//   const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
//   ];

  
//   export default function ProductHopnobPage() {
//     const [value, setValue] = useState(null);
//     const insets = useSafeArea();

   
      

//     // const[color,setColor] = useState('color');
//     // const[category,setCategory] = useState('category');

//     // setColor('Blue');
//     // setCategory('Blouse');

//     const[people, setPeople] = useState([
//         {image: require('../../assets/images/wardrobe/allcloth.png'), id:'1'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'7'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'8'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'9'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'10'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'11'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'12'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'13'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'15'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'16'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'17'},
//     ])
//       return (
//         <>
//         <View style={{paddingTop: insets.top}}>
//  </View>
//            <View style={styles.appContainer}>
//      <View style={{flexDirection:'row', justifyContent:'space-around', }}>
//            {/* title */}
//            <View style={{width:'100%',alignItems:'flex-start'}}>
//                     <Text style={{color:'#2D3791',fontWeight:'700'}}>WARDROBE</Text>
//             </View>
//     </View>

//         {/* recommadations */}
//         <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:12 }}>
//            {/* Product Image */}
//            <View style={{backgroundColor:'#F5F5F5', borderRadius:20, width:222, height:240,marginRight:13}}>

//            </View>

//            <View style={{flexDirection:'column', borderRadius:20, width:75,height:240 }}>
//             <ScrollView>
//             <View style={styles.recommed}>

//             </View>
//             <View style={styles.recommed}>

//             </View>
//             <View style={styles.recommed}>

//             </View>
//             <View style={styles.recommed}>

//             </View>
//             <View style={styles.recommed}>

//             </View>
//             <View style={styles.recommed}>

//             </View>
//             </ScrollView>


//             </View>

            
//         </View>



     
          
//      </View>
//         </>
      
     
//    );
  

// }

// const styles = StyleSheet.create({
//  appContainer:{
//      flex:1,
//      backgroundColor:'white',
//      padding:24,
//  },
//  recommed:{
//     marginBottom:5,
//     borderRadius:20,
//     backgroundColor:'#F5F5F5',
//     width:75,
//     height:75
//  }

// });
