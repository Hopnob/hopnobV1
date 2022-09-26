import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class styleTestPage extends React.Component {
  render() {
    const skipButton = () => {
         this.props.navigation.navigate('faceScan');
      };
      const userAuthPage = () =>{
          this.props.navigation.navigate('LoginSignUP');
      }
      const nextButtonHandler = () =>{
          this.props.navigation.navigate('faceScan');
      };
    return (
   <> 
   <View style={styles.containerMain} >


    <View style={{width:"100%", flex:0.04, paddingTop:10, flexDirection:'row', justifyContent: 'space-between'}}>
    <Text style={{fontWeight:700, color:'black', }}>  EASY PEASY SIZE COMPARISON </Text>
         <TouchableOpacity onPress={skipButton} style={{paddingRight:10,}}>
                <Text style={{fontWeight:400, color:'black'}}>SKIP</Text>
            </TouchableOpacity>
    </View>
    
    {/* Image */}
    <View style={{width:"100%", flex:0.8, paddingTop:10,alignItems:'center', flexDirection:'coloum'}}>

    <Text style={{fontWeight:400, color:'black', }}>  To enjoy a personalised experience. </Text>
    <Image style={{marginTop:20, width:200, height:350}}   source={  require('../../assets/images/styleTest.png')    }  />
    <Text style={{fontWeight:400, color:'black', }}>  1. Is your BUST bigger than your WAIST? </Text>
   
    <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
        <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            color:'white',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#28AB45',
            }}>
        <Text style={{color:'white',}}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#F83838',
            }}>
        <Text style={{color:'white',}}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#2B388F',
            }}>
        <Text style={{color:'white',}}>Same Size</Text>
      </TouchableOpacity>
        </View>


    <Text style={{fontWeight:400, color:'black', }}>  2.  Are your HIPS bigger than your WAIST?</Text>
   
        <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
        <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            color:'white',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#28AB45',
            }}>
        <Text style={{color:'white',}}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            color:'white',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#F83838',
            }}>
        <Text style={{color:'white',}}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={{ margin: 20,
            width: 50,
            color:'white',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#2B388F',
            }}>
        <Text style={{color:'white',}}>Same Size</Text>
      </TouchableOpacity>
        </View>

    </View>

    <View style={{width:"100%", flex:0.04, paddingTop:10, backgroundColor:'black',alignItems:'center',  }}>
    <TouchableOpacity onPress={nextButtonHandler} style={{paddingRight:10,}}>
                <Text style={{fontWeight:400,alignItems:'center', color:'white'}}>NEXT</Text>
            </TouchableOpacity>

    </View>

 



        
      </View>
</>
        
   
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor:'white'
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
 