import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

  
//   export default function DefaultTestingPage() {
    export default class StyleTestTwo extends React.Component {
        render(){
            const introButtonPage =() =>{
                this.props.navigation.navigate('IntroductoryPageTwo');
            }
              return (
                 <View style={styles.appContainer}>
                    <View style={{alignItems:'flex-end', marginRight:25,marginTop:25}}>
                        <Text style={{fontSize:12,fontWeight:'700'}}> SKIP </Text>
                    </View>
                    {/* title */}
                    <View style={{marginLeft:25,marginTop:15}}>
                        <Text style={{fontSize:22,fontWeight:'400'}}> Easy size comparison</Text>
                    </View>

                    {/* tabs */}
                    <View style={{marginLeft:25,marginRight:25, marginTop:26,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'45%', borderBottomWidth:1,}}>
                                <Text style={{padding:4, color:'#A2A2A2', fontSize:15,fontWeight:'700',}}>Bust  </Text>
                        </View>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'45%', borderBottomWidth:1,}} >
                                <Text style={{padding:4,  color:'#E4637C' , fontSize:15,fontWeight:'700'}}> Hips </Text>
                        </View>
                    </View>

                    {/* image background */}
                    <View style={{ width:'100%',height:240,marginTop:20, alignItems:'center', backgroundColor:'white', marginTop:16}}>
                        <Image  style={{ 
                              flex: 1,
                              width: '100%',
                              height: '100%',
                              resizeMode: 'contain',
          }} source={ require('../../assets/images/UserStyles/style2.png')} />
                    </View>

                    {/* NEXT */}
                    <View style={{alignItems:'center',}}>
                      <View style={{marginBottom:15,marginTop:30}}>
                      <Text style={{color:'#394297',fontSize:16,fontWeight:'700'}}> ARE YOUR HIPS BIGGER THAN YOUR WAIST? </Text>
                      </View>

                      <View style={{justifyContent:'space-around',flexDirection:'row',marginLeft:24,marginRight:24}}>
                          
                        <TouchableOpacity  >
                          <View style={{elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'#E4637C'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'white', textAlign:'center'}}>Yes</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                          <View style={{ elevation: 2, shadowColor: '#52006A',  alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'#1E1E1E', textAlign:'center'}}>No</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                          <View style={{elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43, borderRadius:10,backgroundColor:'white'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'#1E1E1E', textAlign:'center'}}>Same Size</Text>
                          </View>
                        </TouchableOpacity>
                        

                      </View>

                    </View>
                     
                </View>
           );
        }
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
 }, 
});
