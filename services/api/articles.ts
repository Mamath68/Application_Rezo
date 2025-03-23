import api from "@/services/api/api";

export type Article = {
    id_articles: any;
    title: string;
    author: string;
    image?: string;
    description?: string;
    link?: string;
    content: string;
    published_date?: string;
};

export const getAllArticles = async (): Promise<Article[]> => {
    try {
        return await api.get('articles');
        // echec - message: 'No cities found'
        // ok - response.message: 'Request was successful'
        // ok - response.cityList: id, name, latitude, longitude, latitudeDelta & longitudeDelta

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('City - getAllCities | FAILED: ' + error.message);
        } else {
            throw new Error('An unknown error occurred.');
        }
    }

};

// ✅ Post a new article
export const createArticle = async (article: Article) => {
    try {
        return await api.post('articles', article);

    } catch (error: any) {
        throw new Error('Article - createArticle | FAILED: ' + error.message);
    }
};
