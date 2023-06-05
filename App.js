import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Waether from './Weather';

const App = () => {
  return (
    <View style={styles.container}>
    <Waether/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
container:{
  flex:1,
  
}
})

















// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const API_KEY = 'bdad9ca5fdffb89d6eb86bfed5255802';

// export default function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     if (city) {
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//         .then(response => {
//           setWeather(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   }, [city]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather App</Text>
//       {weather && (
//         <View style={styles.weatherContainer}>
//           <Text style={styles.location}>{weather.name}, {weather.sys.country}</Text>
//           <Text style={styles.temperature}>{Math.round(weather.main.temp)}°C</Text>
//           <Text style={styles.description}>{weather.weather[0].description}</Text>
//         </View>
//       )}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
         
//           onChangeText={setCity}
//         />
//               <Icon name="search" size={28} color="#aaa" style={styles.icon} />
//       </View>     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginVertical:70,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 42,
//     backgroundColor:"green",
//     color:"white",
//     width:"95%",
//     textAlign:"center",
//     fontWeight: 'medium',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
    
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize:24,
//   },
//   weatherContainer: {
//     alignItems: 'center',
//   },
//   location: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   temperature: {
//     fontSize: 42,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 24,
//     marginBottom:20,
//     textDecorationColor:"#743932"
//   },
// });
















// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import DrawerNavigator from './navigation/DrawerNavigator'

// export class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <DrawerNavigator/>
//       </NavigationContainer>
//     )
//   }
// }

// export default App












// //-------------------practice U-Demmy App--------------
// // import { ScrollView, StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import Home from './components/Home'
// // import Development from './components/Development'

// // const App = () => {
// //   return (
// //     <>
// //       <ScrollView >
// //       <Home/>
      
// //       </ScrollView>
     
      
// //     </>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({})









































// //--------------------Raper View-----------------------
// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import PagerView from 'react-native-pager-view'

// // const App = () => {
// //   return (
// //       <PagerView style={styles.pagerView}>
// //       <View key="1">
// //         <Text>This is First Page</Text>
// //       </View>
// //       <View key="2">
// //         <Text>This is Second Page</Text>
// //       </View>
// //     </PagerView>
    
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   pagerView:{
// //     flex:1,
// //     backgroundColor:"mint"
// //   }
// // })








































// //--------------Confetti Canon with Cards---------------------

// // import { FlatList, StyleSheet, Text, View, Image, TextInput } from "react-native";
// // import ConfettiCannon from 'react-native-confetti-cannon';
// // import React from "react";
// // import { Button } from "react-native-elements";

// // const App = () => {
// //   const [Btn, setBtn]=React.useState(false);
// //   const postData = [
// //     {
// //       name: "Ali Zohain",
// //       picture: "url to picture",
// //       postImg:
// //         "https://i.pinimg.com/236x/0c/a3/27/0ca327f4d0d7a9ada2987946259669d8.jpg",
// //       likes: 23,
// //       share: 2,
// //       comment:"Comments",
// //     },
// //     {
// //       name: "Saim Khan",
// //       picture: "url to picture",
// //       postImg:
// //         "https://media.istockphoto.com/id/1414548541/photo/lakes-and-streams-of-the-eastern-sierras.jpg?b=1&s=170667a&w=0&k=20&c=xWgQ0vXYp9Xr6czRJqu2Ib7mAxm0-ZuwuMp4F3t0o6Y=",
// //       likes: 23,
// //       share: 2,
// //       comment:"Comments",
// //     },
// //     {
// //       name: "Nabail Saif",
// //       picture: "url to picture",
// //       postImg:
// //         "https://w0.peakpx.com/wallpaper/936/186/HD-wallpaper-inside-the-forest-graphy-forest-cottages-nature-forests-high-quality-scenery.jpg",
// //       likes: 23,
// //       share: 2,
// //       comment:"Comments",
// //     },
// //   ];

// //   const _cretePost = ({ item }) => (
// //     <View style={[styles.card, styles.cardElevation] }>
// //       <View >
    
// //         <Text style={{fontSize:26, fontWeight:"600",marginTop:-40,}}>{item.name}</Text>
// //         <Image
// //           style={{ width: "100%", height: 250, borderRadius:10, }}
// //           source={{ uri: item.postImg }}
// //         />
// //         <View style={{display:"flex", flexDirection:"row", padding:10}}>
// //         <View ><Text style={{marginEnd:100}}> 🥰 Like</Text></View>
// //         <View ><Text style={{marginEnd:100}}> ❤️ Share</Text></View>
// //         </View> 
// //         <TextInput  value={item.comment}
// //           style={{borderRadius:5, padding:4 ,width: "100%",backgroundColor:"#859599", color:"#f6f6f6"}}
// //         />
// //       </View>
// //     </View>
// //   );

    
  
// //   return (
// //     <View style={{flex:1, backgroundColor: "#f6f6f6", paddingVertical:30,  }}>
// //        <FlatList data={postData} renderItem={_cretePost} />
// //        <Button color="red" title={"Two Start Confetti Double Press"} onPress={()=>setBtn(!Btn)}/>
// //        {Btn && <ConfettiCannon count={50} origin={{x: -10, y: 0}}   fallSpeed={1000}/>
// //        }
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //     card:{
// //       backgroundColor: 'white',
// //       borderRadius: 8,
// //       paddingVertical: 45,
// //       paddingHorizontal: 25,
// //       width: 300,
// //       height:370,
// //       marginVertical: 10,
// //       marginHorizontal:20,
      
// //     },
// //     cardElevation:{
// //       elevation: 20,
// //       shadowColor: '#52006A',
// //     }

// // });
















// // //-------------------------- LIst with Array Items ------------------
// // // import { StyleSheet, ScrollView,Text, View, Image } from 'react-native'
// // // import React from 'react'
// // // import { FlatList } from 'react-native'

// // // const App = () => {
// // //   const numberArray=[1,2,3,4,5,6]
// // //   const stringArray=["Ali", "Ahmad", "Basit", "Kashif", "Sameed"]
// // //   const imageArray=[
// // //     "https://w0.peakpx.com/wallpaper/936/186/HD-wallpaper-inside-the-forest-graphy-forest-cottages-nature-forests-high-quality-scenery.jpg",
// // //     "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Best-HD-Nature-Pictures.jpg",
// // //     "https://media.istockphoto.com/id/1414548541/photo/lakes-and-streams-of-the-eastern-sierras.jpg?b=1&s=170667a&w=0&k=20&c=xWgQ0vXYp9Xr6czRJqu2Ib7mAxm0-ZuwuMp4F3t0o6Y=",
// // //     "https://i.pinimg.com/236x/0c/a3/27/0ca327f4d0d7a9ada2987946259669d8.jpg",

// // //     ]
// // //   return (

// // //     <View>
// // //     <FlatList data={imageArray}
// // //           renderItem={({item})=>(
// // //              <View
// // //           style={{flex:1,padding:20, width:250,height:300,
// // //            padding: 10, }}>
// // //            <Image source={{uri: item}}
// // //             style={{flex:1, width: 250, height: 250, }}
// // //            />
// // //           </View>
// // //           )}
// // //       />
// // //     </View>
// // //   )
// // // }

// // // export default App

// // // const styles = StyleSheet.create({

// // // })
