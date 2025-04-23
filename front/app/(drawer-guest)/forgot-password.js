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

import {useTheme} from '../../context/ThemeProvider';

import {CustomButtonText, CustomInput, Header,} from '../../components';

import {loginUser} from '../../utils';
import {LoginScreenStyles as styles} from "../../theme";
import {useRouter} from "expo-router";

export default function ForgotPassword({}) {
    const {theme} = useTheme();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const getViewBackgroundColorStyle =
        theme === 'dark' ? styles.containerDark : styles.containerLight;

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
        let isValid = true;
        setUsernameError('');
        setPasswordError('');

        console.log('validateform: lauched');

        if (!username) {
            setUsernameError('User name required.');
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password required.');
            isValid = false;
        }

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
                        <View style={[styles.container, getViewBackgroundColorStyle]}>
                            <Header/>
                            <View style={[styles.containerContent]}>
                                {/* Formulaire de connexion */}
                                <View style={[styles.containerForm]}>
                                    <View style={[styles.containerFormForm]}>
                                        <CustomInput
                                            placeholder='Write your username...'
                                            type='text'
                                            value={username}
                                            onChangeText={handleUsernameChange}
                                            error={usernameError}
                                        />
                                        <CustomInput
                                            placeholder='Write your password...'
                                            type='password'
                                            value={password}
                                            onChangeText={handlePasswordChange}
                                            error={passwordError}
                                        />
                                    </View>
                                </View>
                                {/* Buttons */}
                                <View style={[styles.containerButtons]}>
                                    <CustomButtonText
                                        type='primary'
                                        onBackground={true}
                                        withBackground={true}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        onPress={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? 'Changement en cours...' : "Modifier le Mot de passe"}
                                    </CustomButtonText>
                                    <CustomButtonText
                                        type='secondary'
                                        onBackground={false}
                                        withBackground={false}
                                        withBorder={true}
                                        buttonStyle={styles.button}
                                        onPress={() =>
                                            router.push('/')
                                        }
                                    >
                                        Se connecter
                                    </CustomButtonText>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
