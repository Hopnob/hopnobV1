import React ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button} from 'react-native';
import Image from 'react-native-scalable-image';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
export default function TopNavigationBarSecondary({navigation}){
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
            <View style={{
                width:widthPercentageToDP(100),
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around',
                backgroundColor:'white',
                paddingVertical:20,
            }}>
                <LinearGradient colors={['#2D3791', '#4453DF']}
                                    start={{
                                        x: 0,
                                        y: 0.5
                                    }}
                                    end={{
                                        x: 1,
                                        y: 1
                                    }}
                                    style={[styles.card1, styles.elevation]}
                                    >
                                    {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                            <TouchableOpacity  onPress={() =>  navigation.navigate('DressMePage') }>

                            <View style={{alignItems:'center'}} >
                                <Image width={30} height={34} source={require('../../assets/images/topNavBar/dressMe.png')} />
                            <Text style={{fontWeight:'700',color:'white', fontFamily:'Open-sans', marginTop:5, fontSize:12,}}>Dress me</Text>
                            </View>

                            </TouchableOpacity>

                </LinearGradient>

                <LinearGradient colors={['#2D3791', '#4453DF']}
                                    start={{
                                        x: 0,
                                        y: 0.5
                                    }}
                                    end={{
                                        x: 1,
                                        y: 1
                                    }}
                                    style={[styles.card2, styles.elevation]}
                                    >
                                    {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                            <TouchableOpacity  onPress={() =>  navigation.navigate('DressMePage') }>
                                
                            <View style={{alignItems:'center'}} >
                                <Image width={30} height={34} source={require('../../assets/images/topNavBar/dressMe.png')} />
                            <Text style={{fontWeight:'700',color:'white', fontFamily:'Open-sans', marginTop:5, fontSize:12,}}>Click & match</Text>
                            </View>

                            </TouchableOpacity>

                </LinearGradient>
                <LinearGradient colors={['#2D3791', '#4453DF']}
                                    start={{
                                        x: 0,
                                        y: 0.5
                                    }}
                                    end={{
                                        x: 1,
                                        y: 1
                                    }}
                                    style={[styles.card3, styles.elevation]}
                                    >
                                    {/* <TouchableOpacity onPress={()=> navigation.navigate('AddPageTwo') }> */}
                            <TouchableOpacity  onPress={() =>  navigation.navigate('DressMePage') }>
                                
                            <View style={{alignItems:'center'}} >
                                <Image width={30} height={34} source={require('../../assets/images/topNavBar/dressMe.png')} />
                            <Text style={{fontWeight:'700',color:'white', fontFamily:'Open-sans', marginTop:5, fontSize:12,}}>Shop</Text>
                            </View>

                            </TouchableOpacity>

                </LinearGradient>
                       
               
               
        </View>
    
  )
}
    
const styles = StyleSheet.create({
    
    card1: {
      width:widthPercentageToDP(30),
      paddingVertical:25,
      borderRadius: 15,
      alignItems:'center'
    },
    card2: {
      paddingVertical:25,
      width:widthPercentageToDP(30),
      backgroundColor: 'white',
      borderRadius: 15,
    },
    card3: {
      paddingVertical:25,
      width:widthPercentageToDP(30),
      backgroundColor: 'white',
      borderRadius: 15,
    },
    elevation: {
      elevation: 10,
      shadowColor: 'grey',
    },
});
