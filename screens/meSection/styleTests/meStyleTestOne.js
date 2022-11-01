import React from "react";
import { useState } from 'react';
import { FlatList,useWindowDimensions , Dimensions,StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import BottomNavigationBarCMP from "../../components/bottom_navbar";
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('window').width };
import { SearchBar } from 'react-native-elements';
import SwitchSelector from "react-native-switch-selector";

export default function MeStyleTestOne({navigation}){
    const insets = useSafeArea();
     
    const layout = useWindowDimensions();

    const gender = [
      { label: "Female", value: "1" },
      { label: "Male", value: "2" },
      { label: "Both", value: "3" }
    
    ];
    const FirstRoute = () => (
      <View style={{ width:'100%',height:'100%', backgroundColor: '#ff4081' }} >
    
        </View>
    );
    
    const SecondRoute = () => (
      
      <View style={{ width:'100%',height:'100%', backgroundColor: 'white' }} >
        <Text style={{marginTop:20,marginBottom:15, fontWeight:'700',fontSize:16,color:'#2D3791'}}>WE ARE SHOPPING FOR</Text>
        <SwitchSelector
                    backgroundColor='#F5F5F5'
                    options={gender}
                    textColor='black'
                    buttonColor='#E4637C'
                    selectedColor='white'
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    />
        <Text style={{marginTop:24,fontWeight:'700',fontSize:16,color:'#2D3791'}}>I USUALLY SHOP FOR</Text>
        
    
        <View  >
          <View style={{marginVertical:15, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{borderRadius:50,borderWidth:1,justifyContent:'space-around',alignItems:'center',paddingVertical:10,paddingHorizontal:50}}>
              <Text style={{fontSize:12,fontWeight:'700'}}> Party</Text>
            </View>
            <View style={{borderRadius:50,borderWidth:1,justifyContent:'space-around',alignItems:'center',paddingVertical:10,paddingHorizontal:50}}>
              <Text style={{fontSize:12,fontWeight:'700'}}> Casual</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{borderRadius:50,borderWidth:1,justifyContent:'space-around',alignItems:'center',paddingVertical:10,paddingHorizontal:50}}>
              <Text style={{fontSize:12,fontWeight:'700'}}> Work</Text>
            </View>
            <View style={{borderRadius:50,borderWidth:1,justifyContent:'space-around',alignItems:'center',paddingVertical:10,paddingHorizontal:50}}>
              <Text style={{fontSize:12,fontWeight:'700'}}> Ethnic</Text>
            </View>
          </View>
        </View>
        <View style={{ width:'100%',height:'40%',backgroundColor:'white'}}>
          <View style={{justifyContent:'space-around',alignItems:'center',position:'absolute',bottom:0, flexDirection:'row'}}>
            <View style={{width:'75%'}}>
                <Text style={{fontSize:24,fontWeight:'400'}}>01/ <Text style={{fontSize:12,fontWeight:'400'}}>2</Text>  </Text>
            </View>
            <View style={{width:'25%'}}>
            <TouchableOpacity  >
                                            <Image style={{width:71,height:71}} source={ require ('../../../assets/images/Introductory/Next.png')}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
    
    
        </View>
    );
    const ThirdRoute = () => (
      <View style={{ width:'100%',height:'100%', backgroundColor: '#673ab7' }} />
    );
    const ForthRoute = () => (
      <View style={{ width:'100%',height:'100%', backgroundColor: '#673ab7' }} />
    );
    
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
      forth: ForthRoute,
    
    });
    


  

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'BRANDS' },
      { key: 'second', title: 'STYLE' },
      { key: 'third', title: 'LIKES' },
      { key: 'forth', title: 'DISLIKES' },

    ]);

    const renderTabBar = props => (
      <TabBar
      {...props}
      renderLabel = {({route, focused})=>{
          if(focused) { 
              return <Text style={{ color: '#E4637C',fontSize:10.5,fontWeight:'700' }} >{route.title}</Text>;
          }
          return <Text style={{ color: '#D9D9D9',fontSize:10.5,fontWeight:'700' }} >{route.title}</Text>
      } }
      style={{backgroundColor: 'white', }}
      />
 
    );
   

      const [search,setSearch] = useState('');

     const updateSearch=()=>{
        setSearch(search);
      }
    

    return(<>
         <View style={{paddingTop: insets.top}}>
           
        </View>
       
        <View style={{backgroundColor:'white', flex:1,width:'100%' }}>
        
        <View style={{flex:1,backgroundColor:'green',marginHorizontal:24,marginTop:12, marginBottom:70}}>
        
        <View style={{width:'100%',backgroundColor:'white', }}>
            <View style={{width:'100%'}}><Text style={{textAlign:'right',fontWeight:'600',fontSize:12}}>SKIP</Text></View>

            <View style={{width:'100%'}}><Text style={{textAlign:'left',fontSize:22,fontWeight:'400'}}>Brands you like</Text></View>

            <View style={{width:'100%'}}>
            <SearchBar
            style={{borderRadius:10}}
            placeholder="Search Here..."
            onChangeText={updateSearch}
          value={search}
          lightTheme
        />
            </View>
        </View>
        <View style={{width:'100%',height:'100%',backgroundColor:'pink', }}>
            
            <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
     
      initialLayout={{ width: layout.width }}
    />
        </View>

        </View>

       
        <View style={{position:'absolute',bottom:0,width:'100%' }}>
            <BottomNavigationBarCMP navigator={navigation}/>
        </View>
        </View>
    </>
       
    )
}
const styles = StyleSheet.create({
    scene: {
      flex: 1,
   
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