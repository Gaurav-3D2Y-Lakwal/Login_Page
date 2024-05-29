import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from '../components/Button'
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const LandingPage = () => {
    const navigation = useNavigation();

    const SignupHandler = ()=>{
        navigation.navigate('Register');
    }

    const LoginHandler = ()=>{
        navigation.navigate('Login');
    }

  return (
    <View style={styles.container} >
        <ImageBackground
        source={require('../assets/images/landing.jpg')}
        style={styles.image}/>
       <View style={styles.headerContainer}>
         <Text style={styles.header}>Discover Your Next Adventure</Text>
         <Text style={styles.subheader}>Log In or Create an Account to Embark on Your Journey</Text>
       </View>  
       <View style={styles.buttons} >
       <Button onPress={SignupHandler}>Sign Up</Button>
       <Button onPress={LoginHandler} >LogIn</Button>
       </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
     backgroundColor: '#fff',
     flex: 1,
    },
    image:{
        height: height/2.5,
        width: width,
    },
    headerContainer:{
      alignContent: 'center',
      margin: 20,
      padding: 16,
      textAlign:'center',
    },
    header:{
        color: '#818e8f',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subheader: {
        color: '#818e8f',
        fontSize: 24,
    },
    buttons:{
        flexDirection: 'row',
        padding: 24,
        justifyContent: 'center',
    },
    
})