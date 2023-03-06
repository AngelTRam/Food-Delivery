import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/Welcome';
import SingIn from '../screens/authScreens/SignIn';
import Home from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from '../navigation/DrawerNavigator';

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
      name="DrawerNavigator"  
      component={DrawerNavigator}
      options = {{
        headerShown: false,
      }}
      />
      <Auth.Screen 
      name="RestaurantMapScreen"  
      component={RestaurantMapScreen}
      options = {{
        headerShown: false,
      }}
      />
    </Auth.Navigator>
  );
}
