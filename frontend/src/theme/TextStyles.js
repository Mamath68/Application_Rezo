import {StyleSheet} from "react-native";

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 40,
    },
    h2: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
    },
    p: {
        fontSize: 16,
        lineHeight: 24,
    },
    note: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#888",
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: "#666",
    },
});

export default TextStyles;
