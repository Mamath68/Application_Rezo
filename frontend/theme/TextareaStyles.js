import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('screen');
const TextareaStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        width: width * 0.9,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputContainer: {
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: width * 0.9,
    },
    textarea: {
        fontSize: 16,
        textAlignVertical: "top", // Permet d'aligner le texte en haut du champ
        height: 100, // Ajustez la hauteur en fonction de vos besoins
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});

export default TextareaStyles;
