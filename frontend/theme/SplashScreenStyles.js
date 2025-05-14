import {StyleSheet} from "react-native";

const SplashScreenStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 10,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    //--- TYPOGRAPHY ---\\
    text: {
        fontFamily: "Montserrat-BoldItalic",
    },
    textLight: {
        color: "#2D46AF",
    },
    textDark: {
        color: "#ECF0F1",
    },
});

export default SplashScreenStyles;
