import React ,{ useState, } from 'react';
import { StyleSheet, Text,FlatList, View,Button,TextInput,ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BottomNavigationBarCMP from '../../components/bottom_navbar';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import { useSafeArea } from 'react-native-safe-area-context';

const dislikesArray1 = [
    { id: '1',description:"Crop Tops", image: require('../../../assets/images/styletest/dislikes/13.png') },
    { id: '2',description:"Mini ", image: require('../../../assets/images/styletest/dislikes/14.png') },
    { id: '3',description:"Midi", image: require('../../../assets/images/styletest/dislikes/15.png')},
    { id: '4',description:"Maxi", image: require('../../../assets/images/styletest/dislikes/16.png') },
    
  ];  

export default function DislikesTwoPage({navigation}){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({
        
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

      });
    const [dislikesItems, setDislikesItems] = useState(dislikesArray1);
     
      const gender = [
        { label: "Male", value: "1" },
        { label: "Female", value: "2" },
        { label: "Both", value: "3" }
      
      ];

      if (!fontsLoaded) {
        return <AppLoading />;
      }

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
       
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}>

        </View>
        

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
            and dislikes...
            </Text>

            {/* tabs */}
            <View style={{  marginVertical:20,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>BRANDS  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%'}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#A2A2A2', fontSize:RFValue(12,667)}}>STYLE </Text>
                        </View>
                        <View style={{ borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'24%', borderBottomWidth:1,marginRight:'1.3%' }}>
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4, color:'#A2A2A2', fontSize:RFValue(12,667),}}>LIKES  </Text>
                        </View>
                        <View style={{borderBottomColor:'#E4637C',alignItems:'center' ,width:'24%', borderBottomWidth:1,}} >
                                <Text style={{fontWeight:'700',fontFamily:'Open-sans', padding:4,  color:'#E4637C', fontSize:RFValue(12,667)}}>DISLIKES </Text>
                        </View>
            </View>

            <View>

        
        <View style={{width:'100%',marginBottom:280, backgroundColor:'white'}}>
          <View style={{width:'100%',backgroundColor:'white '}}>
          <Text
                  style={{
                      fontSize:16,
                      fontWeight:'700',
                      fontFamily:'Open-sans',
                      color: '#2D3791',
                  }}>YOU DO NOT LIKE</Text>
                  <Text
                  style={{
                      fontSize:16,
                      fontWeight:'400',
                      fontFamily:'Open-sans',
                      color: 'black',
                      marginBottom:25
                  }}>Length</Text>
                  
          </View>

          <FlatList
          scrollEnabled
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


          <View style={{width:'100%',position:'absolute',bottom:0, alignItems:'flex-end'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('DislikesThreePage')}>
                    <Image width={60} source={require('../../../assets/images/Introductory/Next.png')} />
                </TouchableOpacity>
          </View>
        </View>
            
           

 

                 
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
