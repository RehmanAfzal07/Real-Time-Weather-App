import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FinanceAccounting = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}> {props.title}</Text>
    </TouchableOpacity>
  )
}

export default FinanceAccounting

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      width:100,
      height:50,
      borderRadius: 100,
      padding: 8,
      marginHorizontal:10,
      borderWidth:1,
      borderColor:"black",
    },
    text: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  