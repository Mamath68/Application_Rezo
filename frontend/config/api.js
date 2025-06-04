const IPs = {
    maison: "192.168.1.26",
    bourtz: "192.168.1.61",
    ceaMobile: "192.168.101.33",
    lavoisier: "192.168.40.188",
    briand: "192.168.0.19",
    boat: "10.202.72.29"
};

const ACTIVE_ENV = "bourtz";

export const CONFIG_API_BASE_URL_IP = `http://${IPs[ACTIVE_ENV]}:8080`;
