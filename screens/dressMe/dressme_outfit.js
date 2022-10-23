 
import React ,{useState} from 'react';


import { FlatList, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

export default function DressMePageOutfit() {
        const insets = useSafeArea();
 
        const[people, setPeople] = useState([
            {image: require('../../assets/images/wardrobe/allcloth.png'), id:'1'},
            {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
            {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
            {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
            {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
            {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
        ])
        
  return (
    <>
     <View style={{paddingTop: insets.top}}>
 </View>  
    <View style={styles.appContainer}>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around', }}>
           {/* title */}
           <View style={{flexDirection:'row',width:'100%'}}>
           <View style={{width:'80%',alignItems:'flex-start'}}>
                    <Text style={{color:'#2D3791',fontWeight:'700'}}>TRY THESE OUTFITS TODAY!</Text>
            </View>

            <View style={{width:'20%',alignItems:'flex-end'}}>
                    <Image style={{width:30,height:30,marginBottom:8}} source={ require ('../../assets/images/dressMe/refresh.png')}/>
             
            </View>
           </View>
            </View>
      
          <View style={{flexDirection:'column',justifyContent:'space-around', }}>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20,marginBottom:20}}>
                <View style={{width:154,height:152,marginBottom:8,backgroundColor:'grey',borderRadius:20}}>
                    {/* <Image style={{width:154,height:152,marginBottom:8}} source={ require ('../../assets/images/dressMe/1.png')}/> */}
                </View>
                <View style={{width:154,height:152,marginBottom:8,backgroundColor:'grey',borderRadius:20}} >
                    {/* <Image style={{width:154,height:152,marginBottom:8}} source={ require ('../../assets/images/dressMe/2.png')}/> */}
                </View>
          </View>
           
        
          </View>
         
     
     </View>
    </>
    
     
   );
    }

 

const styles = StyleSheet.create({
 appContainer:{
    
    flex:1,
    backgroundColor:'white',
    padding:24,
 }, 
  
 item:{
  
   
    backgroundColor:'#F5F5F5',
    borderRadius:20,
    width:100,
    height:120 ,
    justifyContent:'center',
    alignItems:'center'

},
 topNavBar:{
     paddingTop:10,
     width:'100%',
 },
 bottomNavBar:{
     bottom:0,
     paddingTop:10,
     width:'100%',
     position:'absolute',
 },banner:{
     width:'100%',
     marginTop:30,
    

 },clothing:{
     width:155,
     height:184,
     backgroundColor:'#F3F3F3',
     marginTop:30,
     borderRadius:20,
     paddingVertical:10,
     paddingHorizontal:5,
 },
 ourImage:{
    width:'100%',
    backgroundColor:'#C87600',
    marginTop:30,
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:5,
},
 
});
