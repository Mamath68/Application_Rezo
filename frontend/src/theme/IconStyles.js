import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');
const IconStyles = StyleSheet.create({
    base: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    loading: {
        width: width * 0.9,
        height: height * 0.25,
        resizeMode: "contain",
    },
    settings: {
        height: "100%",
        width: 40,
    },
});

export default IconStyles;
