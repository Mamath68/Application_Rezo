import {Modal, View, ScrollView, Linking} from "react-native";
import {useTheme} from "../context/ThemeProvider";
import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import {Theme} from "../theme";

const PermanenceDetailModal = ({visible, onClose, permanence}) => {
    const {theme} = useTheme();

    const getThemeBackground = theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;
    const formatHour = (date) => date?.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    if (!permanence) return null;

    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 20}}>
                <View style={[{backgroundColor: '#fff', borderRadius: 12, padding: 20}, getThemeBackground]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CustomText level="h2" style={{textAlign: 'center', marginBottom: 10}}>
                            {permanence.local}
                        </CustomText>

                        <CustomText style={{marginBottom: 4}}>📍 Adresse : {permanence.address}</CustomText>
                        <CustomText>🕒 Début : {formatHour(permanence.start)}</CustomText>
                        <CustomText>🕓 Fin : {formatHour(permanence.end)}</CustomText>

                        <CustomText level="h4">Offres :</CustomText>
                        {permanence?.offres?.length > 0 ? (
                            permanence.offres.map((savoir, idx) => (
                                <CustomText key={idx}>• {savoir.nom}</CustomText>
                            ))
                        ) : (
                            <CustomText style={{fontStyle: 'italic'}}>Aucune offre</CustomText>
                        )}

                        <CustomText level="h4" style={{marginTop: 10}}>Demandes :</CustomText>
                        {permanence?.demandes?.length > 0 ? (
                            permanence.demandes.map((savoir, idx) => (
                                <CustomText key={idx}>• {savoir.nom}</CustomText>
                            ))
                        ) : (
                            <CustomText style={{fontStyle: 'italic'}}>Aucune demande</CustomText>
                        )}

                        <CustomButtonText
                            type="secondary"
                            onBackground={false}
                            withBackground={false}
                            withBorder={true}
                            buttonStyle={{marginTop: 20}}
                            onPress={async () => {
                                const tel = permanence.phoneNumber || "0123456789"; // <-- adapte ici selon ta structure
                                await Linking.openURL(`tel:${tel}`);
                            }}
                        >
                            📞 Contacter {permanence.contact}
                        </CustomButtonText>
                        <CustomButtonText
                            type="secondary"
                            onBackground={false}
                            withBackground={false}
                            withBorder={true}
                            onPress={onClose}
                            buttonStyle={{marginTop: 20}}
                        >
                            Fermer
                        </CustomButtonText>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default PermanenceDetailModal;
