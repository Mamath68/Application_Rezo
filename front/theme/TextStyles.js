import {StyleSheet} from "react-native";

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 40,
        color: "#000",
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 36,
        color: "#333",
    },
    h3: {
        fontSize: 19,
        fontWeight: "600",
        lineHeight: 30,
        color: "#444",
    },
    h4: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 30,
        color: "#555",
    },
    h5: {
        fontSize: 13.28,
        fontWeight: "500",
        lineHeight: 22,
        color: "#666",
    },
    h6: {
        fontSize: 10.72,
        fontWeight: "500",
        lineHeight: 20,
        color: "#777",
    },
    p: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        color: "#555",
    },
    note: {
        fontSize: 14,
        lineHeight: 18,
        fontStyle: "italic",
        color: "#888",
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: "#666",
        fontWeight: "300",
    },
});

export default TextStyles;
