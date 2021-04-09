import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParams = {
    screen1: undefined,
    screen2: undefined,
    screen3: undefined,
    person: {
        id: number,
        name: string,
    },
}

const Stack = createStackNavigator();

export const NavigatorStack = () => {
    return (
        <Stack.Navigator
            // initialRouteName="screen2"
            screenOptions = {{

                headerStyle: {
                    elevation: 0, /* IOS */
                    shadowColor: 'transparent', /* Android */
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="screen1" options={{ title: "Mi Pagina 1" }} component={ Screen1 } />
            <Stack.Screen name="screen2" options={{ title: "Mi Pagina 2" }} component={ Screen2 } />
            <Stack.Screen name="screen3" options={{ title: "Mi Pagina 3" }} component={ Screen3 } />
            <Stack.Screen name="person" component={ PersonScreen } />
        </Stack.Navigator>
    )
}
