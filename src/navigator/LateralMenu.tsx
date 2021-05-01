import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
// import { NavigatorStack } from './NavigatorStack';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={width >= 680 ? 'permanent' : 'front'}
            drawerContent={ (props) => <InternalMenu {...props} /> }
        >
            {/* <Drawer.Screen name="NavigatorStack" options={{ title: 'Home' }} component={NavigatorStack} /> */}
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingScreen" options={{ title: 'Setting' }} component={SettingScreen} />
        </Drawer.Navigator>
    )
}


const InternalMenu = (props: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { navigation } = props;

    return (
        <DrawerContentScrollView>
            <View style={styles.containerAvatar}>
                <View style={styles.contentAvatar}>
                    <Image
                        style={styles.avatar}
                        source= {{
                            uri: 'https://i.dlpng.com/static/png/6191850-user-png-94-images-in-collection-page-2-user-png-800_800_preview.png'
                        }}
                    />
                </View>
            </View>

            {/* Options Menu */}
            <View
                style={styles.containerMenu}
            >
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={()=>navigation.navigate('Tabs')}
                >
                    <Text style={styles.textMenu}> <Icon name='library-outline' size={20} color={'black'} /> Navigation </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={()=>navigation.navigate('SettingScreen')}
                >
                    <Text style={styles.textMenu}> <Icon name='settings-outline' size={20} color={'black'} /> Setting </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}