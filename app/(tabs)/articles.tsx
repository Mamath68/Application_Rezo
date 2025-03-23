import {ActivityIndicator, FlatList, Image} from 'react-native';
import {Article, getAllArticles} from "@/services/api/articles";
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {ArticlesScreenStyles as styles} from "@/theme";
import {useEffect, useState} from "react";
import {ExternalLink} from "@/components/ExternalLink";
import {Link} from "expo-router";

export default function ArticlesScreen() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const data = await getAllArticles();
                setArticles(data);
            } catch (error) {
                console.error("Erreur lors du chargement des articles:", error);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);
    // @ts-ignore
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Les Articles</ThemedText>
            </ThemedView>
            {loading ? (
                <ActivityIndicator size="large" color="#007bff"/>
            ) : (
                <FlatList
                    data={articles}
                    keyExtractor={(item) => item.id_articles.toString()}
                    renderItem={({item}) => (
                        <ThemedView style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText style={styles.author}>Par: {item.author}</ThemedText>
                            <Image
                                source={{uri: item.image}}
                                alt={item.title}
                                style={{alignSelf: 'center', width: 300, height: 300, resizeMode: 'cover'}}
                            />
                            <ThemedText
                                type="default"
                                style={styles.description}
                                numberOfLines={3}
                                ellipsizeMode="tail"
                            >
                                {item.content}
                            </ThemedText>
                            <ExternalLink href={item.link}>
                                <ThemedText type="link">{item.description}</ThemedText>
                            </ExternalLink>
                        </ThemedView>
                    )}
                />
            )}
            <Link style={styles.link} href="/addArticles">Ajouter un article</Link>
            {!loading && articles.length === 0 && (
                <ThemedView style={styles.container}>
                    <ThemedText>Aucun article disponible</ThemedText>
                </ThemedView>
            )}
        </ThemedView>
    );
}
