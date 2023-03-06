import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import Home from '../screens/HomeScreen';
import MyAccount from '../screens/MyAccountScreen';
import Search from '../screens/SearchScreen';
import MyOrders from '../screens/MyOrdersScreen';
import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import ClientStack from "./clientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons,
                headerShown: false
            }}
        >
            <ClientTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='home'
                            type='material'
                            color={color}
                            size={size}

                        />
                    )
                }}
            />
            <ClientTabs.Screen
                name="Search"
                component={ClientStack}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='search'
                            type='material'
                            color={color}
                            size={size}

                        />
                    )
                }}
            />
            <ClientTabs.Screen
                name="My Orders"
                component={MyOrders}
                options={{
                    tabBarLabel: "My Orders",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='work'
                            type='material'
                            color={color}
                            size={size}

                        />
                    )
                }}
            />
            <ClientTabs.Screen
                name="My Account"
                component={MyAccount}
                options={{
                    tabBarLabel: "My Account",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='person'
                            type='material'
                            color={color}
                            size={size}

                        />
                    )
                }}
            />
            
        </ClientTabs.Navigator>
    )
}