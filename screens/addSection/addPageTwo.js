import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import React from 'react';
import { StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import TopNavigationBarPrimary from '../components/topNavigationP';
import BottomNavigationBarCMP from '../components/bottom_navbar';
import { StatusBar } from 'expo-status-bar';


export default function AddPageTwo({navigation}){
   const renderInner =() =>( 
        <View style={{height:'100%', backgroundColor:'white',paddingLeft:30}}>
            <TouchableOpacity onPress={() =>  navigation.navigate('AddFromCameraPage')} >
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20 }}> 
               
               <View style={{ width:42,height:36, padding:10, marginRight:20 }}>
               <Image style={{width:40, height:32 ,} }  source ={ require ('../../assets/images/bottomSheet/camera.png')} />
                   
               </View>
               <View style={{marginRight:50,paddingTop:15}}>
               <Text style={{fontSize:14, fontWeight:'700' }}  > <Text style={{color:'#E4637C'}}> Click </Text>  from your camera </Text> 
                   
               </View>
               <View style={{paddingTop:15}}>
               <Image style={{width:35, height:35,}} source ={ require ('../../assets/images/bottomSheet/bottomarrow.png')} />
                   
               </View>
               </View>        

            </TouchableOpacity>
            <TouchableOpacity onPress={() =>  navigation.navigate('Gallerycmp')} >
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20 }}>  
                <View style={{ width:42,height:36, padding:10, marginRight:20 }}>
                <Image style={{width:44.9, height:32.86}}  source ={ require ('../../assets/images/bottomSheet/upload.png')} />
                </View>
                <View style={{marginRight:45,paddingTop:15}}>
                <Text style={{fontSize:14, fontWeight:'700'}}> <Text style={{color:'#E4637C'}}> Upload </Text>  from your gallery </Text> 
                </View>
                <View style={{paddingTop:15}}>
                <Image style={{width:35, height:35}} source ={ require ('../../assets/images/bottomSheet/bottomarrow.png')} />
                </View>
                </View>        
            </TouchableOpacity>
        </View>
        );

   const renderHeader =() => (
        <View style={{backgroundColor:'white', paddingLeft:30, borderTopLeftRadius:20, borderTopRightRadius:20}}> 
            <Text style={{ color:'#2D3791', fontSize:16, fontWeight:'700'}}> Add your clothing images </Text>
        </View> 

           );
     
      const sheetRef = React.useRef(null);
    return(
        <View style={styles.appContainer}>
            <StatusBar style='dark'/>
            <View style={{width:'100%',paddingTop:40, backgroundColor:'white'}}>
            <TopNavigationBarPrimary navigator={navigation} />
            </View>

    <View style={{width:"100%",marginTop:40, alignItems:'center'}}>
         <Image style={{width:327, height:150}} source ={ require ('../../assets/images/addMe/bannerLP2.png')} />
    </View>
     
     <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}> 
            {/* card1 */}
            <View style={{ padding:10, width:155,height:184, backgroundColor:'#F3F3F3',
            marginTop:30,
            borderRadius:20 ,justifyContent:'space-around', alignItems:'center'}}> 
                <Image style={{width:35, height:35}} source ={ require ('../../assets/images/addMe/addLP2.png')} />
                        <TouchableOpacity  onPress={() => sheetRef.current.snapTo(0)} >
                            <Text style={{fontSize:16, textAlign:'center', fontWeight:'600'}}>
                                <Text style={{color:'#E4637C'}}>Add </Text>
                            your clothing images 
                            </Text>
                        </TouchableOpacity>
                <Image style={{width:35, height:35}} source ={ require ('../../assets/images/bottomSheet/arrow_circle.png')} />
            </View>
            {/* card2 */}
            
            <View style={{ padding:10, width:155,height:184, backgroundColor:'#F3F3F3',
            marginTop:30,
            borderRadius:20 ,justifyContent:'space-around', alignItems:'center'}}> 
                <Image style={{width:35, height:35}} source ={ require ('../../assets/images/addMe/checkLP2.png')} />
                        <TouchableOpacity onPress={() =>  navigation.navigate('AddHopnobPage')} >
                        <Text style={{color:'black', fontSize:16,textAlign:'center', fontWeight:'600'}}> 
                        Select <Text style = {{color:'#E4637C'}}> Our 
                        </Text>  clothing images  </Text>
                        </TouchableOpacity>
                
                <Image style={{width:35, height:35}} source ={ require ('../../assets/images/bottomSheet/arrow_circle.png')} />
            </View>
     
     </View>
     <View style={{position:'absolute',backgroundColor:'white', bottom:0,width:'100%'}}>
        <BottomNavigationBarCMP navigator={navigation}/>
        </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[220, 100, 0]}
        borderRadius={10}
        renderHeader={renderHeader}
        renderContent={renderInner}
      />
     </View>
    )
}



const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white'
 },  
});
