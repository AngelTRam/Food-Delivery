import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import BusinessConsole from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
import Home from '../screens/HomeScreen';
import WelcomeScreen from '../screens/authScreens/Welcome';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator

            drawerContent={props => <DrawerContent {...props} />}

        >
            <Drawer.Screen

                name='RootClientTabs'
                component={RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type='material-community'
                            name='home'
                            color={focussed ? '#7CC' : colors.grey2}
                            size={size}
                        />
                    ),
                    headerShown: false
                }}
            />

            <Drawer.Screen

                name='BusinessConsole'
                component={BusinessConsole}
                options={{
                    title: 'Business Console',
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type='material-community'
                            name='domain'
                            color={focussed ? '#7CC' : colors.grey2}
                            size={size}
                        />
                    ),
                    headerShown: false
                }}
            />

           
        </Drawer.Navigator>
    )
}