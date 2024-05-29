import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Button = ({children, onPress}) => {

      
  return (
   <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
      backgroundColor: '#358bdb',
      borderRadius: 4,
      elevation: 4,
      margin: 8,
      paddingHorizontal: 8,
      minWidth: '45%',
    },
    text:{
        textAlign: 'center',
        padding: 16,
        fontSize: 16,
        color: 'white',
    },
})