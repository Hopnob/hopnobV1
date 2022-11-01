import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
    Dimensions
} from 'react-native';
import {Camera} from 'expo-camera';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function FaceScanPage({navigation}) {
  const dimensions = Dimensions.get('window');
  const DeviceWidth = dimensions.width;
  const DeviceHeight = dimensions.height;
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            //console.log(data.uri)
            setImage(data.uri)
        }
    }
    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:25,backgroundColor:'white'}}>
             

               {/* title */}
               <View style={{marginLeft:25,marginTop:15}}>
                    <View style={{flexDirection:'row',backgroundColor:'white', width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                          <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>
                        

                          <View style={{width:'50%', alignItems:'flex-end',marginTop:25}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                            <Text style={{fontSize:12,fontWeight:'700'}}> SKIP </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                  
                    </View>

            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-start'
                }}>
                <Text
                    style={{
                        color: '#2D3791',
                        fontWeight: '700',
                        fontSize: 16
                    }}>LET'S FIND THE BEST COLORS FOR YOUR SKIN TONE</Text>
            </View>
            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    marginTop: 8,
                    marginBottom: 24
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 16
                    }}>Sit back while we scan your face</Text>
            </View>

            <View style={{marginBottom:30, alignSelf:'center', width: '80%' ,height:'65%',backgroundColor:'red'}}>
                    <Camera
                            ref={ref => setCamera(ref)}
                            style={{ width:'100%',height:'100%'}}
                            type={type}
                             />
            </View>


            

            
            <View style={{backgroundColor: 'white'}}>
                      <Image style={{ alignSelf:'center',width: 50,height: 50, marginBottom:15}}
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
                        paddingVertical: 9,
                        borderRadius: 30
                    }}>
                    {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                    <TouchableOpacity onPress={() => navigation.navigate('AddPageTwo')}>

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

            {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
            {/* {image && <Image source={{uri: image}} style={{flex:1}} />} */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        alignContent: 'center',
        backgroundColor: 'white',
        padding: 24
    },
    camera: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 20
    },
     
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        bottom: 0,
        marginBottom: 15,
        position: 'absolute'
    },
    buttonContainer2: {
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        marginBottom: 28,
        bottom: 0,
        position: 'absolute'
    }
});

// import React, { Component } from 'react'; import { StyleSheet, View,
// Text,TouchableOpacity,Image } from 'react-native'; import { scale,
// verticalScale, moderateScale } from 'react-native-size-matters'; import {
// LinearGradient } from 'expo-linear-gradient'; import { useEffect, useRef,
// useState } from 'react'; import { Camera } from 'expo-camera'; import {
// shareAsync } from 'expo-sharing'; import * as MediaLibrary from
// 'expo-media-library'; import { StatusBar } from 'expo-status-bar';  export
// default class  extends React.Component {    export default function
// FaceScanPage({navigation}){     export default function FaceScanPage() {
// let cameraRef = useRef();     const [hasCameraPermission,
// setHasCameraPermission] = useState();     const [hasMediaLibraryPermission,
// setHasMediaLibraryPermission] = useState();     const [photo, setPhoto] =
// useState();     useEffect(() => {       (async () => {         const
// cameraPermission = await Camera.requestCameraPermissionsAsync();
// const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
// setHasCameraPermission(cameraPermission.status === "granted");
// setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
// })();     }, []);     if (hasCameraPermission === undefined) {       return
// <Text>Requesting permissions </Text>     } else if (!hasCameraPermission) {
// return <Text>Permission for camera not granted. Please change this in
// settings.</Text>     }     let takePic = async () => {       let options = {
// quality: 1,         base64: true,         exif: false       };       let
// newPhoto = await cameraRef.current.takePictureAsync(options);
// setPhoto(newPhoto);     };     if (photo) {       let sharePic = () => {
// shareAsync(photo.uri).then(() => {           setPhoto(undefined);         });
// };       let savePhoto = () => {
// MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
// setPhoto(undefined);         });       };       return (
// <SafeAreaView style={styles.container}>           <Image
// style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64
// }} />           <Button title="Share" onPress={sharePic} />
// {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> :
// undefined}           <Button title="Discard" onPress={() =>
// setPhoto(undefined)} />         </SafeAreaView>       );     }     return (
// <View style={styles.containerMain}>             <View
// style={{width:'100%',alignItems:'flex-start',}}>                     <Text
// style={{color:'#2D3791',fontWeight:'700',fontSize:16}}>LET'S FIND THE BEST
// COLORS FOR YOUR SKIN TONE</Text>             </View>             <View
// style={{width:'100%',alignItems:'flex-start',marginTop:8,}}>
// <Text style={{color:'black',fontWeight:'400',fontSize:16}}>Sit back while we
// scan your face</Text>             </View>             <View
// style={{marginBottom:50,paddingBottom:50, backgroundColor:'white'}}>
// <LinearGradient colors={['#2D3791', '#4453DF', ]}
// start={{x: 0, y: 0.5}}                                         end={{x: 1, y:
// 1}}                                         style={{paddingVertical:9,
// borderRadius: 30}}                                     >
// <TouchableOpacity onPress={()=> navigation.navigate('OtpVerification') }>
// <Text style={{color: '#fff', textAlign: 'center',fontSize:
// 15,fontWeight:'700'}}>Finish</Text>
// </TouchableOpacity>                                     </LinearGradient>
// </View>           </View>     ); } const styles = StyleSheet.create({
// containerMain: {     flex: 1,     backgroundColor:'white',     padding:24
// },buttonContainer: {     backgroundColor: 'white',     alignSelf: 'center',
// bottom:0,     position:'absolute',     marginBottom:30,   },buttonContainer2:
// {     backgroundColor: 'white',     alignSelf: 'flex-end',     bottom:0,
// position:'absolute',     marginBottom:41,   },   preview: {     alignSelf:
// 'stretch',     flex: 1   } });