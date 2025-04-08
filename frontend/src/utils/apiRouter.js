import api from '@/service/ApiService';

/******Articles*********/
export const getAllArticles = async () => {
    try {
        console.log("Les Articles Sont bien récupéré");
        return await api.get('articles');
    } catch (error) {
        throw new Error('Articles - getAllArticles | FAILED: ' + error.message);
    }
};

export const getArticle = async (id) => {
    try {
        console.log(`L'article avec l'id ${id} a bien été récupéré`);
        return await api.get(`article/${id}`);
    } catch (error) {
        throw new Error('Articles - getArticle | FAILED: ' + error.message);
    }
}

export const createArticles = async (articlesData) => {
    try {
        console.log("L'article a bien été créé");
        return await api.post('articles', articlesData);
    } catch (error) {
        throw new Error('Articles - createArticles | FAILED: ' + error.message);
    }
};

export const deleteArticle = async (id) => {
    try {
        console.log("L'article a bien été Supprimé");
        return await api.delete(`article/${id}`);
    } catch (error) {
        throw new Error('Articles - deleteArticle | FAILED: ' + error.message);
    }
}

export const updateArticles = async ({cityData, id}) => {
    try {
        return await api.put(`article/${id}`, cityData);
    } catch (error) {
        throw new Error('Articles - updateArticle | FAILED: ' + error.message);
    }
};
