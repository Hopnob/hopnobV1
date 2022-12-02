import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import {getToken} from '../userAuth/otpVerification';
 

 export default function IntroductoryThree({navigation}){
    const dimensions = Dimensions.get('window');
    const DeviceWidth = dimensions.width;
    const DeviceHeight = dimensions.height;
        const [accessToken,setAccessToken] = useState('');
        useEffect(()=>{
            getToken().then(token=> 
        setAccessToken(token)   
        )} ,[])
    function introButtonPage(){
        if(accessToken!=null) {
                navigation.navigate('StyleTestOne')
        }  else {
            navigation.navigate('PhoneNumberPage')
        }
    }
      return (
         <View style={styles.appContainer}>
            {/* title */}
            <View style={{paddingLeft:25,marginTop:50}}>
                <Text style={{fontSize:22,fontWeight:'400'}}> How Hopnob works?</Text>
            </View>

            {/* tabs */}
            <View style={{paddingLeft:25,marginRight:25, marginTop:30,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'30%', borderBottomWidth:1,}}>
                        <Text style={{paddingBottom:5,color:'#E4637C', fontSize:15,fontWeight:'700',}}> Click</Text>
                </View>
                <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                        <Text style={{paddingBottom:5,color:'#E4637C', fontSize:15,fontWeight:'700'}}> Match</Text>
                </View>
                <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                        <Text style={{paddingBottom:5,color:'#E4637C', fontSize:15,fontWeight:'700'}}> Explore</Text>
                </View>
            </View>



            {/* image background */}
            <Image style={{marginTop:16}} width={Dimensions.get('window').width} source={ require('../../assets/images/Introductory/banner3.png')} />



            <View style={{width:DeviceWidth,backgroundColor:'white',paddingTop:40, paddingLeft:25,paddingRight:25,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{width:DeviceWidth*0.85, backgroundColor:'white', alignItems:'flex-start'}}>
                                <Text style={{fontSize:20,fontWeight:'400',paddingRight:50,backgroundColor:'white' }}>See endless outfits for your closet</Text>
                    </View>
                    <View style={{width:DeviceWidth*0.15, backgroundColor:'white', alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={introButtonPage} >
                                <Image width={75} height={75} source={ require ('../../assets/images/Introductory/Next.png')}/>
                        </TouchableOpacity>
            </View>
                    
            </View>


        </View>
   );
 }

   

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
 }, 
});
