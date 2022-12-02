import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions,  StyleSheet, Text, View,Button,TextInput,TouchableOpacity, Pressable, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import { useSafeArea } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Camera, CameraType } from 'expo-camera';
import {LinearGradient} from 'expo-linear-gradient';

  export default function FaceScanPage({navigation}){

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    
        let [fontsLoaded] = useFonts({
                'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
            });
            if (!fontsLoaded) {
                return <AppLoading />;
            }

         if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
          <View style={{flex: 1,
            justifyContent: 'center',}}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }
          const insets = useSafeArea();

              return (
                <>
                 <StatusBar style='light'/>
                 <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                 <View style={styles.appContainer}>
                  <View style={{flexDirection:'row',backgroundColor:'white',marginTop:25, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                    <View style={{width:'50%', alignItems:'flex-end',}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('FaceScanPage') }>
                      <Text style={{fontWeight:'700', fontFamily:'Open-sans', fontSize:12,}}> SKIP </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                    
                    {/* title */}
                    <View style={{marginTop:15}}>
                      <Text style={{fontWeight:'700', fontFamily:'Open-sans', color:'#394297',fontSize:16,}}>LET'S FIND THE BEST COLORS FOR YOUR SKIN TONE </Text>
                      <Text style={{fontWeight:'400', marginTop:10,marginBottom:24, fontFamily:'Open-sans', color:'#1E1E1E',fontSize:16,fontWeight:'400'}}>Sit back while we scan your face </Text>
                    </View>
                    
                    <View style={{backgroundColor:'red',flex:1}}>
                    <Camera 
                    ratio={'16:9'} 
                    style={{flex:1,  backgroundColor:'white',paddingTop:10,
                     }} type={CameraType.front}>
                    <View style={{ flex:1}}>
                    
                    </View>
                </Camera>
                    </View>
                   

                <View style={{backgroundColor: 'white',paddingTop:10,width:wp(100),paddingHorizontal:24, position:'absolute',bottom:0,paddingBottom:44}}>
                      <Image width={60} height={60} style={{ alignSelf:'center',  marginBottom:15}}
                          source={require('../../assets/images/Camera/capture.png')}/>
                <LinearGradient
                    colors={['#2D3791', '#4453DF']}
                    start={{
                        x: 0,
                        y: 0.5
                    }}
                    end={{
                        x: 1,
                        y: 1
                    }}
                    style={{
                        paddingVertical: 12,
                        borderRadius: 30
                    }}>
                    {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                    <TouchableOpacity onPress={() => navigation.navigate('DressMeZero')}>

                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: '700'
                            }}>Finish</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

                     
                </View>
                </>
               
           );
    
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white'
 }, 
 
 btnNormal: {
  
  elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
 
},
btnPress: {
   elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
}

});
 
 
// import React, {useState, useEffect} from 'react';
// import {StyleSheet,Text,View,TouchableOpacity,Image,Dimensions} from 'react-native';
// import {Camera} from 'expo-camera';
// import {LinearGradient} from 'expo-linear-gradient';

// export default function FaceScanPage({navigation}) {
//   const dimensions = Dimensions.get('window');
//   const DeviceWidth = dimensions.width;
//   const DeviceHeight = dimensions.height;

//     const [image, setImage] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.front);
//     useEffect(() => {
//         (async () => {
//             const {status} = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);
//     const takePicture = async () => {
//         if (camera) {
//             const data = await camera.takePictureAsync(null);
//             //console.log(data.uri)
//             setImage(data.uri)
//         }
//     }
//     if (hasPermission === null) {
//         return <View/>;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:25,backgroundColor:'white'}}>
             

//                {/* title */}
//                <View style={{marginLeft:25,marginTop:15}}>
//                     <View style={{flexDirection:'row',backgroundColor:'white', width:'100%',alignItems:'center', justifyContent:'space-around'}}>
//                           <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
//                             <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
//                             <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
//                             </TouchableOpacity>
//                           </View>
                        

//                           <View style={{width:'50%', alignItems:'flex-end',marginTop:25}}>
//                             <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
//                             <Text style={{fontSize:12,}}> SKIP </Text>
//                             </TouchableOpacity>
//                           </View>
//                         </View>
                  
//                     </View>

//             <View
//                 style={{
//                     width: '100%',
//                     alignItems: 'flex-start'
//                 }}>
//                 <Text
//                     style={{
//                         color: '#2D3791',
//                         fontWeight: '700',
//                         fontSize: 16
//                     }}>LET'S FIND THE BEST COLORS FOR YOUR SKIN TONE</Text>
//             </View>
//             <View
//                 style={{
//                     width: '100%',
//                     alignItems: 'flex-start',
//                     marginTop: 8,
//                     marginBottom: 24
//                 }}>
//                 <Text
//                     style={{
//                         color: 'black',
//                         fontWeight: '400',
//                         fontSize: 16
//                     }}>Sit back while we scan your face</Text>
//             </View>

//             <View style={{marginBottom:30, alignSelf:'center', width: '80%' ,height:'65%',backgroundColor:'red'}}>
//                     <Camera
//                             ref={ref => setCamera(ref)}
//                             style={{ width:'100%',height:'100%'}}
//                             type={type}
//                              />
//             </View>


            

            

//             {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
//             {/* {image && <Image source={{uri: image}} style={{flex:1}} />} */}
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         marginTop: 20,
//         alignContent: 'center',
//         backgroundColor: 'white',
//         padding: 24
//     },
//     camera: {
//         flex: 1,
//         aspectRatio: 1,
//         borderRadius: 20
//     },
     
//     button: {
//         flex: 0.1,
//         alignSelf: 'flex-end',
//         alignItems: 'center'
//     },
//     buttonContainer: {
//         backgroundColor: 'white',
//         alignSelf: 'center',
//         bottom: 0,
//         marginBottom: 15,
//         position: 'absolute'
//     },
//     buttonContainer2: {
//         backgroundColor: 'white',
//         alignSelf: 'flex-end',
//         marginBottom: 28,
//         bottom: 0,
//         position: 'absolute'
//     }
// });
 