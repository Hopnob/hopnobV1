import React  from 'react';
import { StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
 
export default function MePage( {navigation} ) {
    const insets = useSafeArea();
      return (
        <>
        <View style={{paddingTop: insets.top}}>
        <ImageBackground style={{justifyContent:'space-around', alignItems:'center',resizeMode: 'stretch',}} source={require('../../assets/images/mePage/backgroundImg.jpg')}>
            <View style={{marginTop:22, marginBottom:50,flexDirection:'row', width:'100%',}}>  
                    <View style={{alignItems:'center',width:'98%',backgroundColor:'none' }}>
                    <ImageBackground style={{width:84,height:84}} source={require('../../assets/images/mePage/profilePic.png')}>
                        <Image style={{width:19,height:19,alignSelf:'flex-end',position:'absolute',bottom:0}} source={require('../../assets/images/mePage/pencil.png')}/>
                    </ImageBackground>
                    <Text style={{marginTop:10, color:'white',fontSize:22, fontWeight:'700'}}>RIYA ADAVANI</Text>
                    </View>
                    <View style={{alignItems:'flex-end',width:'1%' }}>
                        <TouchableOpacity onPress={()=> navigation.navigate('MeSettingsPage')  } >
                        <Image style={{width:20,height:21}} source={require('../../assets/images/mePage/settings.png')}/>
                        </TouchableOpacity>
                    </View>                

            </View>
            <View style={{   elevation: 3, flexDirection:'row',position:'absolute',bottom:-23,paddingBottom:10,paddingTop:5, height:60,borderRadius:10, alignSelf:'center', width:'80%', backgroundColor:'white'}}>
                <View style={{alignItems:'center',justifyContent:'space-around', width:'50%', flexDirection:'row',}}>
                    <Text style={{color:'#E4637C', fontSize:21, fontWeight:'700'} }>90</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600' ,paddingRight:30, borderRightWidth:1} }> Cloths</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'space-around', width:'50%', flexDirection:'row',}}>
                <Text style={{color:'#E4637C', fontSize:21, fontWeight:'700'} }>90</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'} }> Outfits</Text>
                </View>
            </View>

        </ImageBackground>
        </View>
            
        
 
  <View style={styles.appContainer}>
        {/* info */}

        {/* button */}
        <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:30,borderColor:'#313679;', paddingBottom:20,borderBottomWidth:1,}}>
            <View style={{ borderColor:'#2D3791',borderWidth:1,borderRadius:20,width:156,height:50,alignItems:'center',justifyContent:'space-around'}}>
                <TouchableOpacity>
                    <Text style={{fontSize:16, fontWeight:'700',color:'#2D3791'}} >My stats</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:12, borderColor:'#2D3791',borderWidth:1,borderRadius:20,width:156,height:50,alignItems:'center',justifyContent:'space-around'}}>
                <TouchableOpacity>
                    <Text style={{fontSize:16, fontWeight:'700',color:'#2D3791'}}>My calendar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        {/* list */}
        <View style={{ flexDirection:'column',justifyContent:'space-around',paddingTop:25,}}>
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/1.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Orders</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/2.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Rewards</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/3.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Badges</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/4.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Wishlist</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:12,height:25   }} source={ require('../../assets/images/mePage/5.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Body Specs</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/6.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Style Test</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/7.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>  Visit our Insta</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:20,height:20}} source={ require('../../assets/images/mePage/8.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>   Chat with us</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
            <View style={{marginBottom:25, flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start', width:'75%'}}>
                <Image style={{width:10,height:17}} source={ require('../../assets/images/mePage/9.png')}/>
                <Text style={{fontSize:16,fontWeight:'600'}}>   Addresses</Text>
                </View>
               <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <Image style={{width:9,height:16}} source={ require('../../assets/images/mePage/arrow.png')}/>
               </View>
            </View>
            
        </View>
     </View>
        </>
       


     
   );
  

}

const styles = StyleSheet.create({
 appContainer:{
    flex: 1,
    backgroundColor: "#fff",
   
  
 
    paddingLeft:24,
    paddingRight:24,
    paddingBottom:80,
     
 
 }, 

});

