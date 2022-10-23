
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
 
import { useSafeArea } from 'react-native-safe-area-context';
  export default function clickandmatchRecommendedPage() {
const insets = useSafeArea();
      return (
        <>
         <View style={{paddingTop: insets.top}}>
 </View> 
         <View style={styles.appContainer}>
     <View style={{flexDirection:'row', justifyContent:'space-around', }}>
           {/* title */}
           <View style={{width:'100%',alignItems:'flex-start'}}>
                    <Text style={{color:'#2D3791',fontWeight:'700'}}>MATCH WITH</Text>
            </View>
    </View>

        {/* recommadations */}
        <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:12 }}>
           {/* Product Image */}
           <View style={{ backgroundColor:'white', borderRadius:20, width:200, height:400,marginRight:13}}>
                <View style={{alignItems:'flex-start',justifyContent:'space-around'}}>
                    <Text style={{fontSize:12,fontWeight:'700',marginBottom:15}}>YOUR ITEM</Text>
                </View>
                <View style={{ backgroundColor:'#F5F5F5', borderRadius:20, width:200, height:390,marginRight:13}} > 
                
                </View>
           </View>

           <View style={{flexDirection:'column', borderRadius:20, width:110,height:420 }}>
            
           <View style={{alignItems:'flex-start',justifyContent:'space-around'}}>
                    <Text style={{fontSize:12,fontWeight:'700',marginBottom:15}}>MATCH WITH</Text>
            </View>

            <ScrollView>
            <View style={styles.recommed}>

            </View>
            <View style={styles.recommed}>

            </View>
            <View style={styles.recommed}>

            </View>
            <View style={styles.recommed}>

            </View>
            <View style={styles.recommed}>

            </View>
            <View style={styles.recommed}>

            </View>
            </ScrollView>


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
 dropdownView:{
  flexDirection:'row',
  margin:5,
   borderColor:'#D9D9D9',
   justifyContent:'center',
    borderTopWidth:0.5,
    borderBottomWidth:0.5,

        
 },
 recommed:{
    marginBottom:5,
    borderRadius:10,
    backgroundColor:'#F5F5F5',
    width:100,
    height:90
 },
 item:{
  marginRight:5,
  marginTop:5,
  backgroundColor:'#F5F5F5',
  borderRadius:20,
  width:100,
  height:120 ,
  justifyContent:'center',
  alignItems:'center'
},
dropdown: {
  width:'40%',
  margin:5,


  backgroundColor:'#FFFF',
  alignItems:'center'
},
icon: {
  marginRight: 5,
},
placeholderStyle: {
  fontSize: 12,
  fontWeight:'600',
  paddingLeft:10,
  paddingRight:10,
},
selectedTextStyle: {
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},

});
