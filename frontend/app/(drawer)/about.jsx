import {CustomText, CustomView} from "../../components";
import {Theme} from "../../theme";

export default function About() {
    return (
        <CustomView style={Theme.container}>
            <CustomText center level="p" style={{paddingVertical: 40}}>
                Le «REZO!» est une RERS, « Réseau d’échanges réciproques de savoirs».
            </CustomText>

            <CustomText center level="p">
                Le slogan de l'association est : «Tout le monde est porteur de savoirs, petit ou grand. Chacun
                peut transmettre à l'autre et recevoir en échange un savoir de valeur équivalente.»
            </CustomText>
        </CustomView>
    );
}
