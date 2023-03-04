import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/Welcome';
import SingIn from '../screens/authScreens/SignIn';
import Home from '../screens/HomeScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen 
      name="WelcomeScreen" 
      component= {WelcomeScreen}
      options = {{
        headerShown: false,
      }}
      />
      <Auth.Screen 
      name="SingIn" 
      component= {SingIn}
      options = {{
        headerShown: false,
      }}
      />
      <Auth.Screen 
      name="HomeScreen" 
      component={Home}
      options = {{
        headerShown: false,
      }}
      />
    </Auth.Navigator>
  );
}
