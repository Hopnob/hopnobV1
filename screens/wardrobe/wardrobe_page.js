import React, {useState,useRef,useEffect} from 'react';
import {
    FlatList,ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import { Dropdown } from 'react-native-element-dropdown';
import TopNavigationBarPrimary from '../components/topNavigationP';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ChatBox from '../components/chatbox';
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
const dummyArray = [
  { id: '1',description:"KEEP IT CASUAL", image: require('../../assets/images/dressMe/1.png') },
  { id: '2',description:"WORK ", image: require('../../assets/images/dressMe/2.png') },
  { id: '3',description:"PARTAY!", image: require('../../assets/images/dressMe/3.png')},
  { id: '4',description:"ETHNIC FEELS", image: require('../../assets/images/dressMe/4.png') },
  { id: '5',description:"DATE NIGHT", image: require('../../assets/images/dressMe/5.png') },
  { id: '6',description:"JUST BRUNCHIN’", image: require('../../assets/images/dressMe/6.png') },
  
];
export default function WardrobePage({navigation}) {
     const [value, setValue] = useState(null);
     const [listItems, setListItems] = useState(dummyArray);

    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      if (!fontsLoaded) {
        return <AppLoading />;
      }
      const ItemView = ({ item }) => {
        return (
                <>
                <View style={{}}>
                
                <View style={{backgroundColor:'#F5F5F5',borderRadius:20, justifyContent:'space-around',alignItems:'center', width:wp(30)-10,height:wp(35)-10, marginBottom:5, marginRight:5}}>
                   
                    <TouchableOpacity onPress={()=>navigation.navigate('ProductHopnobPage')}>
                    <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} />  
                    {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
                 {/* <Text style={{marginTop:10, fontFamily:'Open-sans-Bold',fontSize:12, backgroundColor:'white'}} >
                    {item.description} 
                </Text> */}
                  </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#F5F5F5',borderRadius:20, justifyContent:'space-around',alignItems:'center', width:wp(30)-10,height:wp(35)-10, marginBottom:5, marginRight:5}}>
                   
                    <TouchableOpacity onPress={()=>navigation.navigate('ProductConsumerPage')}>
                    <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth2.png')} /> 
                    {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
                 {/* <Text style={{marginTop:10, fontFamily:'Open-sans-Bold',fontSize:12, backgroundColor:'white'}} >
                    {item.description} 
                </Text> */}
                    </TouchableOpacity>  
                </View>

                </View>
               
               
                </>
        );
      };
    const insets = useSafeArea();
  

    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
                <TopNavigationBarPrimary navigator={navigation}/>
                <View
                    style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',paddingTop:15
                }}>
                    
                    <View style={{marginBottom:20, flexDirection:'row',width:wp(100)-50,backgroundColor:'white',}}>
                        <View style={{width:wp(50)-20,justifyContent:'space-around', backgroundColor:'white', alignItems:'flex-start'}}> 
                        <Text
                        style={{
                            fontSize:16,
                            fontFamily:'Open-sans-Bold',
                            color: '#2D3791',
                            
                        }}>WARDROBE
                        </Text>  
                        </View>
                        <View style={{width:wp(30)-10,flexDirection:'row', alignItems:'flex-end', backgroundColor:'white'}}>
                         
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
                      />
                         
                        </View>
                        <View style={{width:wp(20)-20, alignItems:'flex-end', backgroundColor:'white'}}>
                         
                          
                        <Image width={35}  source={require('../../assets/images/wardrobe/Arrowbutton.png')}/>
                        </View>
                    </View>
                    <View style={{marginTop:16}}>
                        <Text style={{fontFamily:'Open-sans-Bold', fontSize:12, fontWeight:'700'}}>RECENTLY ADDED</Text>
                        <View style={{marginTop:5}}>
                            <ScrollView horizontal={true}>
                                        <View style={{
                                          marginRight:5,
                                          backgroundColor:'#F5F5F5',
                                          borderRadius:20,
                                          width:wp(30)-10,height:wp(35)-10,
                                          justifyContent:'center',
                                        alignItems:'center'
                                        }}>
                                            <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                                        </View>
                                        <View style={{ marginRight:5,
                                          backgroundColor:'#F5F5F5',
                                          borderRadius:20,
                                          width:wp(30)-10,height:wp(35)-10,
                                          justifyContent:'center',
                                        alignItems:'center'}}>
                                            <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                                        </View>
                                        <View style={{ marginRight:5,
                                          backgroundColor:'#F5F5F5',
                                          borderRadius:20,
                                          width:wp(30)-10,height:wp(35)-10,
                                          justifyContent:'center',
                                        alignItems:'center'}}>
                                            <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                                        </View>
                                        <View style={{ marginRight:5,
                                          backgroundColor:'#F5F5F5',
                                          borderRadius:20,
                                          width:wp(30)-10,height:wp(35)-10,
                                          justifyContent:'center',
                                        alignItems:'center'}}>
                                        <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/recentlyadded.png')} />
                                        </View> 
                            </ScrollView>
                            </View>      
                        </View>
                    <Text style={{marginVertical:10, fontFamily:'Open-sans-Bold', fontSize:12, fontWeight:'700'}}>All CLOTHES</Text>
                        
                        <FlatList
                    numColumns={3}
                    data={listItems}
                    //data
                    defined="defined"
                    in="in"
                    constructor="constructor"
                    //Item
                    Separator="Separator"
                    View="View"
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}/>


                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        <ChatBox />
                </View>
                </View>

                <BottomNavigationBarCMP navigator={navigation}/>
            

              
    </>

    );
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
     paddingRight:24,
     paddingBottom:91,

 },  
 item:{
    
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
