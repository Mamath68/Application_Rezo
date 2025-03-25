import {useState} from "react";
import {TextInput, TouchableOpacity, View} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {useTheme} from "@/context/ThemeProvider";

import CustomText from "./CustomText";
import {InputStyles as styles} from "@/theme"

const CustomInput = ({
                         label,
                         placeholder = "",
                         error = "",
                         type = "text", // "name", "email", "password"
                         value,
                         onChangeText,
                         iconName, // Icône personnalisée
                         iconPosition = "right", // Position de l’icône : "left" ou "right"
                         inputStyle = {},
                         containerStyle = {},
                         iconStyle = {},
                     }) => {
    const {theme} = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Styles dynamiques selon le thème
    const themeModeStyle = {
        brClr: error ? "red" : isFocused ? "#007BFF" : "#CCC",
        textClr: theme === "dark" ? "#FFF" : "#000",
    };

    // Déterminer le clavier et la sécurité selon le type
    const keyboardType = type === "email" ? "email-address" : "default";
    const secureTextEntry = type === "password" && !showPassword;

    // Icône associée au type
    const getDefaultIcon = () => {
        switch (type) {
            case "name":
                return "account";
            case "email":
                return "email";
            case "password":
                return showPassword ? "eye-off" : "eye";
            default:
                return iconName;
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {/* Label */}
            {label && (
                <CustomText level="p" style={[styles.label, {color: themeModeStyle.textClr}]}>
                    {label}
                </CustomText>
            )}

            {/* Champ de saisie avec icône */}
            <View
                style={[
                    styles.inputContainer,
                    {borderColor: themeModeStyle.brClr},
                ]}
            >
                {/* Icône à gauche */}
                {iconPosition === "left" && iconName && (
                    <Icon name={getDefaultIcon()} size={20} color="#666" style={[styles.icon, iconStyle]}/>
                )}

                <TextInput
                    style={[styles.input, {color: themeModeStyle.textClr}, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={themeModeStyle.textClr}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                {/* Icône à droite */}
                {iconPosition === "right" && iconName && (
                    <TouchableOpacity
                        onPress={type === "password" ? () => setShowPassword(!showPassword) : null}
                    >
                        <Icon name={getDefaultIcon()} size={20} color="#666" style={[styles.icon, iconStyle]}/>
                    </TouchableOpacity>
                )}
            </View>

            {/* Message d'erreur */}
            {error && <CustomText level="note" style={styles.errorText}>{error}</CustomText>}
        </View>
    );
};

export default CustomInput;
