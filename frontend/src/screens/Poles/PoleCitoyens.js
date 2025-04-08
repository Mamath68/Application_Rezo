import {SafeAreaView} from "react-native-safe-area-context";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {PoleCitoyenScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomButton, CustomText, CustomView, Header} from "@/components";
import {useState} from "react";

const PoleCitoyens = () => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const getViewModalBackgroundColorStyle = theme === 'dark' ? styles.containerModalDark : styles.containerModalLight;
    const getViewModalColorStyle = theme === 'dark' ? styles.textModalDark : styles.textModalLight;
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modal) => setActiveModal(modal);
    const closeModal = () => setActiveModal(null);
    const activites = [
        "Ateliers et formations",
        "Événements communautaires",
        "Soutien personnalisé"];
    const objectifs = [
        "Ateliers et formations",
        "Événements communautaires",
        "Soutien personnalisé"];
    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                <CustomView>
                    <Header title="Pôle Citoyens du Rezo"/>
                </CustomView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps="handled"
                    >
                        <CustomView style={[styles.container, getViewBackgroundColorStyle]}>
                            <CustomView>
                                <CustomView style={{
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    paddingTop: 70,
                                }}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_14ca004f052348eaabfa8b26cae8f47e~mv2.png/v1/fill/w_406,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_14ca004f052348eaabfa8b26cae8f47e~mv2.png"}}
                                        style={[styles.logo]}/>
                                    <CustomView style={{paddingHorizontal: 15, alignItems: 'center'}}>
                                        <CustomText level="h4">Bonjour !
                                            Moi c'est Sandrine</CustomText>
                                        <CustomText level="p" style={{textAlign: "justify"}}>Je suis la responsable du
                                            pôle
                                            Citoyens
                                            depuis plusieurs années. Mes missions sont d'animer les permanences du pôle
                                            citoyen du
                                            Rezo.</CustomText>
                                    </CustomView>
                                    <CustomView style={{paddingHorizontal: 15, alignItems: 'center'}}>
                                        <CustomText level="h4">Ma philosophie</CustomText>
                                        <CustomText level="p" style={{textAlign: "center"}}>L'apprentissage et le
                                            dépassement soi
                                            sont les clés de la réussite</CustomText>
                                    </CustomView>
                                    <CustomView style={{
                                        flexDirection: "row"
                                    }}>
                                        <CustomButton onPress={() => openModal("modal1")} style={{margin: 10}}>Les
                                            activités principales</CustomButton>
                                        <CustomButton onPress={() => openModal("modal2")} style={{margin: 10}}>Nos
                                            objectifs</CustomButton>
                                    </CustomView>
                                </CustomView>
                            </CustomView>
                            <CustomView style={{paddingHorizontal: 15, alignItems: 'center'}}>
                                <CustomText level="h4" style={{color: 'red'}}>Les échanges de
                                    savoirs</CustomText>
                                <CustomText level="p" style={{textAlign: "center"}}>Au cœur des activités du
                                    Rezo !, Sandrine joue un rôle essentiel en supervisant les échanges de
                                    savoirs au sein de notre association.</CustomText>
                            </CustomView>
                            <CustomView style={{
                                flexDirection: "column",
                                padding: 15
                            }}>
                                <CustomButton onPress={() => openModal("modal3")} style={{margin: 5}}>Création de
                                    réchaud</CustomButton>
                                <CustomButton onPress={() => openModal("modal4")} style={{margin: 5}}>Tricot et
                                    Couture</CustomButton>
                                <CustomButton onPress={() => openModal("modal5")} style={{margin: 5}}>Échange couture au
                                    Drouot</CustomButton>
                            </CustomView>
                        </CustomView>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

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
                                    Les Activités principales
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_016685eac4b04b8c93599e3551769d77~mv2.png/v1/fill/w_919,h_596,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_016685eac4b04b8c93599e3551769d77~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Le Pôle Citoyens du Rezo ! s'engage à promouvoir l'échange de savoirs et la
                                        formation entre les habitants de Mulhouse. Ce pôle est dirigé par
                                        Sandrine, qui coordonne diverses activités et projets visant à renforcer la
                                        cohésion sociale et à valoriser les compétences de chacun.
                                    </CustomText>
                                    <CustomView style={[styles.list, getViewModalBackgroundColorStyle]}>
                                        <CustomText level="h4" style={[{
                                            textAlign: 'center',
                                            padding: 10
                                        }, getViewModalColorStyle]}>
                                            Activités principales
                                        </CustomText>
                                        {activites.map((item, index) => (
                                            <CustomView key={index}
                                                        style={[styles.listItem, getViewModalBackgroundColorStyle]}>
                                                <CustomText
                                                    style={[styles.bullet, getViewModalColorStyle]}>•</CustomText>
                                                <CustomText
                                                    style={[styles.text, getViewModalColorStyle]}>{item}</CustomText>
                                            </CustomView>
                                        ))}
                                    </CustomView>
                                </CustomView>
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
                                    Nos objectifs
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_9ba51e61a3db4932a36cedf6d1b8b24b~mv2.png/v1/fill/w_919,h_883,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_9ba51e61a3db4932a36cedf6d1b8b24b~mv2.png"}}
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
                                        {objectifs.map((item, index) => (
                                            <CustomView key={index}
                                                        style={[styles.listItem, getViewModalBackgroundColorStyle]}>
                                                <CustomText
                                                    style={[styles.bullet, getViewModalColorStyle]}>•</CustomText>
                                                <CustomText
                                                    style={[styles.text, getViewModalColorStyle]}>{item}</CustomText>
                                            </CustomView>
                                        ))}
                                    </CustomView>
                                </CustomView>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={activeModal === "modal3"}
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
                                    Création de réchaud
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_b5f3c1466b574258ba95167d13f8818c~mv2.png/v1/fit/w_449,h_448,q_90,enc_avif,quality_auto/244fe3_b5f3c1466b574258ba95167d13f8818c~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Guidés par notre bénévole passionné Didier, nos sessions d'atelier sur la
                                        création de réchauds ont été des moments d'ingéniosité et de partage. Ensemble,
                                        nous avons fabriqué des réchauds pratiques et efficaces. Encore merci à Didier !
                                    </CustomText>
                                </CustomView>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={activeModal === "modal4"}
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
                                    Tricot et couture
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_5417e76ac9fb41e28ca9450126c70c53~mv2.png/v1/fit/w_857,h_558,q_90,enc_avif,quality_auto/244fe3_5417e76ac9fb41e28ca9450126c70c53~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        De jolis vêtements ont été réalisés lors de la permanence dédiée au tricot et à
                                        la couture. Un grand merci à nos bénévoles pour leur dévouement et leur savoir,
                                        qui ont permis de transformer des idées en créations magnifiques
                                    </CustomText>
                                </CustomView>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={activeModal === "modal5"}
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
                                    Echange couture au Drouot
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_cf8c3ac58cef49dc80d083cdfd78569d~mv2.jpg/v1/fit/w_595,h_558,q_90,enc_avif,quality_auto/244fe3_cf8c3ac58cef49dc80d083cdfd78569d~mv2.jpg"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Hayet a partagé son savoir-faire en couture lors d'une permanence, inspirant
                                        ainsi notre communauté à explorer de nouvelles créations textiles ensemble.
                                    </CustomText>
                                </CustomView>
                            </CustomView>
                        </ScrollView>
                    </CustomView>
                </CustomView>
            </Modal>
        </SafeAreaView>
    )
};

export default PoleCitoyens;
