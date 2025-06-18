import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles, Theme} from "../../theme";
import {Calendar} from "react-native-big-calendar";
import {useState, useEffect} from "react";
import {getAllPermanences} from "../../utils";
import {KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";
import {useTheme} from "../../context/ThemeProvider";
import 'dayjs/locale/fr'
import PermanenceDetailModal from "../../components/CustomModal";

export default function Permanence() {
    const [permanences, setPermanences] = useState([]);
    const [, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark'
        ? Theme.backgroundColorDark
        : Theme.backgroundColorLight;
    const getBorderColorStyle = theme === 'dark'
        ? styles.borderColorLight
        : styles.borderColorDark;

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
                setPermanences(response.permanences);
            } catch (error) {
                console.error("Erreur lors du chargement des permanences:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPermanences();
    }, []);

    const assignColors = (events) => {
        const pastelColors = [
            '#3B82F6',
            '#10B981',
            '#F59E0B',
            '#EF4444',
            '#6366F1',
            '#14B8A6',
            '#8B5CF6',
            '#EC4899',
            '#84CC16',
            '#F97316'];
        return events.map((event, index) => ({
            ...event,
            color: pastelColors[index % pastelColors.length],
        }));
    };

    const rawEvents = permanences.map((p) => {
        const savoirsOffres = p.savoirs?.filter(s => s.role === 'OFFRE') ?? [];
        const savoirsDemandes = p.savoirs?.filter(s => s.role === 'DEMANDE') ?? [];

        return {
            title: `${p.shortLocal.toUpperCase()}`,
            local: `${p.nomLocal}`,
            address: `${p.address}`,
            start: new Date(`${p.date}T${p.permanenceDebut}`),
            end: new Date(`${p.date}T${p.permanenceFin}`),
            contact: p.contact,
            phoneNumber: p.phoneContact,
            offres: savoirsOffres,
            demandes: savoirsDemandes,
        };

    });
    const events = assignColors(rawEvents);


    return (
        <SafeAreaView style={styles.containerContent}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={getViewBackgroundColorStyle}
            >
                <CustomView style={{paddingVertical: 80}}>
                    <CustomText level="p" style={{textAlign: "center"}}>
                        Vous trouverez ci-dessous les permanences, présentées sous forme d’agenda.
                    </CustomText>

                    <Calendar
                        events={events}
                        mode="week"
                        locale="fr"
                        weekStartsOn={1}
                        weekEndsOn={6}
                        swipeEnabled={true}
                        overlapOffset={15}
                        height={650}
                        eventCellStyle={(event) => ({
                            backgroundColor: event.color,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        })}
                        calendarCellStyle={getBorderColorStyle}
                        showWeekNumber={true}
                        showTime={false}
                        showAdjacentMonths={true}
                        onPressEvent={(event) => {
                            setSelectedEvent(event);
                            setModalVisible(true);
                        }}

                    />
                    <PermanenceDetailModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        permanence={selectedEvent}
                    />
                </CustomView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
