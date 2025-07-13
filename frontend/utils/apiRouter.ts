import api from '../service/ApiService';

// Typage générique de la fonction de requête
type RequestFunction<T> = () => Promise<T>;

// Gestion centralisée des erreurs
const handleRequest = async <T>(requestFn: RequestFunction<T>, context: string): Promise<T> => {
    try {
        return await requestFn();
    } catch (error: any) {
        throw new Error(`${context} | FAILED: ${error.message}`);
    }
};

// === Typage de la réponse des permanences ===
// À adapter selon ta vraie structure !
export interface Savoir {
    id: number;
    titre: string;
    description: string;
    role: 'OFFRE' | 'DEMANDE';
}

export interface Permanence {
    id: number;
    shortLocal: string;
    nomLocal: string;
    address: string;
    date: string;
    permanenceDebut: string;
    permanenceFin: string;
    contact: string;
    phoneContact: string;
    savoirs: Savoir[];
}

// === Export de la fonction ===
export const getAllPermanences = (): Promise<{ permanences: Permanence[] }> =>
    handleRequest(() => api.get<{ permanences: Permanence[] }>('permanences'), 'Permanences - getAllPermanences');
