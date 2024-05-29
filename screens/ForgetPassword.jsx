import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const ForgetPassword = () => {
   const navigation = useNavigation();

   const changeHandler = ()=>{
    navigation.goBack();
   }

  return (
   <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      source={require('../assets/images/forget.jpg')} 
      style={styles.image}
      />
      </View>
      <View>

      </View>
      <View style={styles.formContainer}>
        <InputText label='New Password' />
        <InputText label='Confirm Password' />
        <View style={styles.buttoncontainer}>
        <Button onPress={changeHandler} style={styles.button}>Change Password</Button>
        </View>
     </View>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
     justifyContent: 'center',
  },
  imageContainer:{
    alignItems: 'center',
    marginTop: 80,
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  formContainer:{
    marginHorizontal: 20,
    marginTop: 30,
    padding:20,
    borderRadius:10,
    backgroundColor:'rgba(255, 255, 255, 0.3)',
  },
  buttoncontainer:{
    alignItems:'center',
 },
 button:{
  minWidth: '80%'
 },
})