import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {router} from 'expo-router';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {createArticle} from '@/services/api/articles';
import {AddArticlesScreenStyles as styles} from "@/theme";

interface Article {
    id_articles: number;
    title: string;
    author: string;
    image: string;
    link: string;
    description: string;
    content: string;
}

export default function AddArticleScreen(): React.ReactElement {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [link, setLink] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleTitleChange = (title: string): void => {
        setTitle(title);
    };

    const handleAuthorChange = (author: string): void => {
        setAuthor(author);
    };

    const handleImageChange = (image: string): void => {
        setImage(image);
    };

    const handleDescriptionChange = (description: string): void => {
        setDescription(description);
    };

    const handleLinkChange = (link: string): void => {
        setLink(link);
    };

    const handleContentChange = (content: string): void => {
        setContent(content);
    };

    const handleSubmit = async (): Promise<void> => {
        setLoading(true);
        try {
            const article: Article = {
                id_articles: 0,
                title,
                author,
                image,
                link,
                description,
                content,
            };

            await createArticle(article);
            router.push("/articles");
        } catch (error) {
            Alert.alert("Error", `Error adding an article: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView style={styles.scrollView}>
                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>Titre *</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Titre de l'article"
                        value={title}
                        onChangeText={handleTitleChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>Auteur *</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'auteur"
                        value={author}
                        onChangeText={handleAuthorChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>URL de l'image</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Lien d'une image"
                        value={image}
                        onChangeText={handleImageChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>Description</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Brève description"
                        value={description}
                        onChangeText={handleDescriptionChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>Lien</ThemedText>
                    <TextInput
                        style={styles.input}
                        placeholder="Un Lien"
                        value={link}
                        onChangeText={handleLinkChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <ThemedText style={styles.label}>Contenu *</ThemedText>
                    <TextInput
                        style={[styles.textArea, styles.input]}
                        placeholder="Contenu de l'article..."
                        multiline
                        numberOfLines={4}
                        value={content}
                        onChangeText={handleContentChange}
                    />
                </ThemedView>

                <ThemedView style={styles.formGroup}>
                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleSubmit}
                        disabled={loading}
                    >
                        <ThemedText style={styles.buttonText}>
                            {loading ? "Publication en cours..." : "Publier l'article"}
                        </ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
                        <ThemedText style={styles.cancelButtonText}>Annuler</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
