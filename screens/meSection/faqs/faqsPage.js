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
import { ScrollView } from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
 
export default function faqsPage({navigation}){
    const insets = useSafeArea();
    let [fontsLoaded] = useFonts({
        'Open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
        'Open-sans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
      });
      const [queOne, setQueOne] = useState(false);
      const [queTwo, setQueTwo] = useState(false);
      const [queThree, setQueThree] = useState(false);
      const [queFour, setQueFour] = useState(false);
      const [queFive, setQueFive] = useState(false);
      const [queSix, setQueSix] = useState(false);
      const [queSeven, setQueSeven] = useState(false);
      const [queEight, setQueEight] = useState(false);
      const [queNine, setQueNine] = useState(false);
   

      if (!fontsLoaded) {
        return <AppLoading />;
      }
      
    return(
        <>
         <StatusBar style='light'/>
        <View style={{paddingTop: insets.top,backgroundColor:'black'}}></View>
        

          <View style={styles.appContainer}>

        {/* back button and skip */}

            <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10, width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                  <View style={{ width:'100%', alignItems:'flex-start',marginTop:0}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('') }>
                            <Image width={20} height={20} source={require('../../../assets/images/backbutton.png')} />
                            </TouchableOpacity>
                          </View>

                  
            </View>
            {/* title */}
            <ScrollView>
            <Text style={{fontWeight:'400',fontSize:RFValue(20),marginTop:20, fontStyle:'Open-sans'}}>
              FAQ
            </Text>

            {/* <View style={{width:'100%', flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{width:'55%'}}>
                <Text style={{fontWeight:'400',fontSize:RFValue(20),marginTop:20, fontStyle:'Open-sans'}}>Questions? We have instant answers</Text>
                </View>

                <View style={{width:'45%',alignItems:'flex-end'}}>
                <Image width={wp(50 )} source={require('../../../assets/images/faqs.png')}/>
                </View>
            </View>          */}

           
             
          {/* que one */}
          <View style={{borderBottomWidth:0.5,marginBottom:10, borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>What is Hopnob?</Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueOne(!queOne)}>
                     {
                      queOne==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queOne ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>Hopnob is a fashion
                         app that builds your digital wardrobe, recommends outfit ideas and provides curated brands for the user to experience 
                         personalised shopping. 
                         </Text>
                        <Text></Text>
                        <Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans'}}>
                        1. Create your own virtual/digital wardrobe
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Simply take a photo of your clothes or upload from your gallery. Our Al will automatically remove the background and put in clothes information for you. Look at your clothes whenever you want and use them for styling and shopping.
                        </Text>
                    </View>
                    <Image width={wp(100)-41} source={require('../../../assets/images/faqs/1.png')} />
                    <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}><Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans'}}>2.</Text>Find the perfect outfit matches with your clothes or new items! You can pre-match your items with new ones before you buy.
                         </Text>
                    </View>
                    
                    <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginBottom:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}><Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans'}}>3.</Text>Shop from our house of curated fashion brands. With the added layer of personalization, experience a new way of buying fashion. 
                         </Text>
                    </View>
               </View>
               </>
        ) : null}
          </View>

          {/* que two */}
                    <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>What kind of information will be shown if I open my wardrobe?</Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueTwo(!queTwo)}>
                     {
                      queTwo==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queTwo ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        The wardrobe page is a collection of all your clothing images uploaded on Hopnob. You can upload via 3 ways - use your camera to click the garment image or upload from your gallery or choose a similar garment from our image repository. Higher the clothes, higher the number of outfits you can get from our algorithm. 
                         </Text>
                    </View>
               </View>
               </>
        ) : null}
          </View>
          {/* que three */}
          <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>
                    Report something on Hopnob
                      </Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueThree(!queThree)}>
                     {
                      queThree==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queThree ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        If you find inappropriate posts or photos including spam, or any other offensive activity, or hate speech or symbol, you can report to us. Just share your feedback via the chat buddy and we will reach out to you.
                         </Text>
                    </View>
               </View>
               </>
        ) : null}
          </View>

           {/* que four */}
           <View style={{borderBottomWidth:0.5,marginBottom:10, borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>I can’t get outfit suggestions. </Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueFour(!queFour)}>
                     {
                      queFour==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queFour ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Hopnob recommends outfits based on the product attributes and seasonal information of each cloth. If you are getting no recommendation, please check the below. 
                         </Text>
                        <Text></Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans'}}>
                        1) There is LESS variety of clothes in your wardrobe to create outfits. 
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        2) Tap the refresh button on the right side of "Try these outfits today!"
                        </Text>
                    </View>
                     
               </View>
               </>
        ) : null}
          </View>

          {/* que five */}
            <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>How can I use the calendar?</Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueFive(!queFive)}>
                     {
                      queFive==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queFive ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Record your outfits on the calendar.
                        </Text>
                        <Text></Text>

                        <Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans' }}>
                        1. Recording outfits
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        1) Choose the date.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        2) Click on the Plus sign on the right side of the date
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        3) It will take you to the outfits page, from where you can add any outfit to the selected date.
                        </Text>

                        <Text></Text>

                        <Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans' }}>
                        2. Deleting outfit record
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        1) Click on the cross button on the bottom left of each outfit tile to delete an outfit record
                        </Text>
                         
                        <Text></Text>

                        <Text style={{fontWeight:'700',fontSize:12,fontFamily:'Open-sans' }}>
                        3. Tips
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        1) You can record 3 outfits per day.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        2) Save your most favorite outfits in the log
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        3) Use the calendar to avoid repetition
                         </Text>
                        
                    </View>
               </View>
               </>
        ) : null}
          </View>
          {/* que six */}
          <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>
                    Tell me how to capture a clean photo of clothes.
                      </Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueSix(!queSix)}>
                     {
                      queSix==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queSix ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        1. Place your clothes on a clean background.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        (especially avoid if there are other clothes in the background)
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        2. Try to remove wrinkles from the clothes.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        3. Shoot in bright lighting to remove the shadow. (Please use a cell phone flash if necessary)
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        4. Check the image of the clothes removed from the background in the preview.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        5. If you want to register a cleaner image, please use the method below.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        4. Check the image of the clothes removed from the background in the preview.
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        {`\u2022`} Find the garment image online Or
                        </Text>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        {`\u2022`} Select clothes similar to your clothes from our image collection 
                        </Text>
                        
                    </View>
               </View>
               </>
        ) : null}
          </View>

           {/* que seven */}
           <View style={{borderBottomWidth:0.5,marginBottom:10, borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>
                    Can I adjust the color of my clothes?
                      </Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueSeven(!queSeven)}>
                     {
                      queSeven==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queSeven ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Yes, you can.  Click on the garment image from your wardrobe page. It will open the product page where you can manually change the color of the selected garment.
                         </Text>
                    </View>
                    
               </View>
               </>
        ) : null}
          </View>

          {/* que eight */}
                    <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>
                    Can I back up my data?</Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueEight(!queEight)}>
                     {
                      queEight==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queEight ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Your data is automatically backed up. So all you have to do is log on. You can change your device, delete and reinstall Hopnob without worrying about losing data.
                         </Text>
                    </View>
               </View>
               </>
        ) : null}
          </View>
          {/* que nine */}
          <View style={{borderBottomWidth:0.5, marginBottom:10,borderColor:'#D9D9D9',}}>
          <View style={{flexDirection:'row', paddingBottom:10, width:'100%',backgroundColor:'white', alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'85%',}}>
                    <Text style={{fontWeight:'700',fontSize:16,color:'#2D3791'}}>
                    What statistics can I get?
                      </Text>
                </View>
                <Shadow
                      distance={10}
                      // startColor={'#E2E4E5'}
                      startColor={'#F7F7F7'}  offset={[0, 2]}
                      radius={30}> 
                    <View style={{ backgroundColor:'white', borderRadius:10,}}>
                    <TouchableOpacity onPress={()=> setQueNine(!queNine)}>
                     {
                      queNine==false?
                      <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text>
                      :<Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>-</Text>
                     }
                        {/* <Text style={{fontWeight:'400',textAlign:'center',paddingVertical:8,paddingHorizontal:15, fontSize:22,color:'black'}}>+</Text> */}
                    </TouchableOpacity>
                  </View>
                  </Shadow> 
            </View>
            {queNine ? (
               <>
               <View>
               <View style={{backgroundColor:'#F0F1FA', padding:10,borderRadius:10,marginVertical:10}}>
                        <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                        Hopnob provides the following statistics.
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         1. Product category wise count
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         2. Color statistics
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         3. Month wise %share of your wardrobe worn
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         </Text>
                         <Text style={{fontWeight:'600',fontSize:12,fontFamily:'Open-sans' }}>
                         More statistics will be provided in the future, so stay tuned!
                        If you want to see anything else, we will be happy to hear from you. Just write to us via the chat buddy. 
                         </Text>
                    </View>
               </View>
               </>
        ) : null}
          </View>





           </ScrollView>
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
