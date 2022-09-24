import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image } from 'react-native';
import {scale} from 'react-native-size-matters';

// images description array
const images = [
    {
        image:  require('../../assets/images/step1.png'),
        description: "Just take a picture of your clothes 📸  ",
    },

    {
        image:  require('../../assets/images/step2.png'),
        description: "Get matching suggestions with your favorite brands 👚",
    },

    {
        image:  require('../../assets/images/step3.png'),
        description: "See endless outfits for your closet 💡",
    },
 
];



const clickPhotoPage =() =>{
    const [value, setValue] = useState(1);
    const [stepDesc, setStepDesc] = useState("Just take a picture of your clothes 📸  ");


    const incrementValue = () => {
        if(value<3){

            setValue(value + 1);
        if(value+1 == 2 ) {
            setStepDesc(images[1].description);

        }
        else if( value+1 ==3){
            setStepDesc(images[2].description);
        }
        }else{
            navigation.navigate('LoginSignUP'); 
        }
    }
  
  return (
    <View style={styles.containerMain} >
        <Text style={{fontFamily: 'OpenSans', paddingLeft:10,
        marginTop:scale(40),fontSize: scale(15), color:'#008000'}}> Step <Text style={{fontSize:'20'}}>{value}</Text>
        </Text>  
        
        <Text style={{fontFamily: 'OpenSans', paddingLeft:10,
        marginTop:scale(20),    fontSize: scale(15), color:'black'}}> {stepDesc}          </Text>
        
        <Image style={{marginTop:20, resizeMode: "strech", width:385, height:429}}   source={  images[value-1].image     }  />
        
        <TouchableOpacity style={styles.touchable} onPress={incrementValue}>
        <Text style={styles.touchableText}>Next</Text>
        </TouchableOpacity>
       
    </View>
  );
}
export default clickPhotoPage;
 
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'left',
      width:"100%"
    },
    touchable: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        marginTop: 30,
        
      },
      touchableText: {
        color: 'white',
        fontSize: 20,
      },
    
     
    
});
   