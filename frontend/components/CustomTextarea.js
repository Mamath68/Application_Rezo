import {useState} from "react";
import {TextInput, View} from "react-native";

import {useTheme} from "../context/ThemeProvider";
import {TextareaStyles as styles} from "../theme";
import CustomText from "./CustomText";

const CustomTextarea = ({
                            label,
                            placeholder = "",
                            error = "",
                            value,
                            onChangeText,
                            inputStyle = {},
                            containerStyle = {},
                        }) => {
    const {theme} = useTheme();
    const [isFocused, setIsFocused] = useState(false);

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

            {/* Champ de texte multiligne */}
            <View
                style={[
                    styles.inputContainer,
                    {borderColor: themeModeStyle.brClr},
                ]}
            >
                <TextInput
                    style={[styles.textarea, {color: themeModeStyle.textClr}, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={themeModeStyle.textClr}
                    multiline={true}
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

export default CustomTextarea;
