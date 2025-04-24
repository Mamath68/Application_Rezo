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
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const getViewBackgroundColorStyle =
        theme === "dark" ? styles.containerDark : styles.containerLight;

    const validateForm = () => {
        let isValid = true;
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setUsernameError("");
        setPhoneError("");
        setPasswordError("");
        setConfirmPasswordError("");


        // Validation du nom de famille
        if (!phone) {
            setPhoneError("Phone is required");
            isValid = false;
        }

        // Validation de l'email
        if (!email.includes("@")) {
            setEmailError("Invalid email address");
            isValid = false;
        }

        // Validation du nom d'utilisateur
        if (!username) {
            setUsernameError("Username is required");
            isValid = false;
        }

        // Validation du mot de passe
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        }

        // Validation de la confirmation du mot de passe
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        }

        return isValid;
    };

    const handleRegister = async () => {
        if (validateForm()) {
            setLoading(true);
            console.log("Registering:", {firstName, lastName, phone, email, username, password});

            try {
                const user = {firstName, lastName, email, phone, username, password};

                const response = await registerUser(user);
                console.log("API answer:", response);

                if (response.message === 'User already exists') {
                    setLoading(false);
                    return;
                }

                if (response.message === 'User created successfully' && response.user) {
                    console.log("Retrieved user:", response.user);
                    await AsyncStorage.setItem("user", JSON.stringify(response.user));

                    router.push({
                        pathname: '/(drawer-guest)',
                        params: {user: JSON.stringify(response.user)}
                    });
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
                                        label="First Name"
                                        placeholder="First name..."
                                        type="text"
                                        value={firstName}
                                        onChangeText={setFirstName}
                                        error={firstNameError}
                                    />
                                    <CustomInput
                                        label="Last Name"
                                        placeholder="Last name..."
                                        type="text"
                                        value={lastName}
                                        onChangeText={setLastName}
                                        error={lastNameError}
                                    />
                                    <CustomInput
                                        label="Phone Number *"
                                        placeholder="Phone..."
                                        type="text"
                                        value={phone}
                                        onChangeText={setPhone}
                                        error={phoneError}
                                    />
                                    <CustomInput
                                        label="Email Address *"
                                        placeholder="Email..."
                                        type="email"
                                        value={email}
                                        onChangeText={setEmail}
                                        error={emailError}
                                    />
                                    <CustomInput
                                        label="Username *"
                                        placeholder="Username..."
                                        type="text"
                                        value={username}
                                        onChangeText={setUsername}
                                        error={usernameError}
                                    />
                                    <CustomInput
                                        label="Password *"
                                        placeholder="Password..."
                                        type="password"
                                        value={password}
                                        onChangeText={setPassword}
                                        error={passwordError}
                                    />
                                    <CustomInput
                                        label="Confirm password..."
                                        placeholder="Confirm password..."
                                        type="password"
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
                                        buttonStyle={styles.button}
                                        onPress={handleRegister}
                                        disabled={loading}
                                    >
                                        {loading ? "Registering..." : "Join the community"}
                                    </CustomButtonText>
                                    <CustomButtonLink
                                        text="Already have an account?"
                                        linkText="Login!"
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
