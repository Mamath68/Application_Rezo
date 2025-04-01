import {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Linking,
    Modal,
    Platform,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@/context/ThemeProvider';

import {CustomButtonLink, CustomButtonText, CustomText, CustomView, Header} from '@/components';
import {getAllArticles} from "@/utils";
import {ArticleListScreenStyles as styles} from "@/theme";
import {getArticle} from "../../utils";

const ArticlesListScreen = ({navigation}) => {
    const {theme} = useTheme();
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };
    const openArticleLink = async (url) => {
        if (!url) {
            Alert.alert('Lien invalide', 'Aucun lien disponible pour cet article.');
            return;
        }

        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('Erreur', "Impossible d'ouvrir le lien.");
        }
    };
    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const articles = await getAllArticles();
                console.log("Données reçues :", articles);
                setArticles(articles);
            } catch (error) {
                console.error("Erreur lors du chargement des articles:", error);
            } finally {
                setLoading(false);
            }
        };
        const deleteArticle = async (id) => {
            try {
                await deleteArticle(id);
            } catch (error){
                console.error("Erreur lors du chargement des articles:", error);
            }
        }
        loadArticles();
        deleteArticle()
    }, []);

    const openModal = (article) => {
        setSelectedArticle(article);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedArticle(null);
        setModalVisible(false);
    };

    const getViewBackgroundColorStyle =
        theme === 'dark' ? styles.containerDark : styles.containerLight;

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, getViewBackgroundColorStyle]}>
                        <Header/>
                        <View style={styles.containerContent}>
                            <View style={styles.containerList}>
                                {isLoading ? (
                                    <ActivityIndicator size='large' color='#007AFF'/>
                                ) : (
                                    <FlatList
                                        data={articles}
                                        keyExtractor={(item) => item?.id?.toString()}
                                        renderItem={({item}) => (
                                            <TouchableOpacity onPress={() => openModal(item)}>
                                                <CustomView style={styles.articlesCards}>
                                                    <CustomText style={styles.articlesTitle}>
                                                        {item.title}
                                                    </CustomText>
                                                    <CustomText style={styles.articlesDescription}>
                                                        {formatDate(item.published_date)}
                                                    </CustomText>
                                                </CustomView>
                                            </TouchableOpacity>
                                        )}
                                        ListEmptyComponent={
                                            <CustomText style={styles.noArticles}>
                                                Nous n'avons pas encore d'articles, mais nous vous invitons à en creer
                                                un.
                                            </CustomText>
                                        }
                                        numColumns={2}
                                        columnWrapperStyle={{justifyContent: "space-evenly", width: '65%'}}
                                        keyboardShouldPersistTaps='handled'
                                        showsVerticalScrollIndicator={true}
                                        contentContainerStyle={{paddingBottom: 20}}
                                    />
                                )}
                            </View>
                            <View style={styles.containerButtons}>
                                <CustomButtonText
                                    type='primary'
                                    onBackground={true}
                                    withBackground={true}
                                    withBorder={true}
                                    buttonStyle={styles.button}
                                    onPress={() => navigation.navigate('AddArticlesScreen')}
                                >
                                    Ajouter un Articles
                                </CustomButtonText>
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true} // Rends le fond du modal transparent pour mieux encadrer
                            visible={isModalVisible}
                            onRequestClose={closeModal}
                        >
                            <CustomView style={styles.modalBackdrop}>
                                <CustomView style={styles.modalContainer}>
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
                                        {selectedArticle && (
                                            <CustomView>
                                                <CustomText level="h4"
                                                            style={{textAlign: 'center', paddingHorizontal: 5}}>
                                                    {selectedArticle.title}
                                                </CustomText>
                                                <CustomText level="h3" style={{textAlign: 'center'}}>
                                                    Par {selectedArticle.author}
                                                </CustomText>
                                                <CustomText level="p">
                                                    Le {formatDate(selectedArticle.published_date)}
                                                </CustomText>
                                                {selectedArticle.image && (
                                                    <Image
                                                        source={{uri: selectedArticle.image}}
                                                        style={styles.modalImage}
                                                    />
                                                )}
                                                <CustomText level="p" style={{textAlign: 'center'}}>
                                                    {selectedArticle.content}
                                                </CustomText>
                                                <CustomText level="p">
                                                    {selectedArticle.lien &&
                                                        <TouchableOpacity
                                                            onPress={() => openArticleLink(selectedArticle.lien)}>
                                                            <CustomText
                                                                style={{
                                                                    color: 'blue',
                                                                    textDecorationLine: 'underline'
                                                                }}>
                                                                {selectedArticle.description || 'Lire plus'}
                                                            </CustomText>
                                                        </TouchableOpacity>
                                                    }
                                                    <CustomButtonLink
                                                        type="primary"
                                                        onBackground={true}
                                                        withBackground={true}
                                                        withBorder={true}
                                                        textStyle={{color: "white"}}
                                                        linkStyle={{color: "white"}}
                                                        buttonStyle={styles.button}
                                                        onPress={() => navigation.navigate('EditArticlesScreen')}
                                                        text="Editer"
                                                        linkText="cet Article"
                                                    />
                                                    <CustomButtonLink
                                                        type="primary"
                                                        onBackground={true}
                                                        withBackground={true}
                                                        withBorder={true}
                                                        textStyle={{color: "white"}}
                                                        linkStyle={{color: "white"}}
                                                        buttonStyle={styles.button}
                                                        onPress={deleteArticle(selectedArticle.id)}>
                                                        text="Supprimer"
                                                        linkText="cet Article"
                                                    />
                                                </CustomText>
                                            </CustomView>
                                        )}
                                    </ScrollView>
                                </CustomView>
                            </CustomView>
                        </Modal>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ArticlesListScreen;
