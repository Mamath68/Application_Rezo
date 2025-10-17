import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native";
import {Calendar} from "react-native-big-calendar";
import 'dayjs/locale/fr';

import {CustomKeyboardAvoidingView, CustomText, CustomView, PermanenceDetailModal} from "@components/index";
import {PermanenceScreenStyles as styles} from "@theme/index";
import {useTheme} from "@context/ThemeProvider";
import type {PermanenceType, SavoirType} from "@utils/index";
import {getAllPermanences, SavoirRole} from "@utils/index";

type CalendarEvent = {
    title: string;
    local: string;
    address: string;
    start: Date;
    end: Date;
    contact: string;
    phoneNumber: string;
    offre: SavoirType[];
    demande: SavoirType[];
    color?: string;
};

export default function Permanence() {
    const [permanences, setPermanences] = useState<PermanenceType[]>([]);
    const [, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const {theme} = useTheme();

    const getBorderColorStyle = theme === 'dark'
        ? styles.borderColorLight
        : styles.borderColorDark;

    useEffect(() => {
        const loadPermanences = async () => {
            setLoading(true);
            try {
                const data = await getAllPermanences();
                setPermanences(data.permanences ?? []);
            } catch (error) {
                console.error("Erreur lors du chargement des permanences:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPermanences();
    }, []);

    const assignColors = (events: CalendarEvent[]): CalendarEvent[] => {
        const pastelColors = [
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#6366F1',
            '#14B8A6', '#8B5CF6', '#EC4899', '#84CC16', '#F97316',
        ];
        return events.map((event, index) => ({
            ...event,
            color: pastelColors[index % pastelColors.length],
        }));
    };

    const rawEvents: CalendarEvent[] = permanences.map((p) => {
        const savoirsOffres = p.savoirs?.filter(s => s.role === SavoirRole.OFFRE) ?? [];
        const savoirsDemandes = p.savoirs?.filter(s => s.role === SavoirRole.DEMANDE) ?? [];


        return {
            title: `${p.shortLocal.toUpperCase()}`,
            local: p.nomLocal,
            address: p.address,
            start: new Date(`${p.date}T${p.permanenceDebut}`),
            end: new Date(`${p.date}T${p.permanenceFin}`),
            contact: p.contact,
            phoneNumber: p.phoneContact,
            offre: savoirsOffres,
            demande: savoirsDemandes,
        };
    });

    const events = assignColors(rawEvents);

    return (
        <SafeAreaView style={styles.containerContent}>
            <CustomKeyboardAvoidingView>
                <CustomView style={{paddingVertical: 80}}>
                    <CustomText level="p" center>
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
            </CustomKeyboardAvoidingView>
        </SafeAreaView>
    );
}
