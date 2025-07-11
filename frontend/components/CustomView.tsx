import React, { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { Theme } from "../theme";

interface CustomViewProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const CustomView: React.FC<CustomViewProps> = ({ children, style }) => {
    const { theme } = useTheme();

    const dynamicStyle = theme === "dark"
        ? Theme.backgroundColorDark
        : Theme.backgroundColorLight;

    return (
        <View style={[dynamicStyle, style]}>
            {children}
        </View>
    );
};

export default CustomView;
