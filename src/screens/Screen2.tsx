import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Screen2 = () => {
    const navigationHook = useNavigation();

    useEffect(() => {
        navigationHook.setOptions({
            title: "Mi Titulo Personalizado",
            headerBackTitle: '' /* IOS */
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 2 </Text>
            <Button
                title="ir a pagina 3"
                onPress={ () => navigationHook.navigate('screen3')}
            />
        </View>
    )
}
