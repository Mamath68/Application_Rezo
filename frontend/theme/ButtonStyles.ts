import { StyleSheet } from "react-native";

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
    borderColorDark: {
        borderColor: "#2D46AF",
    },
    borderColorLight: {
        borderColor: "#ECF0F1",
    },
});

export default ButtonStyles;
