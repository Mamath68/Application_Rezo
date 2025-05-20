import {isValidEmail, isStrongPassword, isNotEmpty} from './validators';

export const validateRegisterForm = (
    phone,
    genre,
    email,
    username,
    password,
    confirmPassword
) => {
    let isValid = true;
    const errors = {};

    if (!isNotEmpty(genre)) {
        errors.genre = "Genre requis";
        isValid = false;
    }

    if (!isNotEmpty(phone)) {
        errors.phone = "Numéro est requis";
        isValid = false;
    }

    if (!isValidEmail(email)) {
        errors.email = "Adresse mail invalide";
        isValid = false;
    }

    if (!isNotEmpty(username)) {
        errors.username = "Nom d'usage requis";
        isValid = false;
    }

    if (!isNotEmpty(password)) {
        errors.password = "Le mot de passe est requis";
        isValid = false;
    } else if (!isStrongPassword(password)) {
        errors.password =
            "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
        isValid = false;
    }

    if (confirmPassword !== password) {
        errors.confirmPassword = "Les mots de passe ne correspondent pas.";
        isValid = false;
    }

    return {isValid, errors};
};

export const validateLoginForm = (username, password) => {
    let isValid = true;
    const errors = {};

    if (!isNotEmpty(username)) {
        errors.username = "Nom d'usage requis";
        isValid = false;
    }

    if (!isNotEmpty(password)) {
        errors.password = "Le mot de passe est requis";
        isValid = false;
    }

    return {isValid, errors};
};
