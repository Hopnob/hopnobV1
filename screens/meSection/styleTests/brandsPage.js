import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BottomNavigationBarCMP from '../../components/bottom_navbar';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';

const brandsArray = [
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
export default function BrandsPage({navigation}){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({
        
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

      });
     
    const [listItems, setListItems] = useState(brandsArray);

      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
      const ItemView = ({ item }) => {
        return (
                <>
                <View style={{backgroundColor:'#F5F5F5',borderRadius:5, justifyContent:'space-around',alignItems:'center', width:wp(34)-19,height:wp(35)-10, marginBottom:5, marginRight:5}}>
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
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
        

          <View style={styles.appContainer}>
        {/* back button and skip */}
            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
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
            {/* title */}
            <Text style={{fontWeight:'400',fontSize:RFValue(22),marginTop:20, fontStyle:'Open-sans'}}>
                Brands you like
            </Text>
                     
                     <View style={{width:'100%',marginTop:20, padding:10,borderRadius:30,borderWidth:1, flexDirection:'row',alignItems:'center', justifyContent:'space-around',  borderColor:'#A2A2A2'}}>
                        <View style={{width:'10%',backgroundColor:'white'}}>
                        <Image width={wp(6)} source={require('../../../assets/images/search.png')} />
                        </View>
                        <View style={{width:'90%',backgroundColor:'white'}}>
                        <TextInput placeholder='Search all brands' />  
                          </View>
                         
                     </View>


            {/* tabs */}
            <View style={{  marginVertical:20,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#E4637C', fontSize:RFValue(12,667),}}>BRANDS  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>STYLE </Text>
                        </View>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>LIKES  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>DISLIKES </Text>
                        </View>
            </View>
                {/* list */}
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

                  <View style={{alignItems:'flex-end',width:wp(100),padding:20,  position:'absolute',bottom:10}}>
                
                    <TouchableOpacity onPress={()=> navigation.navigate('StyleTestOnePage')}>
                        <Image width={60} source={require('../../../assets/images/Introductory/Next.png')} />
                    </TouchableOpacity>
                    
                  </View>

               
        </View>
        
       

        <View style={{backgroundColor:'white',width:wp(100)}}>
        <BottomNavigationBarCMP navigator={navigation}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
 appContainer:{
    flex:1,padding:20, backgroundColor:'white',
 },  
});
