import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Home</Text>
      <TouchableOpacity title="Goto to Contact"
        onPress={()=>navigation.navigate("Contact")}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
  }
})