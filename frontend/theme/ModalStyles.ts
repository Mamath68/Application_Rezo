import {StyleSheet} from "react-native";

const ModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    option: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    languageBadge: {
        backgroundColor: "#FFF",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    optionText: {
        fontWeight: "bold",
        color: "red",
    },
    button: {
        marginTop: 15,
        width: "100%",
    },
});

export default ModalStyles;
