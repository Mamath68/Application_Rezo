import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadUser = async () => {
    try {
        const userData = await AsyncStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error("Error recovering user data", error);
        return null;
    }
};

export const logoutUser = async (router) => {
    try {
        await AsyncStorage.removeItem('user');
    } catch (error) {
        console.error("Error during disconnection", error);
    }
}
