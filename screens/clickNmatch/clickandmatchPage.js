import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as ImagePicker from 'expo-image-picker';

export default function clickandmatchPage({navigation}) {
  let [fontsLoaded] = useFonts({
    'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

  });
  const [visible, setVisible] = useState(false);
  const[hasGalleryPermission,setHasCameraPermission ] = useState(null);
  const[image,setImage ] = useState(null);
  useEffect(()=>{
    (async () => {
      const galleryStatus= await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () =>{
    let result= await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      // aspect:[16,9],
      quality:1,
    });
    console.log(result);

    if(!result.cancelled){
      setImage(result.uri);
      console.log("SUCESS PICKING IMAGE");
      setVisible(!visible);
      navigation.navigate('clickandmatchRecommendedPage');
    }
  }

  if(hasGalleryPermission === false){
    return <Text>No access to internal storage</Text>
  }
          const toggleBottomNavigationView = () => {
            //Toggling the visibility state of the bottom sheet
            setVisible(!visible);
          };  
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null);
      //console.log(data.uri)
      setImage(data.uri)
    }
  }
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
             <View style={{width:'100%',alignItems:'center',marginBottom:24,marginTop:20}}>
                     <Text style={{color:'#1E1E1E',fontWeight:'400',fontFamily:'Open-sans', fontSize:20}}>Take Photo </Text>
             </View>
             

      <View style={styles.cameraContainer}>
        <Camera 
          ref={ref => setCamera(ref)} 
          style={styles.camera} 
          type={type} 
          ratio={'16:9'} 
        />
      </View>
      
      
      <View style={{ backgroundColor:'white',}}>  
      <View style={{ 
    alignSelf: 'flex-start',
    marginBottom:28,
    bottom:0,
    position:'absolute'}}>
                         <TouchableOpacity  onPress={() => pickImage()}
                        // onPress={() =>  navigation.navigate('addSection')} 
                        //  onPress={() => {
                        //     setType(
                        //         type === Camera.Constants.Type.back
                        //         ? Camera.Constants.Type.front
                        //         : Camera.Constants.Type.back
                        //     );
                        //     }
                        // }
                        >
                            <Text style={{fontSize:18, color:'#2F3A99',fontWeight:'600' }   }> Gallery</Text>
                          </TouchableOpacity>
            </View> 

            <View style={styles.buttonContainer}>
            <TouchableOpacity 
             onPress={() =>  navigation.navigate('clickandmatchRecommendedPage')} 
            >
                <Image style={{width:50,height:50}} source={ require('../../assets/images/Camera/capture.png')} />
            </TouchableOpacity>
            </View>
             
             <View style={styles.buttonContainer2}>
                         <TouchableOpacity 
                        onPress={() =>  navigation.navigate('AddPageTwo')} 
                       
                        >
                            <Text style={{fontSize:18}   }> Cancel</Text>
                          </TouchableOpacity>
            </View> 
       
             
    </View> 

     
    
      {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
      {/* {image && <Image source={{uri: image}} style={{flex:1}} />} */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'white',
    padding:24
  },
  camera: {
  
    width:'100%',
    height:'88%',
    marginBottom:24,
  },
  cameraContainer: {
    // flex:1,
    // borderWidth:3,
    // borderColor:'red',
     
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    bottom:0,
    marginBottom:15,
    position:'absolute',
  },buttonContainer2: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginBottom:28,
    bottom:0,
    position:'absolute',
  }
});
