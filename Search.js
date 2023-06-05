import { Dimensions, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {EvilIcons} from '@expo/vector-icons'

const Search = ({fetchWeatherData}) => {
    
    const [cityName, setCityName]=React.useState('')
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder='Search City'
        value={cityName}
        onChangeText={(text)=>setCityName(text)}
      />
     <EvilIcons name='search' size={28} color='black'
        onPress={()=>fetchWeatherData(cityName)}
     />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchBar:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:Dimensions.get('screen').width-20,
        borderWidth:1.5,
        paddingVertical:10,
        borderRadius:25,
        marginHorizontal:10,
        paddingHorizontal:10,
        backgroundColor:"lightgray",
    }
})
















// const Search = () => {
//    
//   return (
    
//   )
// }

// export default Search

// const styles = StyleSheet.create({
    
// })