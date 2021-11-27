import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "../../screens/splashscrem";
import HomeScreen from "../../screens/homescrem";
import login from "../../screens/login";
import Menu from "../../screens/homescrem"
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
 
const Component = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Menu" component={HomeScreen} />
      <Stack.Screen name="characrerProfile" component={HomeScreen} />
    </Stack.Navigator>
  
    
  
    );
};
export default Component;