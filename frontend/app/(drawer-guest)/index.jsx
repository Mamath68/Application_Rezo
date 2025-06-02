import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles, Theme} from "../../theme";
import {Calendar} from "react-native-big-calendar";
import {useState, useEffect} from "react";
import {getAllPermanences} from "../../utils";
import {Alert, KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";


export default function Home() {
    const [permanences, setPermanences] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const formatHour = (date) => {
        return date.toLocaleTimeString('fr-FR', {
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

    const sortedPermanences = [...permanences].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.permanenceDebut}`);
        const dateB = new Date(`${b.date}T${b.permanenceDebut}`);
        return dateA - dateB;
    });

    const events = sortedPermanences.map((p) => ({
        title: `${p.shortLocal}`,
        local: `${p.nomLocal}`,
        address: `${p.address}`,
        start: new Date(`${p.date}T${p.permanenceDebut}`),
        end: new Date(`${p.date}T${p.permanenceFin}`),
    }));


    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <CustomView style={{marginVertical: 80}}>
                    <Calendar
                        events={events}
                        mode="3days"
                        swipeEnabled={true}
                        height={800}
                        onPressEvent={(event) => {
                            Alert.alert(
                                event.local,
                                `Addresse: ${event.address}\nDébut : ${formatHour(event.start)}\nFin : ${formatHour(event.end)}`
                            );
                        }}
                        eventCellStyle={{backgroundColor: 'red', borderColor: 'blue'}}
                    />
                </CustomView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
