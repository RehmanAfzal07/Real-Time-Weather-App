// import { View, Text, Image, TouchableOpacity,FlatList, ScrollView, StyleSheet, ViewBase} from 'react-native'
// import React from 'react'
// import Development from './Development'
// import ITSoftware from './ITSoftware'
// import Business from './Business'
// import FinanceAccounting from './FinanceAccounting'
// import { Button } from 'react-native-elements'


// const Home  = () => {
//   const [isVisible, setIsVisible]=React.useState(false)
//   const [Visible, setVisible]=React.useState(false)

//   const blender =[
//     {
//       id:1,
//       sourceImage: require('../assets/Blender.png'),
//       title: "Complete Blender Magacours: Begginer to... ",
//       subTitle:"Crating Unleashed",
//       review:4.6,
//       stars:"⭐⭐⭐⭐(1,970)",
//       price:"4900.00",
//     },
//     {
//       id:2,
//       sourceImage: require('../assets/Environment-artist.png'),
//       title: "Blender Environment Artist: Create 3D World. ",
//       subTitle:"GemeDev.tv Team, Rick",
//       review:3.2,
//       stars:"⭐⭐⭐(27,00)",
//       price:"22,900.00",
//     },
//     {
//       id:3,
//       sourceImage: require('../assets/blender3D.png'),
//       title: "the Ultimate Blender 3D Environment Course. ",
//       subTitle:"Alex Cordebard",
//       review:5.6,
//       stars:"⭐⭐⭐⭐⭐(240)",
//       price:"19,900.00",
//     },
//   ]
//   return (
//     <>
//       <ScrollView style={{marginBottom:10 }}>
//          <TouchableOpacity ><Text style={{display:'flex', marginTop:25, textAlign:"right", padding:10,fontSize:18,  }}>SIGN IN</Text></TouchableOpacity>
//          <View style={{flex:1,alignContent:"center",alignItems:"center"}}>
//          <Image style={{width:110, height:100,shadowColor:"#890989",shadowOffset:{width:10, height:10},
//           shadowOpacity:0.5, shadowRadius:2,elevation:20}} source={require("../assets/logo.png")}
//         />
//          </View>
//         <Text style={{fontSize:32, fontWeight:"900", textAlign:"center", }}>Learning that fits</Text>
//         <Text style={{fontSize:16, fontWeight:"400", marginBottom:50,textAlign:"center",}}>Skills for your present(and future)</Text>
     
      
//       <Text style={{fontSize:24, fontWeight:"600", padding:3,marginLeft:5}}>Besouse you viewed</Text>
//       <Text style={{fontSize:24, fontWeight:"500",color:"blue",marginLeft:5}}>"Creating 3D environment..."</Text>
       
      
       
//         <FlatList style={[styles.flatListCard, styles.cardElevation ]} horizontal={true}
//          keyExtractor={item=>item.id} data={blender} renderItem={({item})=>(
//          <View style={{padding:10}}>
//           <Image source={item.sourceImage} style={{width:150, height:100,borderRadius:10,shadowColor:"#890989",shadowOffset:{width:10, height:10}, shadowOpacity:0.5, shadowRadius:2,elevation:20}}/>
//           <Text style={{fontSize:16,fontWeight:"900"}}>{item.title}</Text>
//           <Text>{item.subTitle}</Text>
//           <Text style={{fontSize:16,fontWeight:"600"}}>{item.review}, {item.stars}</Text>
//           <Text style={{fontSize:16,fontWeight:"800"}}>PRK: {item.price}</Text>
//         </View>
//         )
//         }/>
        
          
            
//           <Text style={{fontSize:24, fontWeight:"bold", padding:10,marginBottom:10}}>Categories</Text>
//         <View style={{flexDirection:"row", width:"100%", margin:10, }}>
//         <View style={{flex:1,flexDirection:"row"}} horizontal={true}>
//           <View>
//             <TouchableOpacity  style={styles.button}  title="Development"
//              onPress={()=>setIsVisible(!isVisible)}><Text style={styles.text}>Development</Text></TouchableOpacity>
//               {isVisible && <Development title="Development"/>}
//           </View>
      
//           <ITSoftware title="IT & Software"/>
//           <Business title="Business"/>
//           <FinanceAccounting title="Finance & Accounting"/>
//         </View>
//           </View>
//         </ScrollView>
       
       
        
//     </>
//   )
// }

// export default Home 
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'white',
//     width:100,
//     height:50,
//     borderRadius: 100,
//     padding: 8,
//     marginHorizontal:10,
//     borderWidth:1,
//     borderColor:"black",
//     color:"black",
//   },
//   text: {
//     color: 'black',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });