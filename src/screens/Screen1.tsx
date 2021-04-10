import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { colors } from '../theme/colors';

interface Props extends DrawerScreenProps<any, any> {};

export const Screen1 = (props: Props) => {
    
    const { navigation } = props;

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                style={{marginLeft: 10}}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Text><Icon name="menu-outline" size={40} color={colors.dark} /></Text>
                    
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 1 </Text>
            <Button
                title="ir a pagina 2"
                onPress={ () => navigation.navigate('screen2')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                }}
            >Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={[styles.bigButton, {backgroundColor: 'green'}]}
                    onPress={() => navigation.navigate('person',{
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Text style={styles.textBigButton}> Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: 'orange'
                    }}
                    onPress={() => navigation.navigate('person',{
                        id: 2,
                        name: 'Maria'
                    })}
                >
                    <Text  style={styles.textBigButton}> Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
