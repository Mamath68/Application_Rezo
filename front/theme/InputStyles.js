import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('screen');

const InputStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        height: 80,
        width: width * 0.9,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputContainer: {
        alignItems: "center",
        borderRadius: 8,
        borderBottomWidth: 1,
        flexDirection: "row",
        height: 45,
        paddingHorizontal: 10,
        width: width * 0.9,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});


export default InputStyles;
