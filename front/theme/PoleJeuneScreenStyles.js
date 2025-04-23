import {StyleSheet} from "react-native";

const PoleJeuneScreenStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 10,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerModalLight: {
        backgroundColor: "rgb(74, 130, 183)",
        borderRadius: 5
    },
    textModalLight: {
        color: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    textModalDark: {
        color: "black",
    },
    containerModalDark: {
        backgroundColor: "#ECF0F1",
        borderRadius: 5
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    subtitle: {
        textAlign: "center",
        textTransform: "uppercase",
    },
    list: {
        marginTop: 10,
    },
    listItem: {
        flexDirection: "row", // Aligne les éléments en ligne
        alignItems: "center", // Centrer la puce et le texte verticalement
        marginVertical: 5,
        paddingHorizontal: 15,
    },
    bullet: {
        fontSize: 20, // Taille de la puce
        color: "#555",
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    button: {
        height: 60,
        width: '100%',
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '90%',
        maxHeight: '80%',
        backgroundColor: 'white',
    },
    modalScrollView: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    modalContent: {
        paddingBottom: 20,
    },
    modalImage: {
        resizeMode: 'cover',
        borderRadius: 15,
        width: "100%",
        height: "100%",
        marginTop: 10,
    },
    imgContainer: {
        width: 270,
        height: 280,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    closeButton: {
        alignSelf: 'flex-end',
        paddingVertical: 15,
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default PoleJeuneScreenStyles;
