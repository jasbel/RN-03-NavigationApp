import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from './colors';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 25
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: colors.red,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    textBigButton: {
        fontSize: 20,
        color: colors.white
    },
    /* Drawer */
    containerAvatar: {
        alignItems: 'center',
        marginTop: 20,
    },
    contentAvatar: {
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 10,
        borderColor: colors.light,
        backgroundColor: colors.light,
    },
    avatar: {
        width: 60,
        height: 60,
    },
    containerMenu: {
        marginVertical: 30,
        marginHorizontal: 40
    },
    textMenu: {
        fontSize: 20
    },
    buttonMenu: {
        paddingVertical: 10
    }
})