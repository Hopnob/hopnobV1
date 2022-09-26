import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class  extends React.Component {
  render() {
    const buttonClickedHandler = () => {
         this.props.navigation.navigate('launchPage');
      };
      

    return (
   <> 
   <View style={styles.containerMain} >


    <View style={{width:"100%", flex:0.04, paddingTop:10, flexDirection:'row', justifyContent: 'space-between'}}>
    <Text style={{fontWeight:700, color:'black', }}>  LET’S FIND THE BEST COLORS FOR YOUR SKIN TONE </Text>
         <TouchableOpacity onPress={buttonClickedHandler} style={{paddingRight:10,}}>
                <Text style={{fontWeight:400, color:'black'}}>SKIP</Text>
            </TouchableOpacity>
    </View>
    
    {/* Camera Module */}
    <View style={{width:"100%", backgroundColor:'grey', flex:0.8, paddingTop:10,alignItems:'center', flexDirection:'coloum'}}>
            <Text>CAMERA Module</Text>
     </View>

    <View style={{width:"100%", flex:0.04, paddingTop:10, backgroundColor:'black',alignItems:'center',  }}>
    <TouchableOpacity onPress={buttonClickedHandler} style={{paddingRight:10,}}>
                <Text style={{fontWeight:400,alignItems:'center', color:'white'}}>FINISH</Text>
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
 