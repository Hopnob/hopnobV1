import React, {useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
    FlatList,
    Text,
    View,
    Pressable
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
import Image from 'react-native-scalable-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopNavigationBarPrimary from '../components/topNavigationP';
const initialLayout = { width: Dimensions.get('window').width };
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import {Shadow} from 'react-native-shadow-2';



 

const topsArray = [
  {id:0,source:  require('../../assets/images/hopnobCollection/women/Tops/top0.png') },
  {id:1,source:  require('../../assets/images/hopnobCollection/women/Tops/top1.png') },
  {id:3,source:  require('../../assets/images/hopnobCollection/women/Tops/top2.png') },
  {id:4,source:  require('../../assets/images/hopnobCollection/women/Tops/top3.png') },
  {id:5,source:  require('../../assets/images/hopnobCollection/women/Tops/top4.png') },
  {id:6,source:  require('../../assets/images/hopnobCollection/women/Tops/top5.png') },
  
  {id:7,source:  require('../../assets/images/hopnobCollection/women/Tops/top6.png') },
  {id:8,source:  require('../../assets/images/hopnobCollection/women/Tops/top7.png') },
  {id:9,source:  require('../../assets/images/hopnobCollection/women/Tops/top8.png') },
  {id:10,source:  require('../../assets/images/hopnobCollection/women/Tops/top9.png') },
  {id:11,source:  require('../../assets/images/hopnobCollection/women/Tops/top10.png') },
  {id:12,source:  require('../../assets/images/hopnobCollection/women/Tops/top11.png') },
  


]
 
 
 
 

  
export default function AddHopnobPage({navigation}) {
    const [index, setIndex] = React.useState(0);
    const [listItems, setListItems] = useState(topsArray);

    const [shouldShow, setShouldShow] = useState(false);


    const ItemView = ({ item }) => {
      return (
              <>
               
              <View style={{backgroundColor:'#F5F5F5',borderRadius:20, justifyContent:'space-around',alignItems:'center', width:wp(33)-20,height:wp(35)-10, marginBottom:5, marginRight:5}}>
                  <TouchableOpacity>
                  <Image width={wp(20)-15} source={ item.source }  />   
                  {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
               {/* <Text style={{marginTop:10, fontFamily:'Open-sans-Bold',fontSize:12, backgroundColor:'white'}} >
                  {item.description} 
              </Text> */}
                 </TouchableOpacity>
              </View>  

              </>
      );
    };
    const [routes] = React.useState([
      { key: 'first', title: 'TOPS' },
      { key: 'second', title: 'T-SHIRTS' },
      { key: 'third', title: 'SHIRTS' },
      { key: 'forth', title: 'SWEATERS' },
      { key: 'fifth', title: 'JEANS' },
      
      { key: 'sixth', title: 'DRESSES' },
      { key: 'seventh', title: 'SWEATSHIRTS' },
      { key: 'eighth', title: 'JACKETS' },
      { key: 'ninth', title: 'TROUSERS' },
      { key: 'tenth', title: 'BLAZERS' },

      { key: 'eleven', title: 'SKIRTS' },
      { key: 'tweleve', title: 'SHORTS' },
      { key: 'thirteen', title: 'SHIRTS' },
      { key: 'forteen', title: 'COATS' },
     
    ]);
    
  
   
 
  const FirstRoute = () => (
    <View style={{backgroundColor: 'white',width:wp(100),marginTop:20  }} >
            <FlatList
                    onScrollBeginDrag={()=>
                    setShouldShow(false)
                    }
                     
                    
                    //on reaching top function
                    
                    numColumns={3}
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
);

          const SecondRoute = () => (
            <View style={[styles.scene, { backgroundColor: '#white', }]} >
              <Text>WORK</Text>
            </View>
          );

              const ThirdRoute = () => (
                  <View style={[styles.scene, { backgroundColor: '#white', }]} >
                  <Text>CASUAL</Text>
                </View>
              );
              const ForthRoute = () => (
                  <View style={[styles.scene, { backgroundColor: '#white', }]} >
                  <Text>PARTY</Text>
                </View>
              );

              const FifthRoute = () => (
                  <View style={[styles.scene, { backgroundColor: '#white', }]} >
                  <Text>OTHERS</Text>
                </View>

              );

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
      forth: ForthRoute,
      fifth: FifthRoute,

      sixth: FirstRoute,
      seventh: SecondRoute,
      eighth: ThirdRoute,
      ninth: ForthRoute,
      tenth: FifthRoute,
      
      eleven: FirstRoute,
      tweleve: SecondRoute,
      thirteen: ThirdRoute,
      forteen: ForthRoute,
     
      
    });
  
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
                        <View style={{width:wp(80)-20,justifyContent:'space-around', backgroundColor:'white', alignItems:'flex-start'}}> 
                        <Text
                        style={{
                            fontSize:16,
                            fontWeight:'700',
                            fontFamily:'Open-sans',
                            color: '#2D3791',
                        }}>HOPNOB IMAGE COLLECTION 
                        </Text>  
                        
                        
                        </View>
                         
                        <View style={{width:wp(20)-20,alignItems:'flex-end', backgroundColor:'white'}}>
                         
                          
                        <Image width={30}  source={require('../../assets/images/wardrobe/Arrowbutton.png')}/>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'400',
                            fontFamily:'Open-sans',
                            color: '#1E1E1E',
                        }}>Choose images similar to what you own!
                        </Text>  
                    <View style={{flex:1  }}>
                                  <TabView
                                        navigationState={{ index, routes }}
                                        renderTabBar={props => (
                                            <TabBar
                                            {...props}
                                            
                                            indicatorStyle={{
                                              backgroundColor:'#E4637C'
                                              
                                            }}
                                            tabStyle={{
                                              width:'auto'
                                            }}
                                            scrollEnabled
                                            renderLabel = {({route, focused})=>{
                                                if(focused) { 
                                                    return <Text style={{ color: '#E4637C',fontSize:12,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>;
                                                }
                                                return <Text style={{ color: '#D9D9D9',fontSize:12,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>
                                            } }
                                            style={{backgroundColor: 'white', }}
                                            />
                                        )}
                                        renderScene={renderScene}
                                        onIndexChange={setIndex}
                                        initialLayout={initialLayout}
                                        style={styles.container}
                                        />
                                  </View>

                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:0}}>
                        <ChatBox />
                </View>
                
                </View>


                <View style={{position:'absolute',alignSelf:'center',padding:20, bottom:80}}>
                        {shouldShow ?
                        (
                          <TouchableOpacity 
                          // onPress={()=> navigation.navigate('WardrobePage')}
                          >
                            <View style={{backgroundColor:'#E4637C',width:wp(50),borderRadius:30, paddingVertical:16,paddingHorizontal:33}}>
                              <Text style={{textAlign:'center',fontWeight:'700',color:'#FFFF',fontFamily:'Open-sans'}}>Add to wardrobe</Text>
                            </View>
                          </TouchableOpacity>
                        ) : null
                        
                        }
                </View>
                <Shadow
                distance={wp(50)-20}
                startColor={'#FFFF'}
                containerViewStyle={{marginVertical: 0}}
                radius={0}
                >
                <BottomNavigationBarCMP navigator={navigation}/>
        </Shadow>
               
    </>

    );
}
const styles = StyleSheet.create({
  scene: {
    backgroundColor:'green'
  },
  main:{
    backgroundColor:'white',
    paddingLeft:24,
    paddingRight:24,
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
});

;

 

// import React, { Component } from 'react';
// import { useState } from 'react';

// import { useSafeArea } from 'react-native-safe-area-context';
 
// import { StyleSheet, View, Text,TouchableOpacity,ImageBackground,Image ,FlatList,Dimensions  } from 'react-native';
// import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
 
//     export default function AddHopnobPage({navigation}) {
//       const insets = useSafeArea();
        
//         const[people, setPeople] = useState([
//             {image: require('../../assets/images/wardrobe/allcloth.png'), id:'1'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'7'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'8'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'9'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'10'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'11'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'12'},
//             {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'13'},
          
//         ])
//         const initialLayout = { width: Dimensions.get('window').width };
// const FirstRoute = () => (

//     <View style={{ flex: 1, backgroundColor: 'white', marginTop:24,marginBottom:10 }} >
//            <FlatList numColumns={3} 
//                               keyExtractor={(item) =>item.id}
//                               data = {people}
//                               renderItem = {({item}) =>(
//                                   <View style={{flex:1 , }}>
//                                       <View style={styles.item}>
//                                        <Image style ={{width:70,height:105,  padding:4}} source= {require ('../../assets/images/wardrobe/allcloth.png')} />
//                                       </View>
//                                        {/* <Image style ={styles.item} source= {item.image} /> */}
//                                   </View>
//                               )}
//             /> 
//         </View>
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
//     <Text>WORK</Text>
//   </View>
// );

//     const ThirdRoute = () => (
//         <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
//         <Text>CASUAL</Text>
//       </View>
//     );
//     const ForthRoute = () => (
//         <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
//         <Text>PARTY</Text>
//       </View>
//     );

//     const FifthRoute = () => (
//         <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
//         <Text>OTHERS</Text>
//       </View>

//     );


//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'TOPS' },
//     { key: 'second', title: 'JEANS' },
//     { key: 'third', title: 'SHIRTS' },
//     { key: 'forth', title: 'TROUSERS' },
//     { key: 'fifth', title: 'SKIRTS' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute,
//     forth: ForthRoute,
//     fifth: FifthRoute,
//   });
  
//     return ( 
//     <>
//      <View style={{paddingTop: insets.top}}>
//  </View> 
//  <View style={styles.containerMain}>
//              <View style={{ backgroundColor:'none', flexDirection:'row',justifyContent:'space-around',}}>
//                 <View style={{justifyContent:'flex-start'}}>
//                  <Text style={{textAlign:'left', color:'#2D3791',fontWeight:'700'}}> HOPNOB sss IMAGE COLLECTION</Text>
//                 </View>
//                 <View style={{justifyContent:'flex-end'}}>
//                     <Image style={{width:25,height:25}} source={ require( '../../assets/images/wardrobe/Arrowbutton.png')}/>
//                 </View>
//              </View>

//              <View style={{marginTop:6, backgroundColor:'none', flexDirection:'row',justifyContent:'space-around'}}>
//                  <Text style={{textAlign:'left',fontSize:16,fontWeight:'400'}}>Choose images similar to what you own!</Text>
//              </View>
//              <View style={{flex:1}}>
//                         <TabView
                       
//                     navigationState={{ index, routes }}
//                     renderTabBar={props => (
//                         <TabBar
//                         {...props}
//                         scrollEnabled

//                         indicatorStyle={{
//                           backgroundColor:'#E4637C',
//                           height:1
//                         }}
//                         tabStyle={{
//                             width:100
//                         }}
//                         renderLabel = {({route, focused})=>{
//                             if(focused) { 
//                                 return <Text style={{color: '#E4637C',fontSize:12,fontWeight:'700' }} >{route.title}</Text>;
//                             }
//                             return <Text style={{ color: '#D9D9D9',fontSize:12,fontWeight:'700' }} >{route.title}</Text>
//                         } }
//                         style={{backgroundColor: 'white',  }}
//                         />
//                     )}
//                     renderScene={renderScene}
//                     onIndexChange={setIndex}
//                     initialLayout={initialLayout}
//                     style={styles.container}
//                     />
//         </View>
        
//              <View style={{marginTop:6,   flexDirection:'row',justifyContent:'space-around'}}>
//                  <TouchableOpacity onPress={()=> navigation.navigate('WardrobePage')}>
//                  <View style={{backgroundColor:'#E4637C',borderRadius:30,width:181,height:50,justifyContent:'center',alignItems:'center'}}>
//                     <Text style={{color:'white', fontWeight:'700',fontSize:14}}>Add to wardrobe</Text>
//                  </View>
//                  </TouchableOpacity>


//              </View>    
             
      
//          </View>     
//     </>
        
   
//     );
 
// }
// const styles = StyleSheet.create({
//   containerMain: {
//     flex:1,
//     paddingTop:10,
//     paddingHorizontal:24,
//      backgroundColor:'white',
//   },
//   item:{
//     marginRight:5,
//     marginTop:5,
//     backgroundColor:'#F5F5F5',
//     borderRadius:20,
//     width:100,
//     height:120 ,
//     justifyContent:'center',
//     alignItems:'center'
// },
//    button1: {
//     width: '100%',
//     padding:20,
//     marginHorizontal:10,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute', //Here is the trick
//     bottom: 100, //Here is the trick
//   },
//   bottomView: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute', //Here is the trick
//     bottom: 40, //Here is the trick
//   },
//   textStyle: {
//     color: '#fff',
 
//   },    roundButton1: {
//     width: 75,
// height: 75,
// justifyContent: 'center',
// alignItems: 'center',
// padding: 10,
// borderRadius: 100,
// backgroundColor: '#2D3791',
// }
// });
 