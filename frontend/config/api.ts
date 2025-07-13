// Définition des environnements valides
type Environment =
    | "maison"
    | "bourtz"
    | "ceaMobile"
    | "lavoisier"
    | "briand"
    | "boat"
    | "rdc"
    | "serfa"
    | "bibgr";

// Mapping des adresses IP
const IPs: Record<Environment, string> = {
    maison: "192.168.1.26",
    bourtz: "192.168.1.61",
    ceaMobile: "192.168.101.33",
    lavoisier: "192.168.40.188",
    briand: "192.168.0.19",
    boat: "10.202.72.29",
    rdc: "192.168.103.33",
    serfa: "10.31.252.240",
    bibgr: "192.168.170.33",
};

// Environnement actif
const ACTIVE_ENV: Environment = "maison";

// Export de l'URL de base
export const CONFIG_API_BASE_URL_IP: string = `http://${IPs[ACTIVE_ENV]}:8080`;
