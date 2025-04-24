import {Dimensions, StyleSheet} from "react-native";

const {height} = Dimensions.get('screen');

const RegisterScreenStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    containerContent: {
        alignItems: "center",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: "100%",
        paddingTop: Math.min(60, height * 0.1),
    },
    containerForm: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    containerButtons: {
        alignItems: "center",
        gap: 10,
        height: 200,
        justifyContent: "center",
        width: "100%",
    },
    containerBack: {
        alignItems: "center",
        height: height * 0.08,
        justifyContent: "center",
        width: "100%",
    },
    button: {
        height: 60,
        width: "90%",
    },
    button2: {
        height: 60,
        width: "90%",
    },
});

export default RegisterScreenStyles;
