import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer'
import { NavigatorStack } from './NavigatorStack';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={width >= 680 ? 'permanent' : 'front'}
            drawerContent={ (props) => <InternalMenu {...props} /> }
        >
            <Drawer.Screen name="NavigatorStack" options={{ title: 'Home' }} component={NavigatorStack} />
            <Drawer.Screen name="SettingScreen" options={{ title: 'Setting' }} component={SettingScreen} />
        </Drawer.Navigator>
    )
}


const InternalMenu = (props: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { navigation } = props;

    return (
        <DrawerContentScrollView>
            <View style={styles.containerAvatar}>
                <Image
                    style={styles.avatar}
                    source= {{
                        uri: 'https://i.dlpng.com/static/png/6191850-user-png-94-images-in-collection-page-2-user-png-800_800_preview.png'
                    }}
                />
            </View>

            {/* Options Menu */}
            <View
                style={styles.containerMenu}
            >
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={()=>navigation.navigate('NavigatorStack')}
                >
                    <Text style={styles.textMenu}> navigation Stack </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={()=>navigation.navigate('SettingScreen')}
                >
                    <Text style={styles.textMenu}> Setting </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}