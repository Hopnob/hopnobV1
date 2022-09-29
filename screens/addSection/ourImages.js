import Bottomnav from '../components/bottom_navbar';
import Topnavbar from '../components/top_navbar';

import {FlatList, StyleSheet,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useState } from 'react';

export default function ourImagesPage() {

    const[people, setPeople] = useState([
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'1'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
    ])


    const clothingHandler =()=>{
        this.props.navigation.navigate('addWardrobeSection');
    }
  return (
   <View style={styles.appContainer}>
       <View style={styles.topNavBar}>
           <Topnavbar />
       </View>

       <View style={styles.pageDesc}>
            <Text style={{fontWeight:400, fontSize:20}}> Hopnob Image Collection </Text>     
            <Text style={{fontWeight:400, fontSize:15}}> Choose images similar to what you own! </Text>   
            <Text style={{marginTop:30, fontWeight:400, fontSize:20}}> TOPS </Text>     

       </View>


        <View style={{backgroundColor:'white', alignItems:'center'}} >
            <FlatList numColumns={2} 
            keyExtractor={(item) =>item.id}
            data = {people}
            renderItem = {({item}) =>(
                <Image style ={styles.item} source= {item.image} />
            )}
            />
        </View>
      <View style={{marginLeft:50,marginRight:50, marginBottom:30 }}>
          <View style={{marginBottom:2,width:"100%",borderRadius:15, backgroundColor:'#5BAE58',}}> 
          <TouchableOpacity>
              <Text style={{padding:8,color:'white', fontSize:20,textAlign:'center'}}>NEXT</Text>
          </TouchableOpacity>
          </View>
          <View style={{ marginBottom:30 , width:"100%",  backgroundColor:'white',}}> 
              <Text style={{padding:8,color:'black', fontSize:14,textAlign:'center'}}>Next up: Bottoms</Text>
          </View>
      </View>

       <View style={styles.bottomNavBar}>
           <Bottomnav />
       </View>

   </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:5,
 }, 
 topNavBar:{
     paddingTop:10,
     width:'100%',
 },
 item:{
     margin:24,
     height:130,
     width:130,
     backgroundColor:'pink',
     fontSize:20
 },
 bottomNavBar:{
     bottom:0,
     paddingTop:10,
     width:'100%',
     position:'absolute',
 },pageDesc:{
     width:'100%',
     marginTop:30,
     padding:10,

 },tops:{
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
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
