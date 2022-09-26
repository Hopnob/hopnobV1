import React, { Component } from 'react';
import bgImg from '../../assets/images/intro.png';
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class styleTestPage extends React.Component {
  render() {
    const buttonClickedHandler = () => {
         this.props.navigation.navigate('launchPage');
      };
      const userAuthPage = () =>{
          this.props.navigation.navigate('LoginSignUP');
      }
    return (
   <> 
   <View style={styles.containerMain} >


    <View style={{width:"100%", flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight:700, color:'black', }}>  EASY PEASY SIZE COMPARISON </Text>
         <TouchableOpacity onPress={buttonClickedHandler} style={{paddingRight:10,}}>
                <Text style={{ color:'black'}}>SKIP</Text>
            </TouchableOpacity>
    </View>
    
    <View style={{width:"100%", flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight:700, color:'black', }}>  To enjoy a personalised experience. </Text>
        
    </View>

        <View style={styles.button1}>
            <TouchableOpacity onPress={buttonClickedHandler} >
                <Text style={{fontFamily: 'OpenSans-ExtraBlod', color:'white'}}>START</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>
              <Text style={{color:'white',padding:"20",fontSize:"20", textAlign:'center', bottom:10,fontFamily: 'OpenSans-Blod'}}> Have an account? 
               <Text style={{fontFamily:'Open-Sans-Medium', color: '#2D3791'}}
                onPress={userAuthPage}  >FUCK
            </Text> 
            </Text>
            </Text>
        </View>
      </View>
</>
        
   
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
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
 