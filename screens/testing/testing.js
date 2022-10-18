// //  //TestingPage.js
// // import React, { Component } from 'react'
// // import { StyleSheet, Text, View } from 'react-native'
// // import { client } from '../../src/graphql/Client'
// // import { Headlines } from '../../src/graphql/Queries'

// // // import { Headlines } from './src/graphql/Queries'
// // class TestingPage extends Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <View style={styles.header}>
// //           <Text style={styles.headerText}>Headlines TestingPage</Text>
// //         </View>
// //         <View style={styles.contentContainer}>
// //           <Text>Open up TestingPage.js to start working on your app!</Text>
// //         </View>
// //       </View>
// //     )
// //   }
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff'
// //   },
// //   header: {
// //     marginTop: 50,
// //     alignItems: 'center',
// //     borderBottomWidth: StyleSheet.hairlineWidth
// //   },
// //   headerText: {
// //     marginBottom: 5,
// //     fontSize: 30,
// //     fontWeight: 'bold'
// //   },
// //   contentContainer: {
// //     marginTop: 30,
// //     alignItems: 'center',
// //     justifyContent: 'center'
// //   }
// // })
// // export default TestingPage
 

// import { StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
// // import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import  ApolloClient  from 'apollo-boost';
// import  ApolloProvider  from 'apollo-boost';
// import  InMemoryCache  from 'apollo-boost';
// import React from 'react';
// import {useQuery, gql} from '@apollo/client';
 
// const client = new ApolloClient({
//     uri : 'https://graphql.anilist.co/',
//     cache: new InMemoryCache(),
//   })
  
//   const AnimeList = gql'query Query {
//     Page {
//       media {
//         siteUrl
//         title {
//           english
//           native
//         }
//         description
//         coverImage {
//           medium
//         }
//         bannerImage
//         volumes
//         episodes
//       }
//     }
//   }'
//   ;
//   const {loading, error, data} = useQuery(AnimeList);

 
   
//     export default function TestaddPage() {
 
        
//   return (
//      <View style={styles.appContainer}>
  
//         <Text>2</Text>
//         <Text>2</Text>

        
//      </View>
     
//    );
//     }

 

// const styles = StyleSheet.create({
//  appContainer:{
//      flex:1,
//      backgroundColor:'white',
//      padding:10,
//  }, 
//  topNavBar:{
//      paddingTop:10,
//      width:'100%',
//  },
//  bottomNavBar:{
//      bottom:0,
//      paddingTop:10,
//      width:'100%',
//      position:'absolute',
//  },banner:{
//      width:'100%',
//      marginTop:30,
    

//  },clothing:{
//      width:155,
//      height:184,
//      backgroundColor:'#F3F3F3',
//      marginTop:30,
//      borderRadius:20,
//      paddingVertical:10,
//      paddingHorizontal:5,
//  },
//  ourImage:{
//     width:'100%',
//     backgroundColor:'#C87600',
//     marginTop:30,
//     borderRadius:20,
//     paddingVertical:10,
//     paddingHorizontal:5,
// },
 
// });
