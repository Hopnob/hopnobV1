import React ,{ useState,Component } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';
import { Dialog} from "react-native-simple-dialogs";

class FirstDialouge extends Component {
    state = {}
    openDialogOne = (show) => {
        this.setState({ showDialogOne: show });
    }
    openDialogTwo = (show) => {
        this.setState({ showDialogTwo: show });
    }
    openDialogThree = (show) => {
        this.setState({ showDialogThree: show });
    }
    openDialogFour = (show) => {
        this.setState({ showDialogFour: show });
    }
    openDialogFive = (show) => {
        this.setState({ showDialogFive: show });
    }
    openDialogSix = (show) => {
        this.setState({ showDialogSix: show });
    }
     
    render() {
        return (
            <View >
                
                {/* Button Group 1 */}
                   <View style={{flexDirection:'row',backgroundColor:'white', }}>
                        
                        <View style={{width:'33%',alignItems:'center' }}>
                        <TouchableOpacity onPress={ () => this.openDialogOne(true) } >
                        <Image width={wp(33)} source={require('../../assets/images/badges/1.png')} />
                        <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>My Dream Closet</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{width:'33%',alignItems:'center' }}>
                            <TouchableOpacity onPress={ () => this.openDialogTwo(true) }>
                            <Image width={wp(33)} source={require('../../assets/images/badges/2.png')} />
                        <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>Unleash your creativity</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{width:'33%',alignItems:'center' }}>
                            <TouchableOpacity onPress={ () => this.openDialogThree(true) }>
                            <Image width={wp(33)} source={require('../../assets/images/badges/3.png')} />
                        <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>My Fashion Log</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                
                {/* Button Group 2 */}
                <View style={{flexDirection:'row',backgroundColor:'white',marginTop:20 }}>

                    <View style={{width:'33%',alignItems:'center' }}>
                        <TouchableOpacity onPress={ () => this.openDialogFour(true) }>
                        <Image width={wp(33)} source={require('../../assets/images/badges/4.png')} />
                    <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>Persistence is Key</Text>
                        </TouchableOpacity>
                        </View>

                    <View style={{width:'33%',alignItems:'center' }}>
                    <TouchableOpacity onPress={ () => this.openDialogFive(true) }>
                        <Image width={wp(33)} source={require('../../assets/images/badges/5.png')} />
                    <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>My Personal Shop</Text>
                    </TouchableOpacity>
                        </View>

                    <View style={{width:'33%',alignItems:'center' }}>
                    <TouchableOpacity onPress={ () => this.openDialogSix(true) }>
                    <Image width={wp(33)} source={require('../../assets/images/badges/6.png')} />
                    <Text style={{fontWeight:'600',fontSize:13,paddingHorizontal:10, textAlign:'center', fontFamily:'Open-sans'}}>Falling in love with Hopnob</Text>
                    </TouchableOpacity>

                        </View>
                </View>
                {/* One */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogOne(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogOne }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/1.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 28% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:10, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>MY DREAM CLOSET</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:50,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>You have added 
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 50 Garments </Text> 
                    to your wardrobe and earned
                    coupons worth <Text style={{fontWeight:'700'}}>₹600.</Text> 
                    </Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:5,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Get to
                   <Text style={{fontWeight:'700'}}> 90 Garments </Text> 
                     in your wardrobe</Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogOne(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>

                {/* Two */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogTwo(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogTwo }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/2.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 78% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:10, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>UNLEASH YOUR CREATIVITY</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:60,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>You have created 
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 60 Outfits! </Text> 
                    Make some more!</Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:5,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Create 
                   <Text style={{fontWeight:'700'}}> 40 more Outfits </Text> 
                     from your wardrobe</Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogTwo(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>
                
                {/* Three */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogThree(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogThree }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/3.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 38% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:90, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>MY FASHION 
LOG</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:25,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>You have logged 
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 15 Daily Outfits! </Text> 
                    Continue to plan your daily outfit and keep a log</Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:5,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Create 
                   <Text style={{fontWeight:'700'}}> 40 more Outfits </Text> 
                     from your wardrobe</Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogThree(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>

                {/* Four */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogFour(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogFour }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/4.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 34% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:50, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>PERSISTENCE IS KEY</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:25,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>You have logged 
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 15 Daily Outfits! </Text> for <Text style={{fontWeight:'700', color:'#E4637C'}}> Consecutive Days </Text>
                    Keep up the good work</Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:30,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>
                        Log Daily outfit entries for  
                   <Text style={{fontWeight:'700'}}> 30 consecutive Days. </Text> </Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogFour(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>


                {/* Five */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogFive(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogFive }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/5.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 0.7% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:50, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>MY PERSONAL SHOP</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:15,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}> You have taken the style test and shopped for
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 10 items </Text> 
                    that were curated just for you!</Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:5,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Shop 
                   <Text style={{fontWeight:'700'}}> 10 more item </Text> 
                     from your personal feed.</Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogFive(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>

                {/* Six */}
                <Dialog
                    animationType="fade"
                    dialogStyle={{
                        borderRadius:20,
                    }}
                    contentStyle={
                        {
                            borderRadius:20,
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogSix(false) }
                    // visible={this.setState({ showDialog: show }) }
                    visible={ this.state.showDialogSix }

                >
                    <ImageBackground source={require('../../assets/images/badges/bg.png')}>
                    <View style={{alignItems:'center',width:wp(90), paddingVertical:10,  borderRadius:20,  }}>
                    <Image  width={wp(33)} source={require('../../assets/images/badges/6.png')} />
                    <Text  style={{fontWeight:'600',marginVertical:20, fontSize:12,paddingHorizontal:30,paddingVertical:5, backgroundColor:'#FDF0F2', borderRadius:13, textAlign:'center',color:'black', fontFamily:'Open-sans'}}>Earned by 34% of users</Text>

                    <Text style={{fontWeight:'700',marginBottom:20, fontSize:24,paddingHorizontal:50, textAlign:'center',color:'#2D3791', fontFamily:'Open-sans'}}>FALLING IN LOVE WITH HOPNOB</Text>
                        

                    <Text style={{fontWeight:'400',fontSize:14,paddingHorizontal:15,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>You have visited us everyday in the last
                    <Text style={{fontWeight:'700', color:'#E4637C'}}> 20 consecutive days! </Text> We ❤️ you too! 😘 </Text>

                    <Image  width={wp(85)} style={{marginVertical:30}} source={require('../../assets/images/badges/milestone.png')} />

                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:20,   textAlign:'center',color:'#1E1E1EB2', fontFamily:'Open-sans'}}>Next Level</Text>
                    <Text  style={{fontWeight:'400',fontSize:14,paddingHorizontal:30,   textAlign:'center',color:'black', fontFamily:'Open-sans'}}>
                    Visit us for  
                   <Text style={{fontWeight:'700'}}> 30 consecutive Days. </Text>
                   and let us shower our love on you!
                    </Text>
                {/* Save button */}
                <TouchableOpacity onPress={() => this.openDialogSix(false) } >
                <View style={{backgroundColor:"#E4637C",marginVertical:20,width:wp(40), alignSelf:'center',  alignItems:'center',borderRadius:30}}>
                <Text style={{fontWeight:'700',paddingVertical:13,  textAlign:'center', fontSize:RFValue(16), color:'white'}}>Done</Text>
                </View>
                </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </Dialog>


            </View>
        );
    }
}

export default function badgesPage({navigation},){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({

        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      });
       
   

      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>

          <View style={styles.appContainer}>

        {/* back button and skip */}

            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'100%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>
            </View>
            {/* title */}
            <View style={{flexDirection:'row',paddingVertical:15,borderBottomWidth:0.5,borderBottomColor:'#D9D9D9', width:'100%',backgroundColor:'white'}}>
            <Text style={{fontWeight:'400',width:'50%', textAlign:'left', fontSize:RFValue(20), fontStyle:'Open-sans'}}>
                My Badges
            </Text>
            <Text style={{fontWeight:'400',width:'50%', textAlign:'right', fontSize:RFValue(20), fontStyle:'Open-sans'}}>
                06/
        <Text style={{fontSize:14}}>06
            </Text>  
            </Text>
            </View>

        <View>
            {/* subtitle */}
            <View style={{backgroundColor:'white',paddingVertical:15, width:'100%',}}>
                    <Text style={{fontWeight:'700',paddingBottom:10,fontFamily:'Open-sans', fontSize:RFValue(16),color:'#2D3791'}}>ROAD TO A TRUE HOPNOBBER</Text>
                </View>

                            <FirstDialouge />   
        </View>
        
        </View>
        <View style={{width:'100%',backgroundColor:'white',position:'absolute', bottom:0}}>
        <BottomNavigationBarCMP navigator={navigation} />                
        </View>
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
