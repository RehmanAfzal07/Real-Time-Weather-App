import { StyleSheet, View } from 'react-native'
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
  backgroundColor:"#e4efe9",
  shadowColor: 'grb(0,0,0)', // Set the shadow color
  shadowOffset: {
    width: 2, // Set the horizontal offset
    height: 4, // Set the vertical offset
  },
  shadowpacity: 0.9, // Set the opacity of the shadow
    shadowRadius: 3.84, // Set the radius of the shadow spread
    elevation: 1, // For Android, use elevation instead of shadow properties
    marginTop: "12%",
    margin:20,
    padding:10,    // Optional margin for spacing 
}
})
















