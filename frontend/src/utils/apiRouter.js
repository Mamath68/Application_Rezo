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
        return await api.delete(`article/${id}`);
    } catch (error) {
        throw new Error('Articles - deleteArticle | FAILED: ' + error.message);
    }
}


//---- VILLES ----\\
export const createCity = async (cityData) => {
    try {
        return await api.post('city/create', cityData);
        // echec — message: 'City already exists'
        // OK — response.message: 'Request was successful'
        // OK — response.city: id, name, latitude, longitude, latitudeDelta & longitudeDelta.

    } catch (error) {
        throw new Error('City - createCity | FAILED: ' + error.message);
    }
};

export const updateCity = async (cityData) => {
    try {
        return await api.put('city/update', cityData);
        // echec — message: 'City not found'
        // OK — response.message: 'Request was successful'

    } catch (error) {
        throw new Error('City - updateCity | FAILED: ' + error.message);
    }
};

export const deleteCity = async (cityId) => {
    try {
        return await api.delete(`city/delete/id/${cityId}`);
        // echec — message: 'City not found'
        // OK — response.message: 'Request was successful'

    } catch (error) {
        throw new Error('City - deleteCity | FAILED: ' + error.message);
    }
};

export const getOneCityById = async (cityId) => {
    try {
        return await api.get(`city/get/id/${cityId}`);
        // echec - message: 'City don't exists'
        // ok - response.message: 'Request was successful'
        // ok - response.city: id, name, latitude, longitude, latitudeDelta & longitudeDelta

    } catch (error) {
        throw new Error('City - getOneCityById | FAILED: ' + error.message);
    }
};

export const getOneCityByName = async (cityName) => {
    try {
        return await api.get(`city/get/name/${cityName}`);
        // echec - message: 'City don't exists'
        // ok - response.message: 'Request was successful'
        // ok - response.city: id, name, latitude, longitude, latitudeDelta & longitudeDelta

    } catch (error) {
        throw new Error('City - getOneCityByName | FAILED: ' + error.message);
    }
};

