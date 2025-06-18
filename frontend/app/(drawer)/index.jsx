import {CustomText, CustomView} from "../../components";
import {Theme} from "../../theme";

export default function Home() {

    return (
        <CustomView style={Theme.container}>
            <CustomText level="h2" style={{textAlign: "center"}}>Accueil</CustomText>
        </CustomView>
    );
}
