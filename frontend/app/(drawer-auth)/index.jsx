import {HomeScreenStyles as styles} from "../../theme";
import {CustomText, CustomView} from "../../components";

export default function Home() {
    return (

        <CustomView style={styles.container}>
            <CustomText level="h2">Accueil Connecté</CustomText>
        </CustomView>
    );
};
