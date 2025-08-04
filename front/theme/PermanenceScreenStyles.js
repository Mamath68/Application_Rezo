import {Dimensions, StyleSheet} from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PermanenceScreenStyles = StyleSheet.create({
    containerContent: {
        width: width,
        height: height,
    },
    borderColorDark: {
        borderColor: "#2D46AF",
    },
    borderColorLight: {
        borderColor: "#ECF0F1",
    },
});

export default PermanenceScreenStyles;
