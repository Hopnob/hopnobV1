import * as React from 'react';
import { useState } from 'react';
import { View,FlatList, StyleSheet,Image, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import { useSafeArea } from 'react-native-safe-area-context';

const initialLayout = { width: Dimensions.get('window').width };
export default function OutfitsPage() {
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
const FirstRoute = () => (
    <View style={{  backgroundColor: 'white', marginTop:24, }} >
            <Text style={{fontSize:12, fontWeight:'700'}}>RECENTLY ADDED</Text>
           <FlatList numColumns={3} 
                              keyExtractor={(item) =>item.id}
                              data = {people}
                              renderItem = {({item}) =>(
                                  <View style={{flex:1 , }}>
                                      <View style={styles.item}>
                                       {/* <Image style ={{padding:4}} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
                                      </View>
                                       {/* <Image style ={styles.item} source= {item.image} /> */}
                                  </View>
                              )}
            /> 
        </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#white', }]} >
    <Text>WORK</Text>
  </View>
);

    const ThirdRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white', }]} >
        <Text>CASUAL</Text>
      </View>
    );
    const ForthRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white', }]} >
        <Text>PARTY</Text>
      </View>
    );

    const FifthRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#white', }]} >
        <Text>OTHERS</Text>
      </View>

    );


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'ALL' },
    { key: 'second', title: 'WORK' },
    { key: 'third', title: 'CASUAL' },
    { key: 'forth', title: 'PARTY' },
    { key: 'fifth', title: 'OTHERS' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
    fifth: FifthRoute,
  });

  return (
    <View style={{paddingTop: insets.top}}>
    <View style={styles.main}>
          {/* title */}
          <View style={{backgroundColor:'white', width:'40%',alignItems:'flex-start',marginTop:20}}>
            <Text style={{color:'#2D3791',fontWeight:'700'}}>VIEW OUTFITS</Text>
            
        </View> 
        
        <View style={{width:'100%',height:'100%',  }}>
                        <TabView
                    navigationState={{ index, routes }}
                    renderTabBar={props => (
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
                    )}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    style={styles.container}
                    />
        </View>
 
    </View>

    </View>

    
  );
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


// import * as React from 'react';
// import {useState} from 'react';
// import { View, useWindowDimensions,StyleSheet, Text, FlatList,Image} from 'react-native';
// import { TabView, SceneMap,TabBar } from 'react-native-tab-view';




// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
// );

// const ThirdRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'pink' }} />
//   );
//   const ForthRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'red' }} />
//   );

//   const FifthRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'green' }} />
//   );

// export default function TabViewExample() {

//     const[people, setPeople] = useState([
//         {image: require('../../assets/images/wardrobe/allcloth.png'), id:'1'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'2'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'3'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'4'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'5'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'6'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'7'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'8'},
//         {image: require('../../assets/images/topsWardrobe/Rectangle100.png'), id:'9'},
      
//     ])
//     const FirstRoute = () => (
//         <View style={{ flex: 1, backgroundColor: 'white', marginTop:24,marginBottom:10 }} >
//            <Text style={{fontSize:12, fontWeight:'700'}}>RECENTLY ADDED</Text>
//            <FlatList numColumns={3} 
//                               keyExtractor={(item) =>item.id}
//                               data = {people}
//                               renderItem = {({item}) =>(
//                                   <View style={{flex:1 , }}>
//                                       <View style={styles.item}>
//                                        {/* <Image style ={{padding:4}} source= {require ('../../assets/images/wardrobe/allcloth.png')} /> */}
//                                       </View>
//                                        {/* <Image style ={styles.item} source= {item.image} /> */}
//                                   </View>
//                               )}
//             />
//         </View>
      
//       );

      
//     const renderScene = SceneMap({
//         first: FirstRoute,
//         second: SecondRoute,
//         third: ThirdRoute,
//         forth: ForthRoute,
//         fifth: FifthRoute,
    
//     });
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);

//   const [routes] = React.useState([
//     { key: 'first', title: 'ALL' },
//     { key: 'second', title: 'WORK' },
//     { key: 'third', title: 'CASUAL' },
//     { key: 'forth', title: 'PARTY' },
//     { key: 'fifth', title: 'OTHERS' },


//   ]);


//   return (
//     <View style={styles.main}>
//          {/* title */}
//          <View style={{width:'40%',alignItems:'flex-start'}}>
//             <Text style={{color:'#2D3791',fontWeight:'700'}}>VIEW OUTFITS</Text>
//         </View>

//                 <TabView  
//                     navigationState={{ index, routes }}
//                     renderScene={renderScene}
//                     onIndexChange={setIndex}
//                     initialLayout={{ width: layout.width }}
//                     renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'black'}}/>} // <-- add this line
//                     />
//     </View>
    
//     // <Text>Running</Text>
//   );
// }
// const styles = StyleSheet.create({
//         main:{
//             flex:1,
//             padding:24,
//             backgroundColor:'white',
//         },
         
//  item:{
//     marginRight:5,
//     marginTop:5,
//     backgroundColor:'#F5F5F5',
//     borderRadius:5,
//     width:100,
//     height:120 ,
//     justifyContent:'center',
//     alignItems:'center'
// },
//  dropdown: {
//     width:'100%',
//     backgroundColor:'#F3F3F3',
//     borderRadius:5,
//     alignItems:'center'
 
//   },
//   icon: {
//     marginRight: 5,
//   },
//   placeholderStyle: {
//     fontSize: 12,
//     fontWeight:'600',
//     paddingLeft:10,
//     paddingRight:10,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
 
// });