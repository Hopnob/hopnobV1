import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
export default function EditProfile({ useNavigation }) {
    const gender = [
        { label: "Female", value: "1" },
        { label: "Male", value: "2" }
      ];
      const passwords = [
        { label: "Forgot", value: "1" },
        { label: "Edit", value: "2" }
      ];
      const notification = [
        { label: "On", value: "1" },
        { label: "Off", value: "2" }
      ];

      return (
         <View style={styles.appContainer}>
        {/* list */}
        <View style={{marginTop:22, marginBottom:50,flexDirection:'row', width:'100%',}}>  
                    <View style={{alignItems:'center',width:'100%',backgroundColor:'none' }}>
                    <ImageBackground style={{width:84,height:84}} source={require('../../assets/images/mePage/profilePic.png')}>
                        <Image style={{width:19,height:19,alignSelf:'flex-end',position:'absolute',bottom:0}} source={require('../../assets/images/mePage/pencil.png')}/>
                    </ImageBackground>
                    <Text style={{marginTop:10, color:'#000000',fontSize:24, fontWeight:'400'}}>RIYA ADAVANI</Text>
                    </View>
        </View>
        <View style={{marginTop:22, marginBottom:50, width:'100%',}}>
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'30%'}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Email</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'70%'}}>
                <TextInput  placeholder="" style={{
                borderColor: 'black',
                borderBottomWidth: 1}}
                />

                </View>
                
              </View>
            
                
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Gender</Text>
                </View>
                <View style={{justifyContent:'flex-start',width:'60%'}}>
                    {/* https://www.npmjs.com/package/react-native-switch-selector */}
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={gender}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />

                </View>
                
              </View>
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'30%'}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Birthday</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'70%'}}>
                <TextInput  placeholder="" style={{
                borderColor: 'black',
                borderBottomWidth: 1}}
                />

                </View>
                
              </View>   
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Password</Text>
                </View>
                <View style={{justifyContent:'flex-end',width:'60%'}}>
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={passwords}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />


                </View>
                
              </View>   
              <View style={{marginVertical:10, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',width:'40%'}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>Notifications</Text>
                </View>
                <View style={{justifyContent:'space-around',width:'60%'}}>
                <SwitchSelector
                backgroundColor='#DADDFC'
                options={notification}
                textColor='#2F3A99'
                buttonColor='#2F3A99'
                selectedColor='white'
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />
                </View>
              </View> 
        </View>
     </View>


     
   );
  

}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 

});
