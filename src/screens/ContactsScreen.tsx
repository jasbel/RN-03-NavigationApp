import React, { useContext, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

const ContactsScreen = () => {

    const {logout, signIn, authState} = useContext(AuthContext)
    const {isLoggedIn} = authState;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {!isLoggedIn ?
            <Button 
                title="Sign in"
                onPress={signIn}
            />
            :
            <Button 
                color='red'
                title="Logout"
                onPress={logout}
            />
            }
        </View>
    )
}

export default ContactsScreen;