import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingPage from '../screens/LandingPage'
import RegisterPage from '../screens/RegisterPage';
import LoginPage from '../screens/LoginPage';
import ForgetPassword from '../screens/ForgetPassword';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Landing' component={LandingPage}/>
            <Stack.Screen name='Register' component={RegisterPage}/>
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Forget' component={ForgetPassword}/>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Navigation

