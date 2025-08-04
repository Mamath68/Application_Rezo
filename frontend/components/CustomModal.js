import {Linking, Modal, ScrollView} from "react-native";
import CustomText from "./CustomText";
import CustomButtonText from "./CustomButtonText";
import CustomView from "./CustomView";
import {FontAwesome} from '@expo/vector-icons';
import {Theme} from "../theme";

const PermanenceDetailModal = ({visible, onClose, permanence}) => {
    const formatHour = (date) => date?.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    if (!permanence) return null;

    return (
        <Modal transparent visible={visible} animationType="fade" >
            <CustomView style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 20}}>
                <CustomView style={{borderRadius: 12, padding: 20}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CustomText level="h2" center style={{marginBottom: 10}}>
                            {permanence.local}
                        </CustomText>
                        <CustomView style={{flexDirection: "row"}}>
                            <FontAwesome name="map-pin" size={20} color="red"/>
                            <CustomText style={{marginBottom: 4, marginLeft: 5}}>
                               <CustomText style={Theme.Montserrat}>Adresse :</CustomText> {permanence.address}
                            </CustomText>
                        </CustomView>
                        <CustomView style={{flexDirection: "row"}}>
                            <FontAwesome name="clock-o" size={20} color="#007AFF"/>
                            <CustomText style={{marginBottom: 4, marginLeft: 5}}>
                                <CustomText style={Theme.Montserrat}>Début :</CustomText> {formatHour(permanence.start)}
                            </CustomText>
                        </CustomView>
                        <CustomView style={{flexDirection: "row"}}>
                            <FontAwesome name="clock-o" size={20} color="#007AFF"/>
                            <CustomText style={{marginBottom: 4, marginLeft: 5}}>
                                <CustomText style={Theme.Montserrat}>Fin :</CustomText> {formatHour(permanence.end)}
                            </CustomText>
                        </CustomView>


                        <CustomText level="h4" style={Theme.Montserrat}>Offres :</CustomText>
                        {permanence?.offres?.length > 0 ? (
                            permanence.offres.map((savoir, idx) => (
                                <CustomText key={idx}>• {savoir.nom}</CustomText>
                            ))
                        ) : (
                            <CustomText style={{fontStyle: 'italic'}}>Aucune offre</CustomText>
                        )}

                        <CustomText level="h4" style={[{marginTop: 10}, Theme.Montserrat]}>Demandes :</CustomText>
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
                                const tel = permanence.phoneNumber || "+33669142804"; // <-- adapte ici selon ta structure
                                await Linking.openURL(`tel:${tel}`);
                            }}
                        >
                            <CustomView style={{flexDirection: "row"}}>
                                <FontAwesome name="phone" size={20} color="red"/>
                                <CustomText style={{marginLeft: 5}}>
                                    Contacter {permanence.contact}
                                </CustomText>
                            </CustomView>
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
                </CustomView>
            </CustomView>
        </Modal>
    );
};

export default PermanenceDetailModal;
