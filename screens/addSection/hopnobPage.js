import React, { Component } from 'react';
import { useState } from 'react';

import { useSafeArea } from 'react-native-safe-area-context';
 
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground,Image ,FlatList,Dimensions  } from 'react-native';
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
 
    export default function AddHopnobPage({navigation}) {
      const insets = useSafeArea();
        
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
          
        ])
        const initialLayout = { width: Dimensions.get('window').width };
const FirstRoute = () => (

    <View style={{ flex: 1, backgroundColor: 'white', marginTop:24,marginBottom:10 }} >
           <FlatList numColumns={3} 
                              keyExtractor={(item) =>item.id}
                              data = {people}
                              renderItem = {({item}) =>(
                                  <View style={{flex:1 , }}>
                                      <View style={styles.item}>
                                       <Image style ={{width:70,height:105,  padding:4}} source= {require ('../../assets/images/wardrobe/allcloth.png')} />
                                      </View>
                                       {/* <Image style ={styles.item} source= {item.image} /> */}
                                  </View>
                              )}
            /> 
        </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
    <Text>WORK</Text>
  </View>
);

    const ThirdRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
        <Text>CASUAL</Text>
      </View>
    );
    const ForthRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
        <Text>PARTY</Text>
      </View>
    );

    const FifthRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white',padding:30 }]} >
        <Text>OTHERS</Text>
      </View>

    );


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'TOPS' },
    { key: 'second', title: 'JEANS' },
    { key: 'third', title: 'SHIRTS' },
    { key: 'forth', title: 'TROUSERS' },
    { key: 'fifth', title: 'SKIRTS' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
    fifth: FifthRoute,
  });
  
    return ( 
    <>
     <View style={{paddingTop: insets.top}}>
 </View> 
 <View style={styles.containerMain}>
             <View style={{ backgroundColor:'none', flexDirection:'row',justifyContent:'space-around',}}>
                <View style={{justifyContent:'flex-start'}}>
                 <Text style={{textAlign:'left', color:'#2D3791',fontWeight:'700'}}> HOPNOB IMAGE COLLECTION</Text>
                </View>
                <View style={{justifyContent:'flex-end'}}>
                    <Image style={{width:25,height:25}} source={ require( '../../assets/images/wardrobe/Arrowbutton.png')}/>
                </View>
             </View>

             <View style={{marginTop:6, backgroundColor:'none', flexDirection:'row',justifyContent:'space-around'}}>
                 <Text style={{textAlign:'left',fontSize:16,fontWeight:'400'}}>Choose images similar to what you own!</Text>
             </View>
             <View style={{flex:1}}>
                        <TabView
                       
                    navigationState={{ index, routes }}
                    renderTabBar={props => (
                        <TabBar
                        {...props}
                        renderLabel = {({route, focused})=>{
                            if(focused) { 
                                return <Text style={{ color: '#E4637C',fontSize:12,fontWeight:'700' }} >{route.title}</Text>;
                            }
                            return <Text style={{ color: '#D9D9D9',fontSize:12,fontWeight:'700' }} >{route.title}</Text>
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
        
             <View style={{marginTop:6,   flexDirection:'row',justifyContent:'space-around'}}>
                 <TouchableOpacity onPress={()=> navigation.navigate('WardrobePage')}>
                 <View style={{backgroundColor:'#E4637C',borderRadius:30,width:181,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'700',fontSize:14}}>Add to wardrobe</Text>
                 </View>
                 </TouchableOpacity>


             </View>    
             
      
         </View>     
    </>
        
   
    );
 
}
const styles = StyleSheet.create({
  containerMain: {
    flex:1,
    paddingTop:10,
    paddingHorizontal:24,
     backgroundColor:'white',
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
   button1: {
    width: '100%',
    padding:20,
    marginHorizontal:10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 100, //Here is the trick
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 40, //Here is the trick
  },
  textStyle: {
    color: '#fff',
 
  },    roundButton1: {
    width: 75,
height: 75,
justifyContent: 'center',
alignItems: 'center',
padding: 10,
borderRadius: 100,
backgroundColor: '#2D3791',
}
});
 