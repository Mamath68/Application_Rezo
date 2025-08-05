import React, {ReactNode} from "react";
import {KeyboardAvoidingView, Platform, StyleProp, ViewStyle,} from "react-native";
import {useTheme} from "@context/ThemeProvider";
import {Theme} from "@theme/index";

type CustomKeyboardAvoidingViewProps = {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
};

const CustomKeyboardAvoidingView: React.FC<CustomKeyboardAvoidingViewProps> = ({
                                                                                   children,
                                                                                   style = {},
                                                                               }) => {
    const { theme } = useTheme();

    const getViewBackgroundColorStyle =
        theme === "dark"
            ? Theme.backgroundColorDark
            : Theme.backgroundColorLight;

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
