import {StyleSheet, Dimensions} from "react-native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("window").width;

const Theme = StyleSheet.create({
    container: {
        height: height,
        width: width,
        justifyContent: "center",
        alignItems: "center",
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
