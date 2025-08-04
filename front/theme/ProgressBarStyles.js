import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get('window').width;

const ProgressBarStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,
        height: 40,
        justifyContent: 'center',
        marginVertical: 10,
        maxWidth: width * 0.95,
        width: width * 0.9,
    },
    animated: {
        height: 20,
        maxWidth: width * 0.95,
        width: '0%',
    },

});

export default ProgressBarStyles;
