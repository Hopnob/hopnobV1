import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function Cameracmp() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions </Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <View style={{padding:24, backgroundColor:'white',flex: 1}}>  
              <View style={{flex:1, marginBottom:104}}> 
                    <Camera ref={cameraRef}>
                    <StatusBar style="auto" />
                    </Camera>
              </View>    

            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePic}>
                <Image style={{width:50,height:50}} source={ require('../../assets/images/Camera/capture.png')} />
            </TouchableOpacity>
            </View>
             
            <View style={styles.buttonContainer2}>
                         <TouchableOpacity>
                            <Text style={{fontSize:20}}> Cancel</Text>
                          </TouchableOpacity>
            </View>
             
    </View> 
    
  );
}

const styles = StyleSheet.create({
   
  buttonContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    bottom:0,
    position:'absolute',
    marginBottom:30,
  },buttonContainer2: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    bottom:0,
    position:'absolute',
    marginBottom:41,
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});