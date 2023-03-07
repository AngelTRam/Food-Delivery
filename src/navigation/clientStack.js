import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';

const ClientSearch = createNativeStackNavigator();
export default function ClientStack() {
    return (
        <ClientSearch.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <ClientSearch.Screen
                name='SearchScreen'
                component={SearchScreen}
                headerShown={false}
                options={() => {
                  
                }}
            />
            <ClientSearch.Screen
                name='SearchResultScreen'
                component={SearchResultScreen}
                headerShown={false}
                options={() => {
                  
                }}
            />
            <ClientSearch.Screen
                name='RestaurantHomeScreen'
                component={RestaurantHomeScreen}
                headerShown={false}
                options={() => {
                  
                }}
            />
        </ClientSearch.Navigator>
    )
}
