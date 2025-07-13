import React from "react";
import {CustomTextCenter, CustomView} from "../../components";
import {Theme} from "../../theme";

const About: React.FC = () => {

    return (

        <CustomView style={Theme.container}>

            <CustomTextCenter level="p" style={{paddingVertical:40}}>
                Le «REZO!» est une RERS, « Réseau d’échanges réciproques de savoirs».
            </CustomTextCenter>

            <CustomTextCenter level="p">
                Le slogan de l'association est : «Tout le monde est porteur de savoirs, petit ou grand. Chacun
                peut transmettre à l'autre et recevoir en échange un savoir de valeur équivalente.»
            </CustomTextCenter>
        </CustomView>
    );
};

export default About;
