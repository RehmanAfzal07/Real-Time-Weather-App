import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackNavigator,ContactStackNavigator } from './StackNavigator'
import {createBottomNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator}/>
      <Tab.Screen name="Contact" component={ContactStackNavigator}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})