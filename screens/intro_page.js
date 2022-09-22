import React, { Component } from 'react';
import bgImg from '../assets/images/intro.png';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class introPage extends React.Component {
  render() {
    const buttonClickedHandler = () => {
         this.props.navigation.navigate('Opening');
      };
    return (<>
    
        <ImageBackground source = {bgImg} style = {{flex:1   }}>
   <View style={styles.containerMain} >
            <Text style={{fontFamily: 'OpenSans-ExtraBlod',textAlign:'center',marginTop:scale(40),fontSize: scale(15),marginRight:scale(66),  marginLeft:scale(65), color:'white'}}>Hi! Let’s build your digital wardrobe </Text>

        <View style={styles.button1}>
            <TouchableOpacity 
                onPress={buttonClickedHandler}
                style={styles.roundButton1}>
                <Text style={{fontFamily: 'OpenSans-ExtraBlod', color:'white'}}>START</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>
              <Text style={{color:'white',padding:"20",fontSize:"20", textAlign:'center', bottom:10,fontFamily: 'OpenSans-Blod'}}> Have an account?  <Text style={{fontFamily:'Open-Sans-Medium', color: '#2D3791'}}
      onPress={() => Linking.openURL('###')}>SIGNIN
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
    fontSize: 18,
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
 