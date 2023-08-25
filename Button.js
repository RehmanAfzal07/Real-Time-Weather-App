import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
     
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#13547a',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});


export default Button;
