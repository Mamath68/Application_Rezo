import React, {useState, useEffect} from "react";
import {Calendar, ICalendarEventBase} from "react-native-big-calendar";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleProp, ViewStyle} from "react-native";
import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles, Theme} from "../../theme";
import {getAllPermanences} from "../../utils";
import {useTheme} from "../../context/ThemeProvider";
import PermanenceDetailModal from "../../components/CustomModal";
import 'dayjs/locale/fr';
import 'dayjs/locale/de';

// === TYPES ===

interface Savoir {
    role: 'OFFRE' | 'DEMANDE';

    [key: string]: any; // Adapter si tu connais la structure
}

interface PermanenceItem {
    shortLocal: string;
    nomLocal: string;
    address: string;
    date: string;
    permanenceDebut: string;
    permanenceFin: string;
    contact: string;
    phoneContact: string;
    savoirs?: Savoir[];
}

interface CustomEvent extends ICalendarEventBase {
    local: string;
    address: string;
    contact: string;
    phoneNumber: string;
    offres: Savoir[];
    demandes: Savoir[];
    color?: string;
}

// === COMPOSANT ===

export default function Permanence() {
    const [permanences, setPermanences] = useState<PermanenceItem[]>([]);
    const [, setLoading] = useState<boolean>(true);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
    const {theme} = useTheme();

    const getViewBackgroundColorStyle: StyleProp<ViewStyle> =
        theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;

    const getBorderColorStyle = theme === "dark" ? styles.borderColorLight : styles.borderColorDark;

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

    const assignColors = (events: CustomEvent[]): CustomEvent[] => {
        const pastelColors = [
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#6366F1',
            '#14B8A6', '#8B5CF6', '#EC4899', '#84CC16', '#F97316'
        ];
        return events.map((event, index) => ({
            ...event,
            color: pastelColors[index % pastelColors.length],
        }));
    };

    const rawEvents: CustomEvent[] = permanences.map((p) => {
        const savoirsOffres = p.savoirs?.filter(s => s.role === 'OFFRE') ?? [];
        const savoirsDemandes = p.savoirs?.filter(s => s.role === 'DEMANDE') ?? [];

        return {
            title: `${p.shortLocal.toUpperCase()}`,
            local: p.nomLocal,
            address: p.address,
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
                            backgroundColor: (event as CustomEvent).color || '#ccc',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        })}
                        calendarCellStyle={getBorderColorStyle}
                        showWeekNumber={true}
                        showTime={false}
                        showAdjacentMonths={true}
                        onPressEvent={(event) => {
                            setSelectedEvent(event as CustomEvent);
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
