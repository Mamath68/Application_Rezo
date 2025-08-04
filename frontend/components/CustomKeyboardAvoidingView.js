import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { Theme } from "../theme";

const CustomKeyboardAvoidingView = ({ children, style = {} }) => {
    const { theme } = useTheme();

    const getViewBackgroundColorStyle =
        theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[{ flex: 1 }, getViewBackgroundColorStyle, style]}
        >
            {children}
        </KeyboardAvoidingView>
    );
};

export default CustomKeyboardAvoidingView;
