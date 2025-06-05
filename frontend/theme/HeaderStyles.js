import {Dimensions, StyleSheet} from "react-native";

const width= Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeaderStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        height: Math.min(60, height * 0.1),
        justifyContent: "space-between",
        left: 0,
        paddingHorizontal: 15,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 10,
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
