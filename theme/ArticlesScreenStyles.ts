import {StyleSheet} from "react-native";

export const ArticlesScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    card: {
        backgroundColor: "white",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2
    },
    title: {
        fontSize: 18,
        color: "gray",
        fontWeight: "bold",
        marginBottom: 4
    },
    author: {
        fontSize: 14,
        color: "gray",
        marginBottom: 4
    },
    description: {
        color: "gray",
        fontSize: 16
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
        fontSize: 16
    },
    titleContainer: {
        height: 100, // Hauteur fixe pour le titre
        justifyContent: 'center',
        alignItems: 'center',
    },
});
