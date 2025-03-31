import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');

const ArticleListScreenStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    containerLight: {
        backgroundColor: '#ECF0F1',
    },
    containerDark: {
        backgroundColor: '#2D46AF',
    },
    containerContent: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
        paddingTop: Math.min(60, height * 0.1),
    },
    containerList: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 2,
    },
    containerSearch: {
        width: Math.min(400, width * 0.9),
        marginVertical: 10,
    },
    noArticles: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
    articlesCards: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
        width: '80%',
        alignSelf: 'center',
    },
    articlesTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    articlesDescription: {
        fontSize: 12,
        color: '#fff',
    },
    containerButtons: {
        alignItems: 'center',
        gap: 10,
        height: 140,
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        height: 60,
        width: '90%',
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
    },
    modalContainer: {
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '90%', // Largeur du modal
        maxHeight: '80%', // Empêche le modal de prendre tout l'écran
        backgroundColor: 'white',
    },
    modalScrollView: {
        flexGrow: 1, // Permet au ScrollView de s'étendre
        paddingBottom: 20, // Ajoute un espace en bas pour éviter les coupures
    },
    modalContent: {
        paddingBottom: 20, // Sépare le contenu du bord inférieur
    },
    modalImage: {
        width: 250,
        height: 350,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
        paddingVertical: 15,
    },
    closeButtonText: {
        fontSize: 20, // Taille réduite
        fontWeight: 'bold',
    },
});

export default ArticleListScreenStyles;
