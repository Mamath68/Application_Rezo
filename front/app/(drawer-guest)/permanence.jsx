import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles} from "../../theme";
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

export default function Permanence() {

    const [permanences, setPermanences] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };
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

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <CustomView style={[styles.container]}>
                        <CustomView style={styles.containerContent}>
                            <CustomView style={styles.containerList}>
                                {isLoading ? (
                                    <ActivityIndicator size='large' color='#007AFF'/>
                                ) : (
                                    <FlatList
                                        data={permanences}
                                        keyExtractor={(item) => item?.id?.toString()}
                                        renderItem={({item}) => (
                                            <CustomView style={styles.articlesCards}>
                                                <CustomText style={styles.articlesTitle}>
                                                    {item.nomLocal}
                                                </CustomText>
                                                <CustomText style={styles.articlesDescription}>
                                                    {formatDate(item.dateDebut)}
                                                </CustomText>
                                                <CustomText style={[styles.articlesDescription, {textAlign: 'center'}]}>
                                                    Au
                                                </CustomText>
                                                <CustomText style={styles.articlesDescription}>
                                                    {formatDate(item.dateFin)}
                                                </CustomText>
                                            </CustomView>
                                        )}
                                        ListEmptyComponent={
                                            <CustomText style={styles.noArticles}>
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
