import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/Welcome';
import SingIn from '../screens/authScreens/SignIn';
import Home from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import SignUpScreen from '../screens/authScreens/SingUp';

const Auth = createNativeStackNavigator();

export function AuthStack() {
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
      name="SignUpScreen"  
      component={SignUpScreen}
      options = {{
        headerShown: false,
      }}
      />
      
    </Auth.Navigator>
  );
}
