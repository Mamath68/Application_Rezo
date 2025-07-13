import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONFIG_API_BASE_URL_IP } from "../config/api";

// Constante de base
const API_BASE_URL = `${CONFIG_API_BASE_URL_IP}/api/`;

// Type pour les méthodes HTTP
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Options de la requête
interface FetchOptions<T = any> {
    url: string;
    method?: HttpMethod;
    body?: T | null;
    withAuth?: boolean;
}

// Fonction générique
const fetchData = async <T = any>({ url, method = "GET", body = null, withAuth = true }: FetchOptions): Promise<T> => {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (withAuth) {
            const token = await AsyncStorage.getItem("userToken");
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            } else {
                throw new Error("Token not found! Please log in again.");
            }
        }

        const config: RequestInit = {
            method,
            headers,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        const response = await fetch(`${API_BASE_URL}${url}`, config);

        if (!response.ok) {
            let errorMessage = `HTTP error! Status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage += `, Message: ${errorData.message || JSON.stringify(errorData)}`;
            } catch {
                errorMessage += `, No JSON response.`;
            }
            throw new Error(errorMessage);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }

        // Si ce n’est pas du JSON, retourne un message
        return "Operation completed successfully." as T;
    } catch (error: any) {
        console.error("API Fetch Error:", error.message);
        throw error;
    }
};

// Export de méthodes simplifiées
const api = {
    get: <T = any>(url: string, withAuth = true) =>
        fetchData<T>({ url, method: "GET", withAuth }),
    post: <T = any, B = any>(url: string, body: B, withAuth = true) =>
        fetchData<T>({ url, method: "POST", body, withAuth }),
    put: <T = any, B = any>(url: string, body: B, withAuth = true) =>
        fetchData<T>({ url, method: "PUT", body, withAuth }),
    delete: <T = any>(url: string, withAuth = true) =>
        fetchData<T>({ url, method: "DELETE", withAuth }),
};

export default api;
