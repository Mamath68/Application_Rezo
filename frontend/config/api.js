const IPs = {
    maison: "http://192.168.1.26:8080",
    bourtz: "http://192.168.1.61:8080",
    ceaMobile: "http://192.168.101.33:8080",
    lavoisier: "http://192.168.40.188:8080",
    briand: "http://192.168.0.19:8080",
};

const ACTIVE_ENV = "bourtz";

export const CONFIG_API_BASE_URL_IP = IPs[ACTIVE_ENV];
