import React, {useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
    FlatList,
    Text,
    View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
// import BottomNavigationBarCMP from '../components/bottom_navbar';
import BottomNavigationBarCMP from '../../components/bottom_navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Image from 'react-native-scalable-image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const initialLayout = { width: Dimensions.get('window').width };
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { Pressable } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
// import SearchBar from "react-native-dynamic-search-bar";
import ScrollPicker from 'react-native-wheel-scrollview-picker';
const dummyArray = [
    { id: '1',description:"KEEP IT CASUAL", image: require('../../../assets/images/dressMe/1.png') },
    { id: '2',description:"WORK ", image: require('../../../assets/images/dressMe/1.png') },
    { id: '3',description:"PARTAY!", image: require('../../../assets/images/dressMe/1.png')},
    { id: '4',description:"ETHNIC FEELS", image: require('../../../assets/images/dressMe/1.png') },
    { id: '5',description:"DATE NIGHT", image: require('../../../assets/images/dressMe/1.png') },
    { id: '7',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '8',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '9',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '10',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '11',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '12',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '13',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '14',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '15',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    { id: '16',description:"JUST BRUNCHIN’", image: require('../../../assets/images/dressMe/1.png') },
    
  ];
  const dislikesArray1 = [
    { id: '1',description:"Sleeveless", image: require('../../../assets/images/styletest/dislikes/1.png') },
    { id: '2',description:"Strapless ", image: require('../../../assets/images/styletest/dislikes/2.png') },
    { id: '3',description:"Off Shoulder", image: require('../../../assets/images/styletest/dislikes/3.png')},
    { id: '4',description:"One Shoulder", image: require('../../../assets/images/styletest/dislikes/4.png') },
    { id: '5',description:"Square neck", image: require('../../../assets/images/styletest/dislikes/5.png') },
    { id: '6',description:"V-neck", image: require('../../../assets/images/styletest/dislikes/6.png') },
    { id: '7',description:"Round neck", image: require('../../../assets/images/styletest/dislikes/7.png') },
    { id: '8',description:"Turtleneck", image: require('../../../assets/images/styletest/dislikes/8.png') },
  ];  

export default function OutfitsPage({navigation}) {
    const [index, setIndex] = React.useState(0);
    const [listItems, setListItems] = useState(dummyArray);
    const [dislikesItems, setDislikesItems] = useState(dislikesArray1);

    const[subheading,setSubheading]= useState('');
   


    const ItemView = ({ item }) => {
      return (
              <>
              <View style={{backgroundColor:'#F5F5F5',borderRadius:5, justifyContent:'space-around',alignItems:'center', width:wp(33)-20,height:wp(35)-10, marginBottom:5, marginRight:5}}>
                  <TouchableOpacity>
                  {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} />   */}
                  {/* <Image width={wp(30)-15} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
               {/* <Text style={{marginTop:10, fontFamily:'Open-sans-Bold',fontSize:12, backgroundColor:'white'}} >
                  {item.description} 
              </Text> */}
                </TouchableOpacity>
              </View>
              </>
      );
    };
    const dislikeView = ({ item }) => {
      return (
              <>
              <View style={{backgroundColor:'white',width:wp(50)-30,marginBottom:16, marginRight:20}}>
                  <TouchableOpacity >
                  <Text style={{fontWeight:'700', fontFamily:'Open-sans',fontSize:16,textAlign:'center', backgroundColor:'white'}} >
                  {item.description} 
                 </Text>
                  <Image width={wp(50)-38} source={item.image} />
                  </TouchableOpacity>
              </View>
              </>
      );
    };
    const [routes] = React.useState([
      { key: 'first', title: 'BRANDS' },
      { key: 'second', title: 'STYLE' },
      { key: 'third', title: 'LIKES' },
      { key: 'forth', title: 'DISLIKES' },
    ]);
    const gender = [
      { label: "Male", value: "1" },
      { label: "Female", value: "2" },
      { label: "Both", value: "3" }
    
    ];
    function StyleOne(){
      return(
        <View>
          <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                      marginTop:17,
                      marginBottom:25
                  }}>WE ARE SHOPPING FOR</Text> 
                    <SwitchSelector
                    backgroundColor='#F5F5F5'
                    options={gender}
                    textColor='black'
                    buttonColor='#E4637C'
                    selectedColor='white'
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    />
                        <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                      marginTop:17,
                      marginBottom:25
                  }}>I USUALLY SHOP FOR</Text> 
                  <View style={{flexDirection:'row', width:wp('100'),marginBottom:15, backgroundColor:'white'}}>
                  <Pressable  children={({ pressed }) => (
                          <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10, paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'700',fontFamily:'Open-sans' }}>Party</Text>
                          </View>
                      )}/>
                      <Pressable  children={({ pressed }) => (
                          <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5,  paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'700',fontFamily:'Open-sans' }}>Casual</Text>
                          </View>
                      )}/>
                  </View>

                  <View style={{flexDirection:'row', width:wp('100'),backgroundColor:'white'}}>
                  <Pressable  children={({ pressed }) => (
                          <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5, marginRight:10, paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'700',fontFamily:'Open-sans' }}>Work</Text>
                          </View>
                      )}/>
                      <Pressable  children={({ pressed }) => (
                          <View style={{ width:wp('50')-30,borderRadius:50,borderWidth:0.5,  paddingVertical:15,alignItems:'center', backgroundColor:pressed?'#E4637C':'white', }}>
                            <Text style={{color:pressed?'white':'black',fontSize:14,fontWeight:pressed?'700':'700',fontFamily:'Open-sans' }}>Ethnic</Text>
                          </View>
                      )}/>
                  </View>
        </View>
      )
    }
    
    function Brands(){
      useEffect(() => {
        // Update the document title using the browser API
        setSubheading('Brands you like');
      });
         return(
          <View style={{backgroundColor: 'white',width:wp(100),marginTop:20,paddingBottom:20  }} >
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
        </View>
         )
    }
        const FirstRoute = () => (

          <>
          
               <Brands />   
          </>
        
      );


          function Scrollwheel (){
            return(
              <ScrollPicker
              dataSource={['1', '2', '3', '4', '5', '6']}
              selectedIndex={1}
              renderItem={(data, index) => {
                //
              }}
              onValueChange={(data, selectedIndex) => {
                //
              }}
              wrapperHeight={180}
              wrapperWidth={150}
              wrapperColor='black'
              itemHeight={60}
              highlightColor='red'
              highlightBorderWidth={2}
            />    
            )
            
          }
          const SecondRoute = () => (
            <View style={[ { backgroundColor: 'white',flex:1, }]} >
               <StyleOne />
               {/* <Scrollwheel/> */}
               

               <View style={{width:'100%',flexDirection:'row',  position:'absolute',bottom:10}}>
                  <View style={{width:'50%',justifyContent:'space-around'}}>
                    <Text style={{fontSize:RFValue(24),fontWeight:'400',fontFamily:'Open-sans'}} >01/<Text style={{fontSize:RFValue(12),fontWeight:'400',fontFamily:'Open-sans'}}>2</Text> </Text> 
                    </View>
                  <View style={{alignItems:'flex-end',width:'50%'}}>
                  <Image width={50} source={require('../../../assets/images/Introductory/Next.png')} />
                  </View>
                </View>
            </View>
          );


          function Likes(){
            useEffect(() => {
              // Update the document title using the browser API
              setSubheading('Tell us your likes');
            });
            return(
              <View style={[styles.scene, { backgroundColor: '#white', }]} >
              <Text
             style={{
                 fontSize:16,
                 fontWeight:'700',
                 fontFamily:'Open-sans',
                 color: '#2D3791',
                 marginTop:17,
                 marginBottom:25
             }}>WHICH FIT & DESIGN DO YOU LIKE</Text> 
            <ScrollView style={{backgroundColor:'white',}}>
            <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/straight.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/aline.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/slim.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
           </View>
           <View style={{width:wp(100),paddingBottom:50, backgroundColor:'white',marginBottom:20, paddingHorizontal:30,flexDirection:'row'} }>
             <Image width={wp(55)} source={require('../../../assets/images/styletest/shiny.png')}/>
             <View style={{flex:1,justifyContent:'space-around',paddingVertical:hp(5)}}>
                 <Pressable children={({pressed}) =>(
               <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#009955':'#B0B0B0', textAlign:'center'}}>YES</Text>
                 )}/>
               <Pressable children={({pressed}) =>(
                <Text style={{fontWeight:'700',fontSize:RFValue(27),color:pressed?'#F44444':'#B0B0B0', textAlign:'center'}}>NO</Text>
                 )}/>
             </View>
             <View style={{width:'100%',alignItems:'flex-end', position:'absolute',bottom:50}}>
               <Image width={50} source={require('../../../assets/images/Introductory/Next.png')} />
                </View>
           </View>

            </ScrollView>
           </View>
            )
          }
              const ThirdRoute = () => (
                 <Likes />
              );
              function Dislikes(){
                useEffect(() => {
                  // Update the document title using the browser API
                  setSubheading('and dislikes...');
                });
                return(
                  <FlatList
                  numColumns={2}
                  data={dislikesItems}
                  //data
                  defined="defined"
                  in="in"
                  constructor="constructor"
                  //Item
                  Separator="Separator"
                  View="View"
                  renderItem={dislikeView}
                  keyExtractor={(item, index) => index.toString()}/>
                )
              }

              const ForthRoute = () => (

                  <View style={[styles.scene, { backgroundColor: '#white', }]} >
                 <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                      marginTop:17,
                  }}>YOU DO NOT LIKE</Text>
                  <Text
                  style={{
                      fontSize:16,
                      fontWeight:'400',
                      fontFamily:'Open-sans',
                      color: 'black',
                      marginBottom:25
                  }}>Sleeve and Neck Type</Text>
                   <Dislikes />
          </View>  
              );

              

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
      forth: ForthRoute,
     
    });

  
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    const insets = useSafeArea();
    return (
        <>
                <StatusBar style='light'/>
                <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>

                <View
                    style={{ flex:1, paddingLeft:25,paddingRight:25,paddingTop:0,backgroundColor:'white',paddingTop:15
                }}>
                <View style={{flexDirection:'row',backgroundColor:'white',marginTop:0, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'50%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                    <View style={{width:'50%', alignItems:'flex-end',}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('') }>
                      <Text style={{fontWeight:'700',fontFamily:'Open-sans', fontSize:12,}}> SKIP </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={{fontWeight:'400',fontSize:RFValue(22),marginTop:20, fontStyle:'Open-sans'}}>
                    {subheading}
                  </Text>
                  {/* <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("onPress")}
                    onChangeText={(text) => console.log(text)}
                  /> */}

                    <View style={{flex:1  }}>
                                  <TabView
                                        navigationState={{ index, routes }}
                                        renderTabBar={props => (
                                            <TabBar
                                            {...props}
                                            
                                            indicatorStyle={{
                                              backgroundColor:'#E4637C'
                                              
                                            }}

                                            renderLabel = {({route, focused})=>{
                                                if(focused) { 
                                                    return <Text style={{ color: '#E4637C',fontSize:11,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>;
                                                }
                                                return <Text style={{ color: '#D9D9D9',fontSize:11,fontWeight:'700',fontFamily:'Open-sans' }} >{route.title}</Text>
                                            } }
                                            style={{backgroundColor: 'white', }}
                                            />
                                        )}
                                        renderScene={renderScene}
                                        onIndexChange={setIndex}
                                        initialLayout={initialLayout}
                                        style={styles.container}
                                        />
                                  </View>
                    

                <View style={{position:'absolute',alignSelf:'flex-end',padding:24, bottom:10}}>
                        {/* <ChatBox /> */}
                </View>
                </View>


              
                <BottomNavigationBarCMP navigator={navigation}/>
    </>

    );
}
const styles = StyleSheet.create({
  scene: {
    backgroundColor:'green'
  },
  main:{
    backgroundColor:'white',
    paddingLeft:24,
    paddingRight:24,
},
 item:{
    marginRight:5,
    marginTop:5,
    backgroundColor:'#F5F5F5',
    borderRadius:5,
    width:100,
    height:120 ,
    justifyContent:'center',
    alignItems:'center'
}, 
});

;
 