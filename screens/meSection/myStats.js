import React ,{useState} from 'react';
import { Dimensions } from 'react-native';
import {ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import {
    PieChart,BarChart
  } from 'react-native-chart-kit';
  
export default function MyStats({ useNavigation }) {
    
      return (
         <View style={styles.appContainer}>
         
         <View style={{marginTop:15}}>
            <View>
            <Text style={{color:'#2D3791',fontSize:16,fontWeight:'700'}}>ANALYZING MY STYLE</Text>
            
            </View>
            <View style={{marginTop:15, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                 <ScrollView style={{backgroundColor: 'white',}} horizontal={true}>
                 <View style={{marginRight:10, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Image style ={{width:86,height:86}} source= {require ('../../assets/images/mePage/mystats/tops.png')} />
                <Text style={{fontSize:12,fontWeight:'700'}}>Tops</Text>
                <Text style={{fontSize:12,fontWeight:'700', color:'#E4637C'}}>35</Text>
                </View>

                <View style={{marginRight:10, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Image style ={{width:86,height:86}} source= {require ('../../assets/images/mePage/mystats/tshirt.png')} />
                <Text style={{fontSize:12,fontWeight:'700'}}>T-shirts</Text>
                <Text style={{fontSize:12,fontWeight:'700', color:'#E4637C'}}>35</Text>
                </View>

                <View style={{marginRight:10, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Image style ={{width:86,height:86}} source= {require ('../../assets/images/mePage/mystats/dresses.png')} />
                <Text style={{fontSize:12,fontWeight:'700'}}>Dresses</Text>
                <Text style={{fontSize:12,fontWeight:'700', color:'#E4637C'}}>35</Text>
                </View>

                <View style={{backgroundColor:'white', marginRight:10, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Image style ={{width:86,height:86}} source= {require ('../../assets/images/mePage/mystats/jeans.png')} />
                <Text style={{fontSize:12,fontWeight:'700'}}>Jeans  </Text>
                <Text style={{fontSize:12,fontWeight:'700', color:'#E4637C'}}>35</Text>
                </View>
                 </ScrollView>
                
            </View>
         </View>
         <View style={{marginTop:30}}>
            <Text style={{color:'#2D3791',fontSize:16,fontWeight:'700'}}>ANALYZING MY CLOSET COLOR</Text>
            <PieChart
        data={[
          {
            name: 'Light Red',
            population: 25 ,
            color: '#E56889',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
          {
            name: 'Yellow',
            population: 10,
            color: '#F5C161',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
          {
            name: 'Fire',
            population: 15,
            color: '#F19C3F',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
          {
            name: 'Cantaloupe',
            population: 15,
            color: '#F7C9AE',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
          {
            name: 'Light Pink',
            population: 20,
            color: '#F3BBE0',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
          {
            name: 'Orange ',
            population: 25,
            color: '#E97144',
            legendFontColor: 'black',
            legendFontSize: 10,
          },
        ]}
        width={322 }
        height={187}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />          
         </View>
         <View style={{marginTop:15}}>
            <Text style={{color:'#2D3791',fontSize:16,fontWeight:'700'}}>MONTH WISE % SHARE OF WARDROBE WORN</Text>
            <BarChart
                data={{
                labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [
                    {
                    data: [65, 70, 100, 70, 100, 40],
                    },
                ],
                }}
                width={327 }
                height={187}
                // yAxisLabel={'Rs'}
                chartConfig={{ 
                backgroundColor: '#1cc910',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                // decimalPlaces: 2,
                color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                }}
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
         </View>
         
     </View>


     
   );
  

}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     padding:24,
 }, 

});
