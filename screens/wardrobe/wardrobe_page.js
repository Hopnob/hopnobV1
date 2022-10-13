
import { VideoExportPreset } from 'expo-image-picker';
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';



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

  
  export default function WardrobePage() {
    const [value, setValue] = useState(null);
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

        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around', }}>
           {/* title */}
           <View style={{width:'40%',alignItems:'flex-start'}}>
        <Text style={{color:'#2D3791',fontWeight:'700'}}>WARDROBE</Text>
            </View>
            {/* dropdown */}
            <View style={{alignItems:'flex-end', width:'30%',}}>
                            <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Sort by"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />

            </View>
                {/* button */}  
            <View> 
                <Image style={{width:25,height:25}} source={ require( '../../assets/images/wardrobe/Arrowbutton.png')}/>
            </View>
        </View>
        
        <View style={{marginTop:16}}>

            <Text style={{fontSize:12, fontWeight:'700'}}>RECENTLY ADDED</Text>

            <View>
                <ScrollView horizontal={true}>
                            <View style={styles.item  }>
                                <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View>
                            <View style={styles.item}>
                                <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View>
                            <View style={styles.item}>
                                <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                                
                            </View>
                            <View style={styles.item}>
                            <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View> 
                            <View style={styles.item}>
                            <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View> 
                            <View style={styles.item}>
                            <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View> 
                            <View style={styles.item}>
                            <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View> 
                            <View style={styles.item}>
                            <Image style ={{}} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                            </View> 
                </ScrollView>
                </View>      
        </View>

        <View style={{marginTop:20 }}>
            <View>
                 <Text style={{fontSize:12, fontWeight:'700'}}>ALL CLOTHES</Text>
            </View>
            <View style={{marginTop:10,marginBottom:250}}>
                        <FlatList numColumns={3} 
                        keyExtractor={(item) =>item.id}
                        data = {people}
                        renderItem = {({item}) =>(
                            <View style={{flex:1 , }}>
                                <View style={styles.item}>
                                 <Image style ={{padding:4}} source= {require ('../../assets/images/wardrobe/allcloth.png')} />
                                </View>
                                 {/* <Image style ={styles.item} source= {item.image} /> */}
                            </View>
                        )}
                        />

            
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
    width:'100%',
    backgroundColor:'#F3F3F3',
    borderRadius:5,
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
