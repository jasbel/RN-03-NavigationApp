import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{ marginTop: insets.top }}>
            <Text>Setting Screen</Text>
        </View>
    )
}
