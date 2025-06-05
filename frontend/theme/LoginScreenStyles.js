import {StyleSheet, Dimensions} from "react-native";

const height = Dimensions.get('window').height;

const LoginScreenStyles = StyleSheet.create({
    containerContent: {
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
        paddingTop: Math.min(60, height * 0.1),
    },
    containerForm: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    containerFormForm: {
        alignItems: 'center',
        flex: 1,
        gap: 10,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    containerButtons: {
        alignItems: 'center',
        gap: 10,
        height: 200,
        justifyContent: 'center',
        width: '100%',
    },
    containerBack: {
        alignItems: 'center',
        height: height * 0.08,
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        height: 60,
        width: '90%',
    },
    button2: {
        width: '90%',
    },
});

export default LoginScreenStyles;
