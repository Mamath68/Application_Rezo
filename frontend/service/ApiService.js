import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_API_BASE_URL_IP} from "../config/api";

const API_BASE_URL = `${CONFIG_API_BASE_URL_IP}/api/`;

const api = {
    fetchData: async (url, method = "GET", body = null, withAuth = true) => {
        try {
            const headers = {"Content-Type": "application/json"};

            if (withAuth) {
                const token = await AsyncStorage.getItem("userToken");
                if (token) headers.Authorization = `Bearer ${token}`;
                else {
                    new Error("Token not found! Please log in again.");
                }
            }

            const config = {method, headers};
            if (body) config.body = JSON.stringify(body);

            const response = await fetch(`${API_BASE_URL}${url}`, config);
            console.log("API response:", response);

            if (!response.ok) {
                let errorMessage = `HTTP error! Status: ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorMessage += `, Message: ${errorData.message || JSON.stringify(errorData)}`;
                } catch (jsonError) {
                    console.warn("Response has no JSON body.");
                }
                new Error(errorMessage);
            }

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return await response.json();
            }

            return "Message correctement supprimé";
        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },

    get: (url) => api.fetchData(url, "GET", null, false),
    post: (url, body) => api.fetchData(url, "POST", body, false),
    put: (url, body) => api.fetchData(url, "PUT", body, false),
    delete: (url) => api.fetchData(url, "DELETE", null, false),
};


export default api;
