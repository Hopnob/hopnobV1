import React ,{ useState, } from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import Image from 'react-native-scalable-image';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddCollections from '../components/AddCollections';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
export default function MePage({navigation}){
    const insets = useSafeArea();
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
        <ImageBackground style={{justifyContent:'space-around', alignItems:'center',resizeMode: 'stretch',}} source={require('../../assets/images/mePage/backgroundImg.jpg')}>
            <View style={{marginTop:22, marginBottom:50,flexDirection:'row', width:'100%',}}>  
                    <View style={{alignItems:'center',width:wp(100),justifyContent:'space-around'  }}>
                    {/* Settings Button */}
                    {/* <View style={{alignItems:'flex-end',position:'absolute', width:wp(100),paddingRight:24,paddingTop:10, }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('MeSettingsPage')  } >
                        <Image width={20} source={require('../../assets/images/mePage/settings.png')}/>
                    </TouchableOpacity>
                    </View>     */}

                    <ImageBackground style={{width:84,height:84}} source={require('../../assets/images/mePage/profilePic.png')}>
                        <Image width={20} style={{width:19,height:19,alignSelf:'flex-end',position:'absolute',bottom:0}} source={require('../../assets/images/mePage/pencil.png')}/>
                    </ImageBackground>
                    <Text style={{marginTop:10, color:'white',fontSize:22, fontWeight:'700',fontFamily:'Open-sans'}}>RIYA ADAVANI</Text>
                    </View>
                 
                        
            </View>

            <View style={{flexDirection:'row',position:'absolute',flex:1,bottom:-15, 
            paddingVertical:0,paddingTop:5, height:60,borderRadius:10, alignSelf:'center', width:wp(80), backgroundColor:'white'}}>
                <View style={{flex:1,paddingVertical:10, backgroundColor:'white',}}>
                    <View style={{flex:1,alignItems:'center',borderRightWidth:1,}}>
                    <Text style={{paddingLeft:0, color:'#E4637C',textAlign:'center', fontSize:21,
                     fontWeight:'700',fontFamily:'Open-sans'} }>90 
                    <Text style={{fontWeight:'600',fontFamily:'Open-sans',color:'black',textAlign:'center', fontSize:16,  fontFamily:'Open-sans',paddingRight:0, } }> Cloths</Text>
                     </Text>
                    </View>
                </View>

                <View style={{flex:1,paddingVertical:10, backgroundColor:'white',}}>
                    <View style={{flex:1, alignItems:'center',}}>
                    <Text style={{paddingLeft:0, color:'#E4637C',textAlign:'center', fontSize:21,
                     fontWeight:'700',fontFamily:'Open-sans'} }>90 
                    <Text style={{fontWeight:'600',fontFamily:'Open-sans',color:'black',textAlign:'center', fontSize:16,  fontFamily:'Open-sans',paddingRight:0, } }> Outfits</Text>
                     </Text>
                    </View>
                </View>
           

            </View>

        </ImageBackground>

          <View style={styles.appContainer}>
                {/* button */}

                <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:30,borderColor:'#313679;', paddingBottom:20,borderBottomWidth:1,}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MyStats')  }>
                    <View style={{ borderColor:'#2D3791',borderWidth:1,borderRadius:20,width:wp(42),height:50,alignItems:'center',justifyContent:'space-around'}}>
                            <Text style={{fontSize:RFValue(16), fontWeight:'700',fontFamily:'Open-sans', color:'#2D3791'}} >My stats</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('MyStats')  }>

                    <View style={{marginLeft:12, borderColor:'#2D3791',borderWidth:1,borderRadius:20,width:wp(42),height:50,alignItems:'center',justifyContent:'space-around'}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:RFValue(16), fontWeight:'700',fontFamily:'Open-sans', color:'#2D3791'}}>My calendar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                    
                </View>
                    
            <View style={{flex:1, backgroundColor:'white'}}>
           

            
            {/* Style Test */}
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around',alignItems:'center',width:'100%'}}>
              
               <View style={{flexDirection:'row',backgroundColor:'white',paddingVertical:10, alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/6.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Style Test</Text>
                </TouchableOpacity>
                </View>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            
            </View>
          
                    {/* Badges */}
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/3.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Badges</Text>
                </TouchableOpacity>
                </View>

                
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>  
            {/* Body Specs */}
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/5.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Body Specs</Text>
                </TouchableOpacity>
                </View>
            </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
                        {/* Visit our insta */}
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/7.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Visit our Insta</Text>
                </TouchableOpacity>
                </View>
                 </View>
 
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            {/* Chat with us */}
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/8.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Chat with us</Text>
                </TouchableOpacity>
                </View>
                 </View>

             
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            {/* Edit Profile */}

            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>

            <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/settings/1.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Edit Profile</Text>
                </TouchableOpacity>
                </View>
                 </View>
 
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
                    {/* Cloths upload manual */}
                    <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>

                    <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/settings/3.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Clothes Upload Manual</Text>
                </TouchableOpacity>
                </View>
                 </View>

             
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
                    {/* FA&Q's */}
                    <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>

                    <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/settings/4.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>FAQ</Text>
                </TouchableOpacity>
                </View>
                 </View>
 
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
                        {/* Logout */}
                        <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>

                        <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <View style={{width:'15%'}}>
                <Image width={25} source={ require('../../assets/images/mePage/settings/5.png')}/>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MeStyleTestOne') }>
                <Text style={{fontSize:RFValue(15),fontWeight:'600',fontFamily:'Open-sans', backgroundColor:'white'}}>Logout</Text>
                </TouchableOpacity>
                </View>
                 </View>

                 
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image width={10} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            </View>
        
        </View>

        <View style={{backgroundColor:'white',
        width:wp(100)}}>
        <BottomNavigationBarCMP navigator={navigation}/>
        </View>
        </>

      
    )
}



const styles = StyleSheet.create({
 appContainer:{
    flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',
 },  
});

// import React  from 'react';
// import { StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
// import { useSafeArea } from 'react-native-safe-area-context';
// import BottomNavigationBarCMP from '../components/bottom_navbar';
// export default function MePage( {navigation} ) {
//     const insets = useSafeArea();
//       return (
//         <>
//         <View style={{paddingTop: insets.top}}>

//         </View>
            
        
 
//   <View style={styles.appContainer}>
        


//         {/* list */}
//         <View style={{ flexDirection:'column',justifyContent:'space-around',paddingTop:25,}}>

            
//         </View>
         
//      </View>

//      <View style={{position:'absolute',backgroundColor:'white', bottom:0,width:'100%'}}>
//         <BottomNavigationBarCMP navigator={navigation}/>
//         </View>

//         </>
       


     
//    );
  

// }

// const styles = StyleSheet.create({
//  appContainer:{
//     flex: 1,
//     backgroundColor: "white",
//     paddingLeft:24,
//     paddingRight:24,
//     paddingBottom:85,
//     marginBottom:75,
//  }, 

// });

