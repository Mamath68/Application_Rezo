import React from "react";
import { CustomTextCenter, CustomView } from "../../components";
import { ScrollView, SafeAreaView } from "react-native";

const About: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomView style={{ paddingHorizontal: 5 }}>
                    <CustomTextCenter level="h2">
                        À Propos du «REZO!»
                    </CustomTextCenter>

                    <CustomTextCenter level="p">
                        Le «REZO!» est une RERS, « Réseau d’échanges réciproques de savoirs».
                    </CustomTextCenter>

                    <CustomTextCenter level="p">
                        Le slogan de l'association est : «Tout le monde est porteur de savoirs, petit ou grand. Chacun peut transmettre à l'autre et recevoir en échange un savoir de valeur équivalente.»
                    </CustomTextCenter>
                </CustomView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default About;
