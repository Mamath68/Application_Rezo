import {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@/context/ThemeProvider';

import {CustomButtonText, CustomText, CustomView, Header} from '@/components';
import {getAllArticles} from "@/utils";
import {ArticleListScreenStyles as styles} from "@/theme";

const ArticlesListScreen = ({navigation}) => {
    const {theme} = useTheme();
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

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

        loadArticles();
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
                                                    <CustomText numberOfLines={3} ellipsizeMode="tail"
                                                                style={styles.articlesDescription}>
                                                        {item.content}
                                                    </CustomText>
                                                </CustomView>
                                            </TouchableOpacity>
                                        )}
                                        ListEmptyComponent={
                                            <CustomText style={styles.noArticles}>
                                                No buildings found.
                                            </CustomText>
                                        }
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
                                    Add Articles
                                </CustomButtonText>

                                <CustomButtonText
                                    type='secondary'
                                    onBackground={false}
                                    withBackground={false}
                                    withBorder={true}
                                    buttonStyle={styles.button}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    Go back to map
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
                                            style={[styles.closeButtonText, {color: theme === 'dark' ? '#fff' : '#000'}]}>X</CustomText>
                                    </TouchableOpacity>
                                    {selectedArticle && (
                                        <CustomView>
                                            <CustomText level="h2">
                                                {selectedArticle.title}
                                            </CustomText>
                                            {selectedArticle.image && (
                                                <Image
                                                    source={{uri: selectedArticle.image}}
                                                    style={styles.modalImage}
                                                />
                                            )}
                                            <CustomText level="p">
                                                {selectedArticle.content}
                                            </CustomText>
                                            <CustomText level="p">
                                                {selectedArticle.description}
                                            </CustomText>
                                        </CustomView>
                                    )}
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
