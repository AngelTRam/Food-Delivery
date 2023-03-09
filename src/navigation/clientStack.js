import React, { useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductsScreen from '../screens/MenuProductsScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const ClientSearch = createNativeStackNavigator();
export default function ClientStack({ navigation, route }) {

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "RestaurantHomeScreen") {
            navigation.setOptions({ tabBarVisible: false })
        } else {
            navigation.setOptions({ tabBarVisible: true })
        }
    })
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
            <ClientSearch.Screen
                name='MenuProductsScreen'
                component={MenuProductsScreen}
                headerShown={false}
                options={() => {

                }}
            />
            <ClientSearch.Screen
                name='PreferenceScreen'
                component={PreferenceScreen}
                headerShown={false}
                options={() => {

                }}
            />
        </ClientSearch.Navigator>
    )
}
