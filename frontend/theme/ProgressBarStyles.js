import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('screen');
const ProgressBarStyles = StyleSheet.create({
    //--- VIEW ----\\
    container: {
        alignItems: 'center',
        gap: 10,
        height: 40,
        justifyContent: 'center',
        marginVertical: 10,
        maxWidth: width * 0.95,
        width: width * 0.9,
    },
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    //--- BAR ----\\
    animated: {
        height: 20,
        maxWidth: width * 0.95,
        width: '0%',
    },
    animatedDark: {
        backgroundColor: '#ECF0F1',
    },
    animatedLight: {
        backgroundColor: '#007BFF',
    },
    //--- TYPOGRAPHY ---\\
    text: {
        fontSize: 14,
        fontFamily: "Montserrat-bold",
    },
    textLight: {
        color: "#2D46AF",
    },
    textDark: {
        color: "#ECF0F1",
    },
});

export default ProgressBarStyles;
