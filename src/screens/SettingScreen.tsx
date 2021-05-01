import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();

    const context = useContext(AuthContext);
    const {authState} = context;
    const { favoriteIcon } = authState;

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: insets.top + 20
            }}
        >
            <Text style={styles.title}>Setting Screen</Text>

            <Text> {JSON.stringify(authState, null, 4)} </Text>

            {favoriteIcon &&
                <Icon
                    name={favoriteIcon}
                    size={150}
                    color={colors.primary}
                />
            }
        </View>
    )
}