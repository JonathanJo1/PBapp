import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen'; // Import your new screen


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{ title: 'Login Page' }} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Home' }} 
                />
                {/* Add more screens here later */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
