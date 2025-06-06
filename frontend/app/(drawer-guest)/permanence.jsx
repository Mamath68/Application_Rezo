import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles, Theme} from "../../theme";
import {Calendar} from "react-native-big-calendar";
import {useState, useEffect} from "react";
import {getAllPermanences} from "../../utils";
import {Alert, KeyboardAvoidingView, Linking, Platform, SafeAreaView} from "react-native";
import {useTheme} from "../../context/ThemeProvider";
import 'dayjs/locale/fr'

export default function Permanence() {
    const [permanences, setPermanences] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark'
        ? Theme.backgroundColorDark
        : Theme.backgroundColorLight;

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

    const sortedPermanences = [...permanences].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.permanenceDebut}`);
        const dateB = new Date(`${b.date}T${b.permanenceDebut}`);
        return dateA - dateB;
    });

    const rawEvents = sortedPermanences.map((p) => ({
        title: `${p.shortLocal}`,
        local: `${p.nomLocal}`,
        address: `${p.address}`,
        start: new Date(`${p.date}T${p.permanenceDebut}`),
        end: new Date(`${p.date}T${p.permanenceFin}`),
        contact: p.contact,
        phoneNumber: p.phoneContact,
    }));

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
                        mode="3days"
                        locale="fr"
                        weekStartsOn={1}
                        weekEndsOn={6}
                        swipeEnabled={true}
                        overlapOffset={40}
                        height={650}
                        eventCellStyle={(event) => ({
                            backgroundColor: event.color,
                            borderRadius: 10,
                            padding: 5,
                            width: 60
                        })}
                        showWeekNumber={true}
                        showTime={false}
                        showAdjacentMonths={true}
                        calendarCellTextStyle={{flexWrap: "wrap"}}
                        onPressEvent={(event) => {
                            Alert.alert(
                                event.local,
                                `Adresse : ${event.address}\nDébut : ${formatHour(event.start)}\nFin : ${formatHour(event.end)}`,
                                [
                                    {
                                        text: `📞 Appeler ${event.contact}`,
                                        onPress: () => {
                                            const tel = event.phoneNumber;
                                            Linking.openURL(`tel:${tel}`);
                                        },
                                    },
                                    {text: "Fermer", style: "cancel"},
                                ]
                            );
                        }}

                    />
                </CustomView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
