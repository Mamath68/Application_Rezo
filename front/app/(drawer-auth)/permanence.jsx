import {CustomText, CustomView} from "../../components";
import {PermanenceScreenStyles as styles} from "../../theme";
import {getAllPermanences} from '../../utils';
import {useEffect, useState} from 'react';

export default function Permanence() {

    const [permanences, setPermanences] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const loadPermanences = async () => {
            setLoading(true);
            try {
                const permanences = await getAllPermanences();
                console.log("Données reçues :", permanences);
                setPermanences(permanences);
            } catch (error) {
                console.error("Erreur lors du chargement des permanences:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPermanences();
    }, []);

    return (
        <CustomView style={styles.container}>
            <CustomText level="h2">Les Permanences</CustomText>
            {Array.isArray(permanences) && permanences.length > 0 ? (
                permanences.map((item, index) => (
                    <CustomText key={index}>
                        📅 {item?.dateDebut} - 🕒 {item?.dateFin} - 👤 {item?.nom_local}
                    </CustomText>
                ))
            ) : (
                <CustomText>Aucune permanence à afficher.</CustomText>
            )}
        </CustomView>
    );
};
