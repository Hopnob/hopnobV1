import React,{useState,  Component } from 'react';
import { Dimensions, StyleSheet, View, Text,TouchableOpacity,ImageBackground, Image } from 'react-native';
import {scale} from 'react-native-size-matters';
//....

import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';
import Step3 from '../../assets/images/step3.png';
// 
 

 
const clickPhotoPage =() =>{
    const [value, setValue] = useState(1);
    const [stepDesc, setStepDesc] = useState("Just take a picture of your clothes 📸  ");
    
    var img = Step1;
 
    const incrementValue = () => {
        if(value<3){
            
            setValue(value + 1);

        if(value+1 == 2 ) {
            //changing the between images 
                img = Step2;
            //and tips
            setStepDesc("Get matching suggestions with your favorite brands 👚");
        }
        else if( value+1 ==3){
            const userAuthPage = () =>{
                this.props.navigation.navigate('default');
            }
        }
        }else{
            //we have to jump to login page 
            img = require('../../assets/images/step1.png');
            setStepDesc("Just take a picture of your clothes 📸  ");
            setValue(1);
        }
    }
  
  return (
    <View style={styles.containerMain} >
        <Text style={{fontFamily: 'OpenSans', paddingLeft:10,
        marginTop:scale(40),fontSize: scale(15), color:'#008000'}}> Step <Text style={{fontSize:'20'}}>{value}</Text>
        </Text>  
        

        <Text style={{fontFamily: 'OpenSans', paddingLeft:10,
        marginTop:scale(20),    fontSize: scale(15), color:'black'}}> {stepDesc}          </Text>

        <Image style={{marginTop:20, resizeMode: "strech", width:385, height:429}}   source={ img    }  />
        
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
   