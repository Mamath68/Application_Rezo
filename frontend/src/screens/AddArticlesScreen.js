import {useState} from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import {useTheme} from "@/context/ThemeProvider";
import {CustomButtonText, CustomInput, CustomText, CustomTextarea, CustomView, Header} from "@/components";
import {createArticles} from "@/utils/apiRouter";
import {AddArticleScreenStyles as styles} from '@/theme';

const AddArticlesScreen = ({navigation}) => {
    const {theme} = useTheme();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const [, setTitleError] = useState("");
    const [, setAuthorError] = useState("");
    const [, setImageError] = useState("");
    const [, setLinkError] = useState("");
    const [, setDescriptionError] = useState("");
    const [, setContentError] = useState("");

    const getViewBackgroundColorStyle =
        theme === "dark" ? styles.containerDark : styles.containerLight;

    const validateForm = () => {
        let isValid = true;
        setTitleError("");
        setAuthorError("");
        setImageError("");
        setLinkError("");
        setDescriptionError("");
        setContentError("");

        if (!title) {
            setTitleError("A Title is required");
            isValid = false;
        }

        if (!author) {
            setAuthorError("An Author is required");
            isValid = false;
        }

        if (!content) {
            setContentError("A Content is required");
            isValid = false;
        }

        return isValid;
    };

    const handleArticleCreation = async () => {
        if (validateForm) {
            setLoading(true);
            console.log("Creation d'un article:", {title, author, image, lien, description, content});

            try {
                const article = {title, author, image, link, description, content};

                const response = await createArticles(article);
                console.log("Reponse de l'api:", response);

                navigation.navigate("ArticlesListScreen")
            } catch (error) {
                console.log("Erreur lors de la création de l'article:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={[styles.container, getViewBackgroundColorStyle]}>
                            <Header/>
                            <View style={[styles.containerContent]}>
                                <CustomView style={[styles.containerForm]}>
                                    <CustomView>
                                        <CustomText level="p">Titre</CustomText>
                                        <CustomInput
                                            placeholder="Titre"
                                            value={title}
                                            onChangeText={setTitle}
                                        />
                                    </CustomView>
                                    <CustomView>
                                        <CustomText level="p">Auteur</CustomText>
                                        <CustomInput
                                            placeholder="Author"
                                            value={author}
                                            onChangeText={setAuthor}
                                        />
                                    </CustomView>
                                    <CustomView>
                                        <CustomText level="p">Image (Optionnel)</CustomText>
                                        <CustomInput
                                            placeholder="Image (url obligatoirement)"
                                            value={image}
                                            onChangeText={setImage}
                                        />
                                    </CustomView>
                                    <CustomView>
                                        <CustomText level="p">Lien (Optionnel)</CustomText>
                                        <CustomInput
                                            placeholder="Lien vers un site (Optionnel)"
                                            value={link}
                                            onChangeText={setLink}
                                        />
                                    </CustomView>
                                    <CustomView>
                                        <CustomText level="p">Description du lien</CustomText>
                                        <CustomInput
                                            placeholder="Description"
                                            value={description}
                                            onChangeText={setDescription}
                                        />
                                    </CustomView>
                                    <CustomView>
                                        <CustomText level="p">Contenu</CustomText>
                                        <CustomTextarea
                                            placeholder="Le Contenu"
                                            value={content}
                                            onChangeText={setContent}
                                        />
                                    </CustomView>
                                </CustomView>
                                <View style={[styles.containerButtons]}>
                                    <CustomButtonText
                                        type="primary"
                                        onBackground={true}
                                        withBackground={true}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        onPress={handleArticleCreation}
                                        disabled={loading}
                                    >
                                        {loading ? "Ajout en cours..." : "Ajouter l'Article"}
                                    </CustomButtonText>
                                    <CustomButtonText
                                        type="secondary"
                                        onBackground={false}
                                        withBackground={false}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        onPress={() => navigation.goBack()}
                                    >
                                        {loading ? "Ajout en cours..." : "Revenir en arrière"}
                                    </CustomButtonText>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AddArticlesScreen;
