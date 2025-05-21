import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles, Theme} from "../../theme";


export default function Home() {

    return (
        <CustomView style={Theme.container}>
            <CustomText level="h2">Accueil</CustomText>
        </CustomView>
    );
};
