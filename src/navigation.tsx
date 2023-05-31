import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/login';
import Home from '../src/home';
import Profile from '../src/profile';
const Stack = createNativeStackNavigator();

const  Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/> 
                <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/> 
                <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;