import { View, Text } from 'react-native'
import React from 'react'
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

export function AppStack() {
    return (
        <App.Navigator>
            <App.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="RestaurantMapScreen"
                component={RestaurantMapScreen}
                options={{
                    headerShown: false,
                }}
            />
        </App.Navigator>
    )
}