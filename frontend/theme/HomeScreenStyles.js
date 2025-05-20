import {StyleSheet} from "react-native";

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    logo: {
        width: 200,
        height: 200,
    }
});

export default HomeScreenStyles;
