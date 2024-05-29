import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import Icons from '../components/Icons'

const RegisterPage = () => {
    const navigation = useNavigation();

    const forgetHandler = () =>{
      navigation.navigate('Forget')
    }
    
    const LoginHandler = () =>{
        navigation.navigate('Login')
    }

  return (
    <View style={styles.container}>
    
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Discover Your Next Adventure</Text>
     </View>
     
     <View style={styles.formContainer}>
        <InputText label='Email' />
        <InputText label='Password' />
        <InputText label='Confirm Password'/>
        <View style={styles.button}>
        <Button>Log In</Button>
        </View>
        <TouchableOpacity style={styles.alreadyButton} onPress={LoginHandler}>
        <Text style={styles.alreadyText}>Already have an account</Text>
        </TouchableOpacity>
     </View>
    
     <View style={styles.alternate}>
        <Text style={styles.alternateText}>Continue with:</Text>
        <View style={styles.iconsCoantainer}>
        <Icons name="logo-facebook" size={40} color='grey'/>
        <Icons name="logo-twitter" size={40} color='grey'/>
        <Icons name="logo-google" size={40} color='grey'/>
        </View>
     </View>
    </View>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c8c8ff',
        flex: 1,
         justifyContent: 'center',
       },
       headerContainer:{
        alignItems: 'center',
       },
       header:{
        fontSize: 30,
        textAlign: 'center',
        color: '#6363eb',
       },
    formContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        padding:20,
        borderRadius:10,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
    },
    button:{
       alignItems:'center',
    },
    alreadyButton:{
        alignItems: 'center',
        marginBottom: 8,
    },
    alreadyText:{
        color: '#1c1cd1',
    },
    alternate:{
      alignItems:'center',
      padding: 20,
    },
    alternateText:{
     fontSize: 18,
     marginBottom:8,
     color: '#1c1cd1'
    },
    iconsCoantainer:{ 
        flexDirection: "row"
    },
})