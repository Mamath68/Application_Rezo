import {CONFIG_API_BASE_URL_IP} from "@config/api";

const API_BASE_URL: string = `${CONFIG_API_BASE_URL_IP}/api/`;

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
    url: string;
    method?: HTTPMethod;
    body?: unknown;
}

const fetchData = async <T = unknown>({
                                          url,
                                          method = "GET",
                                          body = null,
                                      }: FetchOptions): Promise<T> => {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

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

        throw new Error("Unexpected response: not JSON.");
    } catch (error: any) {
        console.error("API Fetch Error:", error.message);
        throw error;
    }
};

const api = {
    get: <T = unknown>(url: string) => fetchData<T>({url, method: "GET"}),
    post: <T = unknown>(url: string, body: unknown) => fetchData<T>({url, method: "POST", body}),
    put: <T = unknown>(url: string, body: unknown) => fetchData<T>({url, method: "PUT", body}),
    delete: <T = unknown>(url: string) => fetchData<T>({url, method: "DELETE"}),
};

export default api;
