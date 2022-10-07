import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';

  
//   export default function DefaultTestingPage() {
    export default class IntroductoryPageOne extends React.Component {
        render(){
            const introButtonPage =() =>{
                this.props.navigation.navigate('IntroductoryPageTwo');
            }
              return (
                 <View style={styles.appContainer}>
                    {/* title */}
                    <View style={{marginLeft:25,marginTop:50}}>
                        <Text style={{fontSize:22,fontWeight:'400'}}> How Hopnob works?</Text>
                    </View>

                    {/* tabs */}
                    <View style={{marginLeft:25,marginRight:25, marginTop:30,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'30%', borderBottomWidth:1,}}>
                                <Text style={{color:'#E4637C', fontSize:15,fontWeight:'700',}}> Click</Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                                <Text style={{color:'#A2A2A2', fontSize:15,fontWeight:'700'}}> Match</Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'30%', borderBottomWidth:1,}} >
                                <Text style={{color:'#A2A2A2', fontSize:15,fontWeight:'700'}}> Explore</Text>
                        </View>
                    </View>

                    {/* image background */}
                    <View style={{ width:'100%',height:300,marginTop:16,   }}>
                        <Image  style={{ 
                              flex: 1,
                              width: '100%',
                              height: '100%',
                              resizeMode: 'contain',
                         }} source={ require('../../assets/images/Introductory/banner1.png')} />
                    </View>
    

                    {/* NEXT */}
                    <View style={{marginLeft:25,marginTop:30,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <View style={{width:'75%'}}>
                                        <Text style={{fontSize:20,fontWeight:'400'}}>Take a picture of your clothes & earn cashback </Text>
                            </View>
                            <View style={{width:'25%',}}>
                                <TouchableOpacity onPress={introButtonPage} >
                                        <Image style={{width:71,height:71}} source={ require ('../../assets/images/Introductory/Next.png')}/>
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
