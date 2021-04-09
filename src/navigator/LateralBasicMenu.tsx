import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorStack } from './NavigatorStack';
import { SettingScreen } from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const LateralBasicMenu = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={width >= 680 ? 'permanent' : 'front'}
        >
            <Drawer.Screen name="NavigatorStack" options={{ title: 'Home' }} component={NavigatorStack} />
            <Drawer.Screen name="SettingScreen" options={{ title: 'Setting' }} component={SettingScreen} />
        </Drawer.Navigator>
    )
}
