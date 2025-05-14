import {StyleSheet} from "react-native";

const ButtonStyles = StyleSheet.create({
    base: {
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        padding: 10,
        borderRadius: 8,
    },
    border: {
        borderWidth: 1,
    },
    backgroundColorDark: {
        backgroundColor: "#2D46AF",
    },
    backgroundColorLight: {
        backgroundColor: "#ECF0F1",
    },
    borderColorDark: {
        borderColor: "#2D46AF",
    },
    borderColorLight: {
        borderColor: "#ECF0F1",
    },
    text: {
        fontSize: 14,
        fontFamily: "Montserrat-Bold",
    },
    textLight: {
        color: "#ECF0F1",
    },
    textDark: {
        color: "#2D46AF",
    },
});

export default ButtonStyles;
