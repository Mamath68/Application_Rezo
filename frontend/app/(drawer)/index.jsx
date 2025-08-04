import {CustomText, CustomView} from "../../components";
import {Theme} from "../../theme";

export default function Home() {
    return (
        <CustomView style={Theme.container}>
            <CustomText center level="h2">Accueil</CustomText>
        </CustomView>
    );
}
