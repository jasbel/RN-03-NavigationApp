import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {

    const {top: paddingTop} = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop
            }}
            tabBarOptions={{
                pressColor: colors.primary, /* Android: click en tab pretty */
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colors.primary
                },
                style: {
                    shadowColor: 'transparent',
                    elevation: 0
                }
            }}
            sceneContainerStyle={{
                backgroundColor: colors.white,
            }}

            screenOptions ={({route})=> ({
                tabBarIcon: (props) => {

                    const {color, focused} = props;
                    let iconName: string = '';

                    if(route.name === 'ChatScreen' ) iconName = 'construct-outline'
                    if(route.name === 'ContactsScreen' ) iconName = 'earth-outline'
                    if(route.name === 'AlbumsScreen' ) iconName = 'hourglass-outline'

                    return <Text><Icon name={iconName} size={20} color={color} /></Text>
                }
            })}
        >
            <Tab.Screen name="ChatScreen" options={{title: 'Chat'}} component={ ChatScreen } />
            <Tab.Screen name="ContactsScreen" options={{title: 'Contact'}} component={ ContactsScreen } />
            <Tab.Screen name="AlbumsScreen" options={{title: 'Albums'}} component={ AlbumsScreen } />
        </Tab.Navigator>
    )
}

export default TopTab
