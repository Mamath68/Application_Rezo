import {StyleSheet} from "react-native";

const Theme = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    backgroundColorDark: {
        backgroundColor: "#2D46AF",
    },
    backgroundColorLight: {
        backgroundColor: "#ECF0F1",
    },
    textLight: {
        color: "#ECF0F1",
    },
    textDark: {
        color: "#2D46AF",
    },
    Montserrat: {
        fontFamily: "Montserrat-BoldItalic",
    },
    text: {
        fontSize: 14,
        fontFamily: "Montserrat-bold",
    },
});

export default Theme;
