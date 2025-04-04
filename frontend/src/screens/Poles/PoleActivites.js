import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Modal, ScrollView, TouchableOpacity, View} from 'react-native';
import {PoleActiviteScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomButton, CustomText, CustomView, Header} from "@/components";
import {useState} from "react";

const PoleActivites = ({navigation}) => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const getViewModalBackgroundColorStyle = theme === 'dark' ? styles.containerModalDark : styles.containerModalLight;
    const getViewModalColorStyle = theme === 'dark' ? styles.textModalDark : styles.textModalLight;

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modal) => setActiveModal(modal);
    const closeModal = () => setActiveModal(null);

    const citoyen = [
        "Promotion des échanges intergénérationnels et interculturels.",
        "Renforcement de la cohésion sociale dans les quartiers de Mulhouse.",
        "Valorisation des savoirs et compétences des habitants."];
    const jeune = [
        "Réduction du décrochage scolaire en valorisant les compétences des jeunes.",
        "Développement de la confiance en soi et des compétences sociales chez les jeunes participants.",
        "Création de liens positifs entre les jeunes et la communauté éducative ."];
    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomView style={[styles.container, getViewBackgroundColorStyle]}>
                <Header title="Pôles d'activité"/>
                <CustomText level="p" style={{padding: 10}}>Notre association se divise en deux principaux pôles
                    : <CustomText level="p" style={theme === "dark" ? {color: "yellow"} : {color: "blue"}}>le Pôle
                        Citoyens</CustomText> et <CustomText
                        level="p" style={theme === "dark" ? {color: "yellow"} : {color: "blue"}}>le Pôle
                        jeunes</CustomText>. Chacun de ces pôles est dédié à
                    des initiatives spécifiques visant à enrichir notre
                    communauté à Mulhouse par l'échange de savoirs et la formation continue.</CustomText>
                <TouchableOpacity onPress={() => openModal("modal1")}>
                    <Image source={require('@assets/citoyen.png')} style={[styles.logo]}/>
                    <CustomText level="h3" style={styles.subtitle}>Pôle Citoyens</CustomText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openModal("modal2")}>
                    <Image source={require('@assets/jeune.png')} style={[styles.logo]}/>
                    <CustomText level="h3" style={styles.subtitle}>Pôle Jeunes</CustomText>
                </TouchableOpacity>
            </CustomView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={activeModal === "modal1"}
                onRequestClose={closeModal}
            >
                <CustomView style={styles.modalBackdrop}>
                    <CustomView style={[styles.modalContainer, getViewBackgroundColorStyle]}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <CustomText
                                style={
                                    [
                                        styles.closeButtonText, {
                                        color: theme === 'dark' ? '#fff' : '#000'
                                    }
                                    ]
                                }
                            >
                                X
                            </CustomText>
                        </TouchableOpacity>
                        <ScrollView contentContainerStyle={styles.modalScrollView}>
                            <CustomView>
                                <CustomText level="h3"
                                            style={{textAlign: 'center', paddingHorizontal: 5}}>
                                    Le Pôle Citoyen
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={require('@assets/citoyen.png')}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Le Pôle Citoyens du Rezo ! s'engage à promouvoir l'échange de savoirs et la
                                        formation entre les habitants de Mulhouse.

                                        Ce pôle est dirigé par Sandrine, qui coordonne diverses activités et projets
                                        visant
                                        à renforcer la cohésion sociale et à valoriser les compétences de chacun.
                                    </CustomText>
                                    <CustomView style={[styles.list, getViewModalBackgroundColorStyle]}>
                                        <CustomText level="h4" style={[{
                                            textAlign: 'center',
                                            padding: 10
                                        }, getViewModalColorStyle]}>
                                            Le pôle Citoyens c'est:
                                        </CustomText>
                                        {citoyen.map((item, index) => (
                                            <CustomView key={index}
                                                        style={[styles.listItem, getViewModalBackgroundColorStyle]}>
                                                <CustomText
                                                    style={[styles.bullet, getViewModalColorStyle]}>•</CustomText>
                                                <CustomText
                                                    style={[styles.text, getViewModalColorStyle]}>{item}</CustomText>
                                            </CustomView>
                                        ))}
                                        <CustomText level="p"
                                                    style={[{padding: 10}, getViewModalColorStyle]}>
                                            Pour en savoir plus sur le Pôle Citoyen et découvrir comment vous pouvez
                                            participer,
                                            cliquez ici :
                                        </CustomText>
                                    </CustomView>
                                </CustomView>
                                <CustomButton
                                    type="primary"
                                    onBackground={true}
                                    withBackground={true}
                                    withBorder={false}
                                    style={[styles.button, {marginTop: 10}]}
                                    onPress={() => navigation.navigate("PoleCitoyen")}
                                >
                                    Mieux Connaitre Le Pôle Citoyen
                                </CustomButton>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={activeModal === "modal2"}
                onRequestClose={closeModal}
            >
                <CustomView style={styles.modalBackdrop}>
                    <CustomView style={[styles.modalContainer, getViewBackgroundColorStyle]}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <CustomText
                                style={
                                    [
                                        styles.closeButtonText, {
                                        color: theme === 'dark' ? '#fff' : '#000'
                                    }
                                    ]
                                }
                            >
                                X
                            </CustomText>
                        </TouchableOpacity>
                        <ScrollView contentContainerStyle={styles.modalScrollView}>
                            <CustomView>
                                <CustomText level="h3"
                                            style={{textAlign: 'center', paddingHorizontal: 5}}>
                                    Le Pôle Jeune
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={require('@assets/jeune.png')}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Le Pôle Jeunes du Rezo ! est animé par Manon, qui coordonne des activités
                                        spécialement conçues pour les jeunes.
                                        Ce pôle vise à offrir aux jeunes de Mulhouse des opportunités d'apprentissage et
                                        de développement personnel à travers des échanges de savoirs.
                                    </CustomText>
                                    <CustomView style={[styles.list, getViewModalBackgroundColorStyle]}>
                                        <CustomText level="h4" style={[{
                                            textAlign: 'center',
                                            padding: 10
                                        }, getViewModalColorStyle]}>
                                            Le pôle Jeune c'est:
                                        </CustomText>
                                        {jeune.map((item, index) => (
                                            <CustomView key={index}
                                                        style={[styles.listItem, getViewModalBackgroundColorStyle]}>
                                                <CustomText
                                                    style={[styles.bullet, getViewModalColorStyle]}>•</CustomText>
                                                <CustomText
                                                    style={[styles.text, getViewModalColorStyle]}>{item}</CustomText>
                                            </CustomView>
                                        ))}
                                        <CustomText level="p"
                                                    style={[{padding: 10}, getViewModalColorStyle]}>
                                            Pour en savoir plus sur le Pôle Jeune et découvrir comment vous pouvez
                                            participer, cliquez ici :
                                        </CustomText>
                                    </CustomView>
                                </CustomView>
                                <CustomButton
                                    type="primary"
                                    onBackground={true}
                                    withBackground={true}
                                    withBorder={false}
                                    style={[styles.button, {marginTop: 10}]}
                                    onPress={() => navigation.navigate("PoleJeune")}
                                >
                                    Mieux Connaitre Le Pôle Jeune
                                </CustomButton>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>
        </SafeAreaView>
    )
};

export default PoleActivites;
