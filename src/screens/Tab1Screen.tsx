import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log("Tab1 screen effect");
    }, [])

    return (
        <View style={{...styles.globalMargin, marginTop: top + 10}}>
            <Text style={styles.title}> TAb screen 1 </Text>
            
            <Text>
            <Icon name="airplane-outline" size={70} color="#900" />
            <Icon name="calendar-outline" size={70} color="#900" />
            <Icon name="battery-charging-outline" size={70} color="#900" />
            <Icon name="airplane-outline" size={70} color="#900" />
            <Icon name="calendar-outline" size={70} color="#900" />
            <Icon name="battery-charging-outline" size={70} color="#900" />
            <Icon name="airplane-outline" size={70} color="#900" />
            <Icon name="calendar-outline" size={70} color="#900" />
            <Icon name="battery-charging-outline" size={70} color="#900" />
            </Text>
        </View>
    )
}