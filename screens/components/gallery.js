import React, { Component,useState,useEffect } from 'react';

import { StyleSheet, View,Button,Image, Text,TouchableOpacity,ImageBackground } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function Gallerycmp() {
   
  const[hasGalleryPermission,setHasCameraPermission ] = useState(null);
  const[image,setImage ] = useState(null);
  //permission
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
      aspect:[4,3],
      quality:1,
    });

    console.log(result);



    if(!result.cancelled){
      setImage(result.uri);
    }
  }

  if(hasGalleryPermission === false){
    return <Text>No access to internal storage</Text>
  }

  return (
    <View style={{padding:24, backgroundColor:'white',flex: 1}}>  
             <Button title='press me' onPress={() => pickImage()} style={{marginTop:30}}/>
             <View style={{padding:10, flex:1, }}>
             {image && <Image source={{uri:image}} style={{flex:1/2}}/>}
      </View>
      
    </View> 
    
  );
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
  
    },
    
    
  });