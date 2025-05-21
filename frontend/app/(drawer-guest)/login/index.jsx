import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useTheme} from '../../../context/ThemeProvider';

import {CustomButtonText, CustomInput, Header} from '../../../components';

import {loginUser, validateLoginForm} from '../../../utils';
import {LoginScreenStyles as styles, Theme} from "../../../theme";
import {useRouter} from "expo-router";

export default function Login() {
    const {theme} = useTheme();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const getViewBackgroundColorStyle = theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;
    const getViewColorStyle = theme === "dark" ? Theme.textDark : Theme.textLight;

    const handleUsernameChange = (username) => setUsername(username);
    const handlePasswordChange = (password) => setPassword(password);

    const handleLogin = async ({username, password}) => {
        console.log('handleLogin:', username, password);
        setLoading(true);

        try {
            const user = {username, password};

            const response = await loginUser(user);
            console.log('API answer:', response);

            if (response.message === 'No matching user') {
                setLoading(false);
                return;
            }

            if (response.message === 'Login successful' && response.user) {
                console.log('Retrieved user:', response.user);
                await AsyncStorage.setItem('user', JSON.stringify(response.user));
                router.replace('/(drawer-auth)');
            }

        } catch (error) {
            console.log('Connection error:', error);
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        const {isValid, errors} = validateLoginForm(username, password);

        setUsernameError(errors.username || '');
        setPasswordError(errors.password || '');

        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleLogin({username, password});
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps='handled'
                    >
                        <View style={[Theme.container, getViewBackgroundColorStyle]}>
                            <Header/>
                            <View style={[styles.containerContent]}>
                                <View style={[styles.containerForm]}>
                                    <View style={[styles.containerFormForm]}>
                                        <CustomInput
                                            label="Nom d'usage"
                                            placeholder="Écrivez votre nom d'usage..."
                                            keyboardType="default"
                                            value={username}
                                            onChangeText={handleUsernameChange}
                                            error={usernameError}
                                        />
                                        <CustomInput
                                            label="Mot de passe"
                                            placeholder="Écrivez votre mot de passe..."
                                            keyboardType="default"
                                            secureTextEntry={true}
                                            value={password}
                                            onChangeText={handlePasswordChange}
                                            error={passwordError}
                                        />
                                    </View>
                                </View>
                                <View style={[styles.containerButtons]}>
                                    <CustomButtonText
                                        type="primary"
                                        onBackground={true}
                                        withBackground={true}
                                        withBorder={true}
                                        textStyle={getViewColorStyle}
                                        buttonStyle={styles.button}
                                        onPress={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? 'Connexion...' : "Me Connecter"}
                                    </CustomButtonText>
                                    <CustomButtonText
                                        type='secondary'
                                        onBackground={false}
                                        withBackground={false}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        onPress={() =>
                                            router.push('/register')
                                        }
                                    >
                                        S'inscrire
                                    </CustomButtonText>
                                    <CustomButtonText
                                        type='primary'
                                        onBackground={true}
                                        withBackground={true}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        textStyle={getViewColorStyle}
                                        onPress={() =>
                                            router.push('/forgot-password')
                                        }
                                    >
                                        Mot de passe oublié? Cliqué ici!
                                    </CustomButtonText>
                                </View>
                            </View>
                            <View style={[styles.containerBack, getViewBackgroundColorStyle]}>
                                <CustomButtonText
                                    type='tertiary'
                                    onBackground={false}
                                    withBackground={false}
                                    withBorder={true}
                                    buttonStyle={styles.button2}
                                    onPress={() =>
                                        router.replace("/")
                                    }
                                >
                                    Retour
                                </CustomButtonText>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
