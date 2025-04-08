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
import {PoleJeuneScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomButton, CustomText, CustomView, Header} from "@/components";
import {useState} from "react";

const PoleJeunes = () => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modal) => setActiveModal(modal);
    const closeModal = () => setActiveModal(null);
    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                <CustomView>
                    <Header title="Pôle Jeune"/>
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
                                            Je suis Alison.</CustomText>
                                        <CustomText level="p" style={{textAlign: "justify"}}>Et je suis ravie de faire
                                            partie de l'aventure du pôle Jeunes du Rezo ! Passionnée par l'éducation et
                                            l'animation, je m'engage pleinement à créer un espace sûr et stimulant pour
                                            nos jeunes participants. Alison mise sur l'apprentissage ludique pour
                                            permettre de mettre en avant les savoirs et les compétences des jeunes.
                                        </CustomText>
                                        <CustomText level="p" style={{textAlign: "justify"}}>
                                            Avec mon approche bienveillante et créative, je veille à ce que chaque jeune
                                            se sente soutenu et encouragé à explorer ses talents et à développer son
                                            potentiel. Ensemble, nous formons une équipe unie, déterminée à inspirer nos
                                            jeunes à grandir, apprendre et s'épanouir.</CustomText>
                                    </CustomView>
                                    <CustomView style={{paddingHorizontal: 15, alignItems: 'center'}}>
                                        <CustomText level="p" style={{textAlign: "center"}}>Rejoignez-nous pour une
                                            aventure enrichissante au sein du pôle jeunes du Rezo ! :)
                                        </CustomText>
                                    </CustomView>
                                    <CustomView style={{
                                        flexDirection: "column"
                                    }}>
                                        <CustomButton onPress={() => openModal("modal1")} style={{margin: 10}}>Les
                                            activités principales</CustomButton>
                                        <CustomButton onPress={() => openModal("modal2")} style={{margin: 10}}>Nos
                                            missions</CustomButton>
                                        <CustomButton onPress={() => openModal("modal3")} style={{margin: 10}}>Les
                                            projets envers les jeunes</CustomButton>
                                    </CustomView>
                                </CustomView>
                            </CustomView>
                            <CustomView style={{
                                paddingHorizontal: 15,
                                width: "100%",
                                alignItems: 'center',
                                backgroundColor: 'gold'
                            }}>
                                <CustomText level="h4">Quelques Témoignages</CustomText>
                            </CustomView>
                            <CustomView style={{
                                flexDirection: "row",
                            }}>
                                <CustomButton onPress={() => openModal("modal4")}
                                              style={{margin: 5, padding: 15}}>Erika</CustomButton>
                                <CustomButton onPress={() => openModal("modal5")}
                                              style={{margin: 5, padding: 15}}>Joshua</CustomButton>
                                <CustomButton onPress={() => openModal("modal6")}
                                              style={{margin: 5, padding: 15}}>Fatima</CustomButton>
                            </CustomView>
                            <CustomView style={{padding: 15, alignItems: 'center'}}>
                                <CustomText level="h4" style={{color: 'red'}}>La philosophie du Pôle jeune</CustomText>
                                <CustomText level="p" style={{textAlign: "center"}}>"Nous visons à créer un espace
                                    d'épanouissement et d'exploration pour les jeunes, les encourageant à développer
                                    leur potentiel et à construire des liens significatifs avec les
                                    autres."</CustomText>
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
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_745f351dac434d39a2adc04db18dd0bd~mv2.png/v1/fill/w_919,h_883,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_745f351dac434d39a2adc04db18dd0bd~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Dans le Pôle Jeunes du Rezo, nous proposons une variété d'activités stimulantes
                                        et enrichissantes pour nos jeunes participants. Parmi nos activités principales,
                                        nous organisons des ateliers éducatifs, des événements sociaux, des programmes
                                        sur plusieurs thèmes, à différents endroits ainsi que des projets inclusives.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Chaque activité est soigneusement conçue pour répondre aux besoins et aux
                                        intérêts uniques de nos jeunes, favorisant ainsi leur développement personnel,
                                        social et académique.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Rejoignez-nous pour découvrir une multitude d'opportunités passionnantes au sein
                                        de notre association dynamique !
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
                                    Nos missions
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_1b85b8d1193c446e9401991e31e8a2cc~mv2.png/v1/fill/w_919,h_883,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_1b85b8d1193c446e9401991e31e8a2cc~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Le Pôle Jeunes du Rezo s'engage à offrir aux jeunes un espace sûr et stimulant
                                        pour explorer, apprendre et grandir en s'amusant tout en développement des
                                        compétences sur socle commun.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Nous croyons en l'importance de fournir un soutien éducatif, social et
                                        émotionnel aux jeunes de notre entité, afin de les aider à réaliser leur plein
                                        potentiel.
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
                                    Les projets envers les jeunes
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_c6a4426dd41248e8a69804c92959824f~mv2.png/v1/fill/w_540,h_609,al_c,lg_1,q_85,enc_avif,quality_auto/244fe3_c6a4426dd41248e8a69804c92959824f~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Au sein du Pôle Jeunes du Rezo, nous sommes fiers de proposer une diversité de
                                        projets passionnants et enrichissants pour nos jeunes participants.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Parmi nos activités, nous organisons des ateliers créatifs stimulants, des
                                        visites dans des lieux culturels captivants, des expositions inspirantes et des
                                        escapades à la bibliothèque pour nourrir leur curiosité et leur imagination.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        De plus, nous mettons en place des ateliers amusants, tels que des jeux de piste
                                        à travers Mulhouse, favorisant ainsi l'apprentissage ludique et l'exploration de
                                        notre ville. Nous encourageons également les rencontres avec d'autres jeunes
                                        grâce à des activités organisées en partenariat avec nos collaborateurs locaux,
                                        favorisant ainsi l'échange et le partage d'expériences.
                                    </CustomText>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        Enfin, nous proposons des vacances à prenantes, enrichissantes, offrant aux
                                        jeunes l'opportunité de découvrir de nouveaux horizons, de développer leur
                                        autonomie et de créer des souvenirs inoubliable
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
                                    Erika, Pôle Jeunes
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_313dcf4b5dd746c78450ce218a52bd11~mv2.png/v1/fill/w_503,h_540,al_c,lg_1,q_85,enc_avif,quality_auto/244fe3_313dcf4b5dd746c78450ce218a52bd11~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        « J'ai pu transmettre un savoir autour de la musique et j'ai pu apprendre pleins
                                        de nouvelles choses sur les connaissances des autres »
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
                                    Joshua, Pôle Jeunes
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_2737a6075f3049478d22b9bda619fdad~mv2.png/v1/fill/w_611,h_655,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_2737a6075f3049478d22b9bda619fdad~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        « J'ai passée de formidable vacances, moi qui ne fais rien d'habitude. J'ai pu
                                        transmettre le piano "clavier", que j'ai appris depuis tout petit. J'ai aussi
                                        appris beaucoup de nouvelles choses.»
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
                visible={activeModal === "modal6"}
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
                                    Fatima, Pôle Jeunes
                                </CustomText>
                                <View style={styles.imgContainer}>
                                    <Image
                                        source={{uri: "https://static.wixstatic.com/media/244fe3_681bffb3a6c7450fab168ee63d5370c6~mv2.png/v1/fill/w_540,h_579,al_c,lg_1,q_85,enc_avif,quality_auto/244fe3_681bffb3a6c7450fab168ee63d5370c6~mv2.png"}}
                                        style={styles.modalImage}
                                    />
                                </View>
                                <CustomView>
                                    <CustomText level="p" style={{textAlign: 'justify', padding: 10}}>
                                        « J'ai pu mettre en avant mes savoirs en communication et sur ma culture
                                        marocaine. »
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

export default PoleJeunes;
