import {StyleSheet} from "react-native";

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: 32, // Grande taille pour les titres principaux
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
        fontSize: 16, // Taille légèrement inférieure pour sous-titres
        fontWeight: "600", // Semi-gras pour rester visible
        lineHeight: 24,
        color: "#555",
    },
    h5: {
        fontSize: 13.28, // Proche des paragraphes pour plus de précision
        fontWeight: "500", // Moins gras pour indiquer une hiérarchie basse
        lineHeight: 22,
        color: "#666",
    },
    h6: {
        fontSize: 10.72, // La plus petite pour un titre minimal
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
