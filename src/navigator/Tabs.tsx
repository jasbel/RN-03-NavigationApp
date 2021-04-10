import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { NavigatorStack } from './NavigatorStack';
import { colors } from '../theme/colors';
import { Platform, Text } from 'react-native';
import TopTab from './TopTab';
import { styles } from '../theme/appTheme';

const BottomTabIos = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />
    
}

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}

            barStyle={{
                backgroundColor: colors.white,
                elevation: 0
            }}

            screenOptions ={({route})=> ({
                tabBarIcon: (props) => {

                    const {color, focused} = props;
                    let iconName: string = '';

                    if(route.name === 'Tab1Screen' ) iconName = 'beer-outline'
                    if(route.name === 'TopTap' ) iconName = 'battery-charging-outline'
                    if(route.name === 'NavigatorStack' ) iconName = 'cash-outline'

                    return <Text><Icon name={iconName} size={20} color={color} /></Text>;
                }
            })}


        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTap" options={{title: 'Tab2'}} component={TopTab} />
            <BottomTabAndroid.Screen name="NavigatorStack" options={{title: 'Stack'}} component={NavigatorStack} />
        </BottomTabAndroid.Navigator>
    )
}

const TabsIos = () => {
    return (
        <BottomTabIos.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            tabBarOptions={{
                activeTintColor: colors.primary,
                style: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                labelStyle: {
                    fontSize: 15
                }
            }}

            screenOptions ={({route})=> ({
                tabBarIcon: (props) => {

                    const {color, focused, size} = props;
                    let iconName: string = '';

                    if(route.name === 'Tab1Screen' ) iconName = 'T1'
                    if(route.name === 'Tab2Screen' ) iconName = 'T2'
                    if(route.name === 'Home' ) iconName = 'T3'

                    return <Text style={{color}}>{iconName}</Text>
                }
            })}


        >
            <BottomTabIos.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon:(props) => <Text
                style={{color: props.color}}
            >T!</Text>}} component={Tab1Screen} />
            <BottomTabIos.Screen name="TopTap" options={{title: 'Tab2'}} component={TopTab} />
            <BottomTabIos.Screen name="Home" options={{title: 'Stack'}} component={NavigatorStack} />
        </BottomTabIos.Navigator>
    )
}
