import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Screen3 = (props: Props) => {

    const { navigation } = props;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 3 </Text>

            <Button
                title="regresar"
                onPress={ () => navigation.pop() }
            />

            <Button
                title="Ir a pagina principal (1)"
                onPress={ () => navigation.popToTop() }
            />
        </View>
    )
}
