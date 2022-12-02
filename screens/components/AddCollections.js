import React ,{useState,useEffect} from 'react';
import {Text, View,TouchableOpacity,  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
//import basic react native components
import { BottomSheet } from 'react-native-btr';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';

export default function AddCollections({navigation}){
    const [visible, setVisible] = useState(false);
    const[hasGalleryPermission,setHasCameraPermission ] = useState(null);
    const[image,setImage ] = useState(null);
    useEffect(()=>{
      (async () => {
        const galleryStatus= await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasCameraPermission(galleryStatus.status === 'granted');
      })();
    }, []);
  
    const pickImage = async () =>{
      let result= await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        // aspect:[16,9],
        quality:1,
      });
      console.log(result);
  
      if(!result.cancelled){
        setImage(result.uri);
        console.log("SUCESS PICKING IMAGE");
        setVisible(!visible);
        navigation.navigate('WardrobePage');
      }
    }
  
    if(hasGalleryPermission === false){
      return <Text>No access to internal storage</Text>
    }
            const toggleBottomNavigationView = () => {
              //Toggling the visibility state of the bottom sheet
              setVisible(!visible);
            };
  
    
            let [fontsLoaded] = useFonts({
              'Open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
              'Open-sans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  
            });
            if (!fontsLoaded) {
              return <AppLoading />;
            }
      function BottomSheetCmp(){
        return(
          <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >  
          {/*Bottom Sheet inner View*/}
         <View style={{backgroundColor: '#fff',
          width: '100%',
          height: 250,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          padding:24
          }}>
          <Text style={{ fontWeight:'700',fontFamily:'Open-sans',color:'#2D3791',  fontSize:RFValue(16,667), marginBottom:29}}>ADD YOUR CLOTHING IMAGES </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddFromCameraPage')}>
          <View style={{justifyContent:'space-around',alignItems:'center', width:'100%',backgroundColor:'white', flexDirection:'row',marginBottom:45}}>
            <Image width={40} height={32}  source ={ require ('../../assets/images/bottomSheet/camera.png')} />
            <Text style={{fontWeight:'700',fontSize:RFValue(14,667),fontFamily:'Open-sans', alignSelf:'center' }}  > <Text style={{color:'#E4637C'}}>Click</Text> from your camera </Text> 
            <Image width={35} height={35} source ={ require ('../../assets/images/bottomSheet/bottomarrow.png')} />
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => pickImage()}>
          <View style={{justifyContent:'space-around',alignItems:'center', width:'100%',backgroundColor:'white', flexDirection:'row'}}>
            <Image width={45} height={60}   source ={ require ('../../assets/images/bottomSheet/upload.png')} />
            <Text style={{fontWeight:'700',fontSize:RFValue(14,667),fontFamily:'Open-sans', }}> <Text style={{color:'#E4637C'}}> Upload </Text>from your gallery </Text> 
            <Image width={35} height={35}  source ={ require ('../../assets/images/bottomSheet/bottomarrow.png')} />
          </View>
          </TouchableOpacity>
          
          </View>  
       </BottomSheet>  
        )
      }
           
    return(

      <View style={{marginVertical:20, backgroundColor:'white',flexDirection:'row',width:wp(100)-44, height:hp(40)-44 }}> 

        <View style={{flex:1, backgroundColor:'#F5F5F5',borderRadius:20, justifyContent:'space-around',marginRight:15, paddingVertical:wp(10), alignItems:'center'}}>
        <Image width={wp(11)}  source ={ require ('../../assets/images/addMe/addLP2.png')} />
        <TouchableOpacity  onPress={toggleBottomNavigationView} >
                      <Text style={{fontWeight:'600',fontSize:RFValue(16),fontFamily:'Open-sans',paddingHorizontal:wp(2),paddingVertical:wp(13), marginVertical:hp(2),  textAlign:'center', }}>
                          <Text style={{fontWeight:'600',fontSize:RFValue(16),fontFamily:'Open-sans', color:'#E4637C'}}>Add </Text>your clothing images 
                      </Text>  
                        {/* <Button title='GALLARY' onPress={() => pickImage()} style={{marginTop:30}}/>
            <View style={{padding:10, flex:1, }}>
             {image && <Image source={{uri:image}} style={{flex:1/2}}/>}
              </View>   */}
                </TouchableOpacity>
                <BottomSheetCmp />
          <Image  width={wp(11)}  source ={ require ('../../assets/images/bottomSheet/arrow_circle.png')} />
        </View>

        <View style={{flex:1, backgroundColor:'#F5F5F5',borderRadius:20, justifyContent:'space-around',paddingVertical:wp(10), alignItems:'center'}}>
        <Image  width={wp(11)} source ={ require ('../../assets/images/addMe/checkLP2.png')} />
        <TouchableOpacity onPress={() =>  navigation.navigate('AddHopnobPage')} >
                          <Text style={{fontWeight:'600',fontFamily:'Open-sans', fontSize:RFValue(16,667),paddingHorizontal:wp(2),paddingVertical:wp(13), marginVertical:hp(2),  textAlign:'center', }}> 
                          Select <Text style = {{fontWeight:'700',fontFamily:'Open-sans', color:'#E4637C'}}>Our 
                          </Text> clothing images  </Text>
                          </TouchableOpacity>
                  <Image  width={wp(11)}  source ={ require ('../../assets/images/bottomSheet/arrow_circle.png')} />
        </View>
    
      {/* card1 */}
      {/* <View style={{ 
        paddingVertical:30,paddingHorizontal:5,width:wp(45)-22, backgroundColor:'#F3F3F3',
        marginTop:30,
        borderRadius:20 ,justifyContent:'space-around', alignItems:'center'
       }}>  */}
                     
      {/* </View> */}
      {/* card2 */}
      
      {/* <View style={{ paddingVertical:30,paddingHorizontal:5,width:wp(45)-22, backgroundColor:'#F3F3F3',
      marginTop:30,borderRadius:20 ,justifyContent:'space-around', alignItems:'center'}}> 
          <Image  width={wp(11)} height={wp(11)} source ={ require ('../../assets/images/addMe/checkLP2.png')} />
                  <TouchableOpacity onPress={() =>  navigation.navigate('AddHopnobPage')} >
                  <Text style={{fontWeight:'600',fontFamily:'Open-sans', fontSize:RFValue(16,667),marginVertical:hp(2),  textAlign:'center', }}> 
                  Select <Text style = {{fontWeight:'700',fontFamily:'Open-sans', color:'#E4637C'}}>Our 
                  </Text> clothing images  </Text>
                  </TouchableOpacity>
          <Image  width={wp(11)} height={35} source ={ require ('../../assets/images/bottomSheet/arrow_circle.png')} />
      </View> */}

     </View>
    )
  }