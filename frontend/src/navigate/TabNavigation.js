import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { ComprarScreen } from '../screens/ComprarScreen'
import { VenderScreen } from '../screens/vender/VenderScreen'
import { DonarScreen } from '../screens/donar/DonarScreen'
import { PerfilScreen } from '../screens/perfil/PerfilScreen'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Bienvenix!' component={HomeScreen} />
            <Tab.Screen name='ComprarScreen' component={ComprarScreen} />
            <Tab.Screen name='VenderScreen' component={VenderScreen} />
            <Tab.Screen name='DonarScreen' component={DonarScreen} />
            <Tab.Screen name='PerfilScreen' component={PerfilScreen} />
        </Tab.Navigator>
    )
}
