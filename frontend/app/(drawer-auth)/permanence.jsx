import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles, Theme} from "../../theme";
import {Calendar} from "react-native-big-calendar";
import {useState, useEffect} from "react";
import {getAllPermanences} from "../../utils";
import {Alert, KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";
import {useTheme} from "../../context/ThemeProvider";

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
    }));

    const events = assignColors(rawEvents);

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[{flex: 1}, getViewBackgroundColorStyle]}
            >
                <CustomView style={{marginVertical: 80}}>
                    <CustomText level="h2" style={{textAlign: "center"}}>
                        Les Permanences
                    </CustomText>
                    <CustomText level="p" style={{textAlign: "center"}}>
                        Les Permanences sont affichées ci-dessous sous format Agenda.
                    </CustomText>

                    <Calendar
                        events={events}
                        mode="3days"
                        swipeEnabled={true}
                        overlapOffset={40}
                        height={800}
                        eventCellStyle={(event) => ({
                            backgroundColor: event.color,
                            borderRadius: 6,
                            padding: 2,
                        })}
                        onPressEvent={(event) => {
                            Alert.alert(
                                event.local,
                                `Addresse : ${event.address}\nDébut : ${formatHour(event.start)}\nFin : ${formatHour(event.end)}`
                            );
                        }}
                    />
                </CustomView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
