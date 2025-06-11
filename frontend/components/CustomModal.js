import {Modal, View, ScrollView} from "react-native";
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

                        <CustomText style={{marginTop: 12, fontWeight: 'bold'}}>🎁 Savoirs Offerts :</CustomText>
                        {permanence.savoirsOfferts?.length > 0
                            ? permanence.savoirsOfferts.map((s, i) => (
                                <CustomText key={i}>• {s}</CustomText>
                              ))
                            : <CustomText>Aucun</CustomText>
                        }

                        <CustomText style={{marginTop: 12, fontWeight: 'bold'}}>🙋 Savoirs Demandés :</CustomText>
                        {permanence.savoirsDemandes?.length > 0
                            ? permanence.savoirsDemandes.map((s, i) => (
                                <CustomText key={i}>• {s}</CustomText>
                              ))
                            : <CustomText>Aucun</CustomText>
                        }

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
