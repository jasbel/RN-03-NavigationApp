import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{...styles.globalMargin, marginTop: top + 10}}>
            <Text style={styles.title}> TAb screen 1 </Text>
            
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="calendar-outline" />
                <TouchableIcon iconName="battery-charging-outline"/>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="calendar-outline" />
                <TouchableIcon iconName="battery-charging-outline"/>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="calendar-outline" />
                <TouchableIcon iconName="battery-charging-outline"/>
            </Text>
        </View>
    )
}