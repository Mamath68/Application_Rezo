import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get('window').width;

const HeaderStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between",
        paddingHorizontal: 15,
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
