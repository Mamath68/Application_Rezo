import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = "http://192.168.1.26:8080"; // Use ngrok if needed

const API_BASE_URL = `${API_URL}/api/`;

// Define types for the fetchData parameters
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchDataConfig {
    url: string;
    method: HttpMethod;
    body?: Record<string, any> | null;
    withAuth?: boolean;
}

const api = {
    fetchData: async <T>({
        url,
        method = "GET",
        body = null,
        withAuth = true,
    }: FetchDataConfig): Promise<T> => {
        try {
            const headers: Record<string, string> = { "Content-Type": "application/json" };

            if (withAuth) {
                const token = await AsyncStorage.getItem("userToken");
                if (token) {
                    headers.Authorization = `Bearer ${token}`;
                } else {
                    throw new Error("Token not found! Please log in again.");
                }
            }

            const config: RequestInit = { method, headers };
            if (body) {
                config.body = JSON.stringify(body);
            }

            const response = await fetch(`${API_BASE_URL}${url}`, config);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `HTTP error! Status: ${response.status}, Message: ${
                        errorData.message || errorData
                    }`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },

    get: async <T>(url: string): Promise<T> => api.fetchData<T>({ url, method: "GET", withAuth: false }),
    post: async <T>(url: string, body: Record<string, any>): Promise<T> =>
        api.fetchData<T>({ url, method: "POST", body, withAuth: false }),
    put: async <T>(url: string, body: Record<string, any>): Promise<T> =>
        api.fetchData<T>({ url, method: "PUT", body, withAuth: false }),
    delete: async <T>(url: string): Promise<T> => api.fetchData<T>({ url, method: "DELETE", withAuth: false }),
};

export default api;
