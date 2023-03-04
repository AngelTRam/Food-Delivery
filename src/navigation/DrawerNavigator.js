import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='RootClientTabs'
                component={RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                        type='material-community'
                        name='home'
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}