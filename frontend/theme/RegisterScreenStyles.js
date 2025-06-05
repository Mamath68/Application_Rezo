import {Dimensions, StyleSheet} from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const RegisterScreenStyles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
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
        paddingBottom: 20,
        width: "100%",
    },
    containerButtons: {
        alignItems: "center",
        gap: 10,
        height: 200,
        justifyContent: "center",
        width: width,
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
});

export default RegisterScreenStyles;
