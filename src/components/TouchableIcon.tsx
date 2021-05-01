import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../theme/colors';

interface Props {
    iconName: string
}

const TouchableIcon = (props: Props) => {

    const {iconName} = props
    const {changeFavoriteIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={()=>changeFavoriteIcon(iconName) 
            }
        >
            <Icon
                name={iconName}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}

export default TouchableIcon;