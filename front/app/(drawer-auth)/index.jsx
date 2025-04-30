import {HomeScreenStyles as styles} from "../../theme";
import {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {getAllPermanences} from "../../utils";
import {CustomText, CustomView} from "../../components";

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'fr';

export default function Home() {
    const [markedDates, setMarkedDates] = useState({});
    const [selected, setSelected] = useState('');
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [allPermanences, setAllPermanences] = useState([]);


    useEffect(() => {
        const fetchPermanences = async () => {
            try {
                const data = await getAllPermanences();

                const formattedMarks = data.permanences.reduce((acc, item) => {
                    acc[item.dateDebut] = {
                        marked: true,
                        dotColor: item.type === 'garage' ? 'blue' : 'green'
                    };
                    return acc;
                }, {});

                setMarkedDates(formattedMarks);
                setAllPermanences(data.permanences);
            } catch (error) {
                console.error("Erreur lors du fetch des permanences :", error);
            }
        };

        fetchPermanences();
    }, []);


    return (

        <CustomView style={styles.container}>
            <CustomText level="h2">Accueil</CustomText>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);

                    const info = allPermanences.find(p => p.dateDebut === day.dateString);
                    setSelectedInfo(info || null);

                    // Copier les anciens marquages pour ne pas les perdre
                    const newMarkedDates = {...markedDates};

                    // Réinitialiser toutes les sélections précédentes
                    Object.keys(newMarkedDates).forEach(date => {
                        if (newMarkedDates[date].selected) {
                            delete newMarkedDates[date].selected;
                            delete newMarkedDates[date].selectedColor;
                        }
                    });

                    newMarkedDates[day.dateString] = {
                        ...(newMarkedDates[day.dateString] || {}),
                        selected: true,
                        selectedColor: 'orange',
                    };

                    setMarkedDates(newMarkedDates);
                }}

                markedDates={markedDates}
            />

            {selected && (
                <CustomText style={{marginTop: 10}}>
                    Date sélectionnée : {selected}
                </CustomText>
            )}
            {selectedInfo && (
                <CustomText style={{marginTop: 10}}>
                    Lieu de la permanence : {selectedInfo.nomLocal}
                </CustomText>
            )}


        </CustomView>
    );
};
