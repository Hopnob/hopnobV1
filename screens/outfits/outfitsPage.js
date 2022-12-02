import React, {useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
    FlatList,
    Text,
    View,
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

const dummyArray = [
    { id: '1',description:"KEEP IT CASUAL", image: require('../../assets/images/dressMe/1.png') },
    { id: '2',description:"WORK ", image: require('../../assets/images/dressMe/2.png') },
    { id: '3',description:"PARTAY!", image: require('../../assets/images/dressMe/3.png')},
    { id: '4',description:"ETHNIC FEELS", image: require('../../assets/images/dressMe/4.png') },
    { id: '5',description:"DATE NIGHT", image: require('../../assets/images/dressMe/5.png') },
    { id: '7',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '8',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '9',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '10',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '11',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '12',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '13',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '14',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '15',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    { id: '16',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
    
  ];
  
export default function OutfitsPage({navigation}) {
    const [index, setIndex] = React.useState(0);
    const [listItems, setListItems] = useState(dummyArray);
    const ItemView = ({ item }) => {
      return (
              <>
              <View style={{backgroundColor:'#F5F5F5',borderRadius:5, justifyContent:'space-around',alignItems:'center', width:wp(33)-20,height:wp(35)-10, marginBottom:5, marginRight:5}}>
                  <TouchableOpacity>
                  {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} />   */}
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
      { key: 'first', title: 'ALL' },
      { key: 'second', title: 'WORK' },
      { key: 'third', title: 'CASUAL' },
      { key: 'forth', title: 'PARTY' },
      { key: 'fifth', title: 'OTHERS' },
    ]);
   
 
  const FirstRoute = () => (
    <>
            <Text style={{fontSize:12, fontWeight:'700',fontFamily:'Open-sans',marginTop:20}}>RECENTLY ADDED</Text>
            <View style={{backgroundColor: 'white',width:wp(100),marginTop:20,paddingBottom:40  }} >
            <FlatList
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
    </>
   
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
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'700',
                            fontFamily:'Open-sans',
                            color: '#2D3791',
                            marginBottom:10
                        }}>VIEW OUTFITS</Text> 

                    <View style={{flex:1  }}>
                                  <TabView
                                        navigationState={{ index, routes }}
                                        renderTabBar={props => (
                                            <TabBar
                                            {...props}
                                            
                                            indicatorStyle={{
                                              backgroundColor:'#E4637C'
                                              
                                            }}

                                            renderLabel = {({route, focused})=>{
                                                if(focused) { 
                                                    return <Text style={{ color: '#E4637C',fontSize:11,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>;
                                                }
                                                return <Text style={{ color: '#D9D9D9',fontSize:11,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>
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
                    

                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        <ChatBox />
                </View>
                </View>


              
                <BottomNavigationBarCMP navigator={navigation}/>
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
    borderRadius:5,
    width:100,
    height:120 ,
    justifyContent:'center',
    alignItems:'center'
}, 
});

;


// import * as React from 'react';
// import { useState } from 'react';
// import { View,FlatList, StyleSheet,Image, Dimensions, StatusBar, Text } from 'react-native';
// import { useSafeArea } from 'react-native-safe-area-context';
// import TopNavigationBarPrimary from '../components/topNavigationP';
// import BottomNavigationBarCMP from '../components/bottom_navbar';

// export default function OutfitsPage({navigation}) {
//   const insets = useSafeArea();


//   return (
//     <View style={{paddingTop: insets.top}}>
//       <View style={{backgroundColor:'white'}}>
//       <View style={{width:'100%',paddingTop:10,paddingBottom:20,  backgroundColor:'white'}}>
//             <TopNavigationBarPrimary navigator={navigation} />
//             </View>
//         <View style={{paddingLeft:24,paddingRight:24,height:'90%',paddingBottom:140 }}>
//             <View style={{backgroundColor:'white',alignItems:'flex-start',marginTop:0}}>
//                 <Text style={{color:'#2D3791',fontWeight:'700'}}>VIEW OUTFITS</Text>
//               </View> 
             
//         </View>
           
//         <View style={{position:'absolute',backgroundColor:'white', bottom:0,width:'100%'}}>
//         <BottomNavigationBarCMP navigator={navigation}/>
//         </View>
//       </View>
//     </View>

 
    

    
//   );
// }

