import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_API_BASE_URL_IP} from "@config/api";

const API_BASE_URL: string = `${CONFIG_API_BASE_URL_IP}/api/`;

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
    url: string;
    method?: HTTPMethod;
    body?: unknown;
    withAuth?: boolean;
}

const fetchData = async <T = unknown>({
                                          url,
                                          method = "GET",
                                          body = null,
                                          withAuth = true,
                                      }: FetchOptions): Promise<T | string> => {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (withAuth) {
            const token = await AsyncStorage.getItem("userToken");
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            } else {
                new Error("Token not found! Please log in again.");
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
            new Error(errorMessage);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }

        return "Operation completed successfully.";
    } catch (error: any) {
        console.error("API Fetch Error:", error.message);
        throw error;
    }
};

const api = {
    get: <T = unknown>(url: string, withAuth = true) =>
        fetchData<T>({url, method: "GET", withAuth}),

    post: <T = unknown>(url: string, body: unknown, withAuth = true) =>
        fetchData<T>({url, method: "POST", body, withAuth}),

    put: <T = unknown>(url: string, body: unknown, withAuth = true) =>
        fetchData<T>({url, method: "PUT", body, withAuth}),

    delete: <T = unknown>(url: string, withAuth = true) =>
        fetchData<T>({url, method: "DELETE", withAuth}),
};

export default api;
