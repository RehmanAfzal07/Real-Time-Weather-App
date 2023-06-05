import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Contact from '../Screen/Contact';
import Home from '../Screen/Home';

const Stack =createStackNavigator();
const screenOptionStyle ={
  headerStyle:{
    backgroundColor:"#9AC8D8",
  },
  headerTintColor:"white",
  headerBackTitle:"Back",
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Contact" component={Contact}/>
    </Stack.Navigator>
  )
}
const ContactStackNavigator =()=>{
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Contact" component={Contact}/>
    </Stack.Navigator>
  )
}

export { MainStackNavigator,ContactStackNavigator }