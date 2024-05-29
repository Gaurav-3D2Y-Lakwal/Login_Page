import { StyleSheet, Text, View } from 'react-native'
import {Ionicons } from '@expo/vector-icons'

const Icons = ({name, size, color}) => {
  return (
    <Ionicons style={styles.icons} name={name} size={size} color={color}  />
  )
}

export default Icons

const styles = StyleSheet.create({
    icons:{
        marginHorizontal: 8,
    }
})