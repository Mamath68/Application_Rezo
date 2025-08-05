import React, {isValidElement} from "react";
import {StyleProp, TextStyle, ViewStyle} from "react-native";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";

type ButtonType = "primary" | "secondary" | "tertiary";

type CustomButtonTextProps = {
    type?: ButtonType;
    withBackground?: boolean;
    onBackground?: boolean;
    withBorder?: boolean;
    onPress?: () => void;
    children?: React.ReactNode;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
};

const CustomButtonText: React.FC<CustomButtonTextProps> = ({
                                                               type = "primary",
                                                               withBackground = true,
                                                               withBorder = true,
                                                               children,
                                                               onPress = () => {
                                                               },
                                                               textStyle,
                                                               buttonStyle,
                                                               disabled = false,
                                                           }) => {
    const renderContent = () => {
        if (!children) {
            return <CustomText level="p" style={textStyle}>Button</CustomText>;
        }

        return isValidElement(children)
            ? children
            : <CustomText level="p" style={textStyle}>{children}</CustomText>;
    };

    return (
        <CustomButton
            type={type}
            withBackground={withBackground}
            withBorder={withBorder}
            onPress={onPress}
            style={buttonStyle}
            disabled={disabled}
            accessibilityLabel={
                typeof children === "string" ? children : "Text button"
            }
        >
            {renderContent()}
        </CustomButton>
    );
};

export default CustomButtonText;
