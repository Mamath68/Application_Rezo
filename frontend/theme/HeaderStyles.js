import {Dimensions, StyleSheet, Platform, StatusBar} from "react-native";

const topInset = Platform.select({
    android: StatusBar.currentHeight || 35,
    ios: 0,
    default: 0
});
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeaderStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        height: Math.min(60, height * 0.1),
        justifyContent: "space-between",
        top: topInset,
        width: "100%",
    },
    image: {
        height: "100%",
        width: Math.min(100, width * 0.5),
        resizeMode: "contain",
    },
    button: {
        width: Math.min(60, width * 0.2),
        height: "100%",
    },
});

export default HeaderStyles;
