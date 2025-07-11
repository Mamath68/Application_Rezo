import React, {ReactNode} from "react";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import {isValidElement} from "react";

interface CustomButtonTextProps {
    type?: "primary" | "secondary" | "tertiary";
    onBackground?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    children: ReactNode;
    onPress?: () => void;
    textStyle?: object;
    buttonStyle?: object;
    disabled?: boolean;
}

const CustomButtonText: React.FC<CustomButtonTextProps> = ({
                                                               type = "primary",
                                                               onBackground = true,
                                                               withBackground = true,
                                                               withBorder = true,
                                                               children,
                                                               onPress = () => {
                                                               },
                                                               textStyle,
                                                               buttonStyle,
                                                               disabled = false,
                                                           }) => {
    return (
        <CustomButton
            type={type}
            onBackground={onBackground}
            withBackground={withBackground}
            withBorder={withBorder}
            onPress={onPress}
            style={buttonStyle}
            disabled={disabled}
        >
            {isValidElement(children) ? (
                children
            ) : (
                <CustomText level="p" style={textStyle}>
                    {children}
                </CustomText>
            )}
        </CustomButton>
    );
};

export default CustomButtonText;
