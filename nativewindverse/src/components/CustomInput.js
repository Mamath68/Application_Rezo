import {useState} from "react";
import {TextInput, View} from "react-native";

import {useTheme} from "../context/ThemeProvider";

import CustomText from "./CustomText";
import {InputStyles as styles} from "../theme";

const CustomInput = ({
                         label,
                         placeholder = "",
                         error = "",
                         value,
                         keyboardType,
                         secureTextEntry,
                         onChangeText,
                         inputStyle = {},
                         containerStyle = {},
                     }) => {
    const {theme} = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Styles dynamiques selon le thème
    const themeModeStyle = {
        brClr: error ? "red" : isFocused ? "#007BFF" : "#CCC",
        textClr: theme === "dark" ? "#FFF" : "#000",
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {/* Label */}
            {label && (
                <CustomText level="p" style={[styles.label, {color: themeModeStyle.textClr}]}>
                    {label}
                </CustomText>
            )}

            <View
                style={[
                    styles.inputContainer,
                    {borderColor: themeModeStyle.brClr},
                ]}
            >
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
            </View>

            {/* Message d'erreur */}
            {error && <CustomText level="note" style={styles.errorText}>{error}</CustomText>}
        </View>
    );
};

export default CustomInput;
