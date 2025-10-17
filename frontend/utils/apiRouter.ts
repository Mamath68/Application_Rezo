import api from '@service/ApiService';

export enum SavoirRole {
    OFFRE = "Offre",
    DEMANDE = "Demande"
}

export type SavoirType = {
    id: number;
    nom: string;
    role: SavoirRole;
};

export type PermanenceType = {
    id: number;
    address: string;
    nomLocal: string;
    shortLocal: string;
    contact: string;
    phoneContact: string;
    permanenceDebut: string;
    permanenceFin: string;
    date: string;
    savoirs?: SavoirType[];
};

type AsyncFunction<T> = () => Promise<T>;

const handleRequest = async <T>(
    requestFn: AsyncFunction<T>,
    context: string
): Promise<T> => {
    try {
        return await requestFn();
    } catch (error: any) {
        throw new Error(`${context} | FAILED: ${error.message}`);
    }
};

export const getAllPermanences = () =>
    handleRequest(() => api.get<{ permanences: PermanenceType[] }>('permanences'), 'Permanences - getAllPermanences')
