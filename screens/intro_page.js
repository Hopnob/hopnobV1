import React, { Component } from 'react';
import bgImg from '../assets/images/intro.png';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class introPage extends React.Component {
  render() {
    const buttonClickedHandler = () => {
         this.props.navigation.navigate('launchPage');
      };
      const userAuthPage = () =>{
          this.props.navigation.navigate('LoginSignUP');
      }
    return (<>
    
        <ImageBackground source = {bgImg} style = {{flex:1   }}>
   <View style={styles.containerMain} >
            <Text style={{textAlign:'center',marginTop:scale(40),marginRight:scale(66),  marginLeft:scale(65), color:'white'}}>Hi! Let’s build your digital wardrobe </Text>

        <View style={styles.button1}>
            <TouchableOpacity 
                onPress={buttonClickedHandler}
                style={styles.roundButton1}>
                <Text style={{ color:'white'}}>START</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>
              <Text style={{color:'white',padding:"20", textAlign:'center', bottom:10}}> Have an account? 
               <Text style={{  color: '#2D3791'}}
                onPress={userAuthPage}  >SIGNIN
            </Text> 
            </Text>
            </Text>
        </View>
      </View>

        </ImageBackground> 
    
     </>
        
        
   
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
 
  },
   button1: {
    width: '100%',
    padding:20,
    marginHorizontal:10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 100, //Here is the trick
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 40, //Here is the trick
  },
  textStyle: {
    color: '#fff',
 
  },    roundButton1: {
    width: 75,
height: 75,
justifyContent: 'center',
alignItems: 'center',
padding: 10,
borderRadius: 100,
backgroundColor: '#2D3791',
}
});
 