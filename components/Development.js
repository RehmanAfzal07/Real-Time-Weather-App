import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Development = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <Text>this is the development style this is the development style this is the</Text>
    </View>
  )
}

export default Development

const styles = StyleSheet.create({
  
})














// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'

// const Development = (props) => {
//   return (
//     <>
//     <TouchableOpacity style={styles.button} >
//       <Text style={styles.text}> {props.title}</Text>
//     </TouchableOpacity>
    
//     </>
//   )
// }

// export default Development

// const styles = StyleSheet.create({
//     button: {
//       backgroundColor: 'white',
//       width:100,
//       height:50,
//       borderRadius: 100,
//       padding: 8,
//       marginHorizontal:10,
//       borderWidth:1,
//       borderColor:"black",
//     },
//     text: {
//       color: 'black',
//       textAlign: 'center',
//       fontWeight: 'bold',
//     },
//   });
  