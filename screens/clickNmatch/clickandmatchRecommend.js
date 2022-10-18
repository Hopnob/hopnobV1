
import { VideoExportPreset } from 'expo-image-picker';
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { Rating, AirbnbRating } from 'react-native-ratings';
const WATER_IMAGE = require('../../assets/images/wardrobe/heart.png');

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  
  export default function clickandmatchRecommendedPage() {
    const [value, setValue] = useState(null);

   
      

    // const[color,setColor] = useState('color');
    // const[category,setCategory] = useState('category');

    // setColor('Blue');
    // setCategory('Blouse');

    const[people, setPeople] = useState([
        {image: require('../../assets/images/wardrobe/allcloth.png'), id:'1'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'7'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'8'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'9'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'10'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'11'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'12'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'13'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'15'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'16'},
        {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'17'},
    ])
      return (
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
