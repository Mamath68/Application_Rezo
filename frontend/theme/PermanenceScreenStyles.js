import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');

const PermanenceScreenStyles = StyleSheet.create({
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
    noPermanences: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
    permanencesCards: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 3,
        width: '73%',
        height: '90%',
        alignSelf: 'center',
    },
    permanencesLocal: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
    },
    permanencesDateTime: {
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
    }
});

export default PermanenceScreenStyles;
