import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles, Theme} from "../../theme";
import {getAllPermanences} from '../../utils';
import {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "../../context/ThemeProvider";

export default function Permanence() {
    const {theme} = useTheme();

    const [permanences, setPermanences] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const loadPermanences = async () => {
            setLoading(true);
            try {
                const response = await getAllPermanences();
                console.log("Réponse :", response);

                setPermanences(response.permanences);

            } catch (error) {
                console.error("Erreur lors du chargement des permanences:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPermanences();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    const formatHour = (timeString) => {
        const [hour, minute] = timeString.split(':');
        return `${hour}h${minute}`;
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <CustomView style={[Theme.container]}>
                        <CustomView style={styles.containerContent}>
                            <CustomView style={[styles.containerList,                         theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight,
]}>
                                {isLoading ? (
                                    <ActivityIndicator size='large' color='#007AFF'/>
                                ) : (
                                    <FlatList
                                        data={permanences}
                                        keyExtractor={(item) => item?.id?.toString()}
                                        renderItem={({item}) => (
                                            <CustomView style={styles.permanencesCards}>
                                                <CustomText style={styles.permanencesLocal}>
                                                    {item.nomLocal}
                                                </CustomText>
                                                <CustomText style={styles.permanencesDateTime}>
                                                    {formatDate(item.date)}
                                                </CustomText>
                                                <CustomText style={[styles.permanencesDateTime, {textAlign: 'center'}]}>
                                                    De {formatHour(item.permanenceDebut)} à {formatHour(item.permanenceFin)}
                                                </CustomText>
                                            </CustomView>
                                        )}
                                        ListEmptyComponent={
                                            <CustomText style={styles.noPermanences}>
                                                Nous n'avons pas encore de permanences.
                                            </CustomText>
                                        }
                                        numColumns={2}
                                        columnWrapperStyle={{justifyContent: "space-evenly", width: '65%'}}
                                        keyboardShouldPersistTaps='handled'
                                        showsVerticalScrollIndicator={true}
                                        contentContainerStyle={{paddingBottom: 20}}
                                    />
                                )}
                            </CustomView>
                        </CustomView>
                    </CustomView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
