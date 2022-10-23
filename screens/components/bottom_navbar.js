// import * as React from 'react';
// import { View, Text, TouchableOpacity,Image } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import WardrobePage from '../wardrobe/wardrobe_page';
// import AddPageTwo from '../addSection/addPageTwo';
// import OutfitsPage from '../outfits/outfitsPage';
// import MePage from '../meSection/mePage';

// function WardrobeScreen() {
    
//   return (
//     <View style={{width:'100%',height:'100%'}}>
//     <WardrobePage />
//     </View>
    
//   );
 
// }

// function AddScreen() {
//   return (
//      <AddPageTwo />
//   );
// }

// function OutfitScreen() {
//     return (
//        <OutfitsPage />
//     );
//   }
//   function MeScreen() {
//     return (
//         <View style={{width:'100%',height:'100%'}}>
//        <MePage />
//         </View>
//     );
//   }

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
          
//             <View style={{ flex:1,height:90,borderTopRightRadius:20,borderTopLeftRadius:20,}}>
//             <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{padding:10, flex: 1,justifyContent:'space-around',alignItems:'center',backgroundColor:'white' }}
//           >
//             <View style={{alignItems:'center',padding:5, }}>
//                    <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/1.png')}/>
//                    <Text style={{color: isFocused ? '#E4637C' : '#1E1E1E'}}>{label}</Text>
//                </View>
//           </TouchableOpacity>
//             </View>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Bottomnav() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
//         <Tab.Screen options={{headerShown:false}} name="wardrobe" component={WardrobeScreen} />
//         <Tab.Screen options={{headerShown:false}} name="add" component={AddScreen} />
//         <Tab.Screen options={{headerShown:false}} name="outfits" component={OutfitScreen} />
//         <Tab.Screen options={{headerShown:false}} name="me" component={MeScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 

export default function Bottomnav ({navigation}) {
    function TopNav()  {
        return(
            <View style={{ marginTop:50, paddingTop:10,paddingBottom:10, position:'absolute', flexDirection:'row', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white', }}>
               <TouchableOpacity  onPress={() =>   navigation.navigate('DressMePage') }>
                    <View style={{alignItems:'center',padding:14,borderWidth:1,borderRadius:15 }}>
                        <Text>Dress me</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>  navigation.navigate('clickandmatchPage')}>
                        <View style={{alignItems:'center',padding:14,borderWidth:1,borderRadius:15}}>
                            <Text>Click & match</Text>
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() =>  navigation.navigate('OutfitsPage')}>
                <View style={{alignItems:'center',padding:14, borderWidth:1,borderRadius:15}}>
                    <Text>Shop</Text>
                    </View>
                </TouchableOpacity>
               </View>
        )

    }       
    return (
                <>
                    <TopNav />
                    {/* <Topnavbar/> */}
            <View style={{borderWidth:0.2, marginTop:10, paddingTop:10,paddingBottom:10, position:'absolute',bottom:0, flexDirection:'row',borderColor:' #444444', justifyContent:'space-around', alignItems:'center',width:'100%',backgroundColor:'white',borderTopRightRadius:20,borderTopLeftRadius:20 }}>
           
           <TouchableOpacity  onPress={() =>  navigation.navigate('WardrobePage')}>
                <View style={{alignItems:'center',padding:5,}}>
                    <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/1.png')}/>
                    <Text>wardrobe</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('AddPageTwo')}>
                    <View style={{alignItems:'center',padding:5,}}>
                        <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/2.png')}/>

                        <Text>add</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>  navigation.navigate('OutfitsPage')}>
            <View style={{alignItems:'center',padding:5,}}>
                <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/3.png')}/>
                <Text>outfits</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> navigation.navigate('MePage')}>
            <View style={{alignItems:'center',padding:5,}}>
                <Image style={{width:20, height:20}} source={require('./../../assets/images/bottomNavBar/4.png')}/>
                <Text>me</Text>
                </View>
            </TouchableOpacity>
               
           </View>
 
                </>

  );
}
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
       backgroundColor:'black',
    }, 
    
});
   