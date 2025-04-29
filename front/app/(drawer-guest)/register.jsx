import {useState} from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {useTheme} from "../../context/ThemeProvider";
import {useRouter} from 'expo-router';

import {CustomButtonLink, CustomButtonText, CustomInput, CustomView} from "../../components";

import {registerUser} from "../../utils";
import {RegisterScreenStyles as styles} from "../../theme";

export default function RegisterScreen() {
    const router = useRouter();
    const {theme} = useTheme();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [genre, setGenre] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [genreError, setGenreError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const getViewBackgroundColorStyle = theme === "dark" ? styles.containerDark : styles.containerLight;
    const getViewColorStyle = theme === "dark" ? styles.lightText : styles.darkText;

    const validateForm = () => {
        let isValid = true;
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setUsernameError("");
        setPhoneError("");
        setGenreError("");
        setPasswordError("");
        setConfirmPasswordError("");


        if (!phone) {
            setPhoneError("Numéro est requis");
            isValid = false;
        }

        if (!email.includes("@")) {
            setEmailError("Addresse mail invalide");
            isValid = false;
        }

        if (!username) {
            setUsernameError("Nom d'usage requis");
            isValid = false;
        }

        if (password.length < 6) {
            setPasswordError("Le mot de passe doit être minimum de 6 caractères");
            isValid = false;
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError("Les mots de passes ne correspondent pas.");
            isValid = false;
        }

        return isValid;
    };

    const handleRegister = async () => {
        if (validateForm()) {
            setLoading(true);
            console.log("Registering:", {firstName, lastName, phone, genre, email, username, password});

            try {
                const user = {firstName, lastName, email, phone, genre, username, password};

                const response = await registerUser(user);
                console.log("API answer:", response);

                if (response.message === 'User already exists') {
                    setLoading(false);
                    return;
                }

                if (response.message === 'User created successfully' && response.user) {
                    console.log("Retrieved user:", response.user);
                    await AsyncStorage.setItem("user", JSON.stringify(response.user));

// Attendre un peu avant la redirection
                    setTimeout(() => {
                        router.replace('/login');
                    }, 100);

                }
            } catch (error) {
                console.log("Registration error:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
                        <CustomView style={[styles.container]}>
                            <CustomView style={[styles.containerContent]}>
                                <CustomView style={[styles.containerForm]}>
                                    <CustomInput
                                        label="Vos Pronoms"
                                        placeholder="Les Pronoms"
                                        keyboardType="default"
                                        value={genre}
                                        onChangeText={setGenre}
                                        error={genreError}
                                    />
                                    <CustomInput
                                        label="Prénom"
                                        placeholder="Prénom"
                                        keyboardType="default"
                                        value={firstName}
                                        onChangeText={setFirstName}
                                        error={firstNameError}
                                    />
                                    <CustomInput
                                        label="Nom"
                                        placeholder="Nom"
                                        keyboardType="default"
                                        value={lastName}
                                        onChangeText={setLastName}
                                        error={lastNameError}
                                    />
                                    <CustomInput
                                        label="Numéro de téléphone *"
                                        placeholder="Numéros de téléphone"
                                        keyboardType="numeric"
                                        value={phone}
                                        onChangeText={setPhone}
                                        error={phoneError}
                                    />
                                    <CustomInput
                                        label="Addresse Mail *"
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        value={email}
                                        onChangeText={setEmail}
                                        error={emailError}
                                    />
                                    <CustomInput
                                        label="Nom d'usage *"
                                        placeholder="Nom d'usage"
                                        keyboardType="default"
                                        value={username}
                                        onChangeText={setUsername}
                                        error={usernameError}
                                    />
                                    <CustomInput
                                        label="Mot de passe *"
                                        placeholder="Mot de passe"
                                        keyboardType="password"
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={setPassword}
                                        error={passwordError}
                                    />
                                    <CustomInput
                                        label="Confirmer le mot de passe"
                                        placeholder="Confirmer le mot de passe"
                                        keyboardType="password"
                                        secureTextEntry={true}
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        error={confirmPasswordError}
                                    />
                                </CustomView>
                                <CustomView style={[styles.containerButtons]}>
                                    <CustomButtonText
                                        type="primary"
                                        onBackground={true}
                                        withBackground={true}
                                        withBorder={true}
                                        textStyle={getViewColorStyle}
                                        buttonStyle={styles.button}
                                        onPress={handleRegister}
                                        disabled={loading}
                                    >
                                        {loading ? "Inscription..." : "Rejoins le Rezo"}
                                    </CustomButtonText>
                                    <CustomButtonLink
                                        text="Déjà un compte?"
                                        linkText="Se Connecter!"
                                        type="primary"
                                        onPress={() => router.push("/login")}
                                    />
                                </CustomView>
                            </CustomView>
                            <CustomView style={[styles.containerBack, getViewBackgroundColorStyle]}>
                                <CustomButtonText
                                    type="tertiary"
                                    onBackground={false}
                                    withBackground={false}
                                    withBorder={true}
                                    buttonStyle={styles.button2}
                                    onPress={() => router.push("/")}
                                >
                                    Go back
                                </CustomButtonText>
                            </CustomView>
                        </CustomView>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
