import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles} from "../../theme";

export default function Home() {

    return (
        <CustomView style={styles.container}>
            <CustomText level="h2">Accueil</CustomText>
        </CustomView>
    );
};
