import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.card}>
      <TextInput style={styles.input}/>
      </View>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  container:{},
  label:{
    fontSize: 18,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input:{ 
    height: 30,
    paddingHorizontal: 10,
  },
})