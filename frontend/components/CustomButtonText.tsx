import CustomButton from './CustomButton';
import CustomText from "./CustomText";
import React, { isValidElement } from "react";

const CustomButtonText = ({
                              type = 'primary',
                              withBackground = true,
                              withBorder = true,
                              children,
                              onPress = () => {},
                              textStyle,
                              buttonStyle,
                              disabled = false,
                          }) => {
    const renderContent = () => {
        if (!children) {
            return <CustomText level='p' style={textStyle}>Button</CustomText>;
        }

        return isValidElement(children)
            ? children
            : <CustomText level='p' style={textStyle}>{children}</CustomText>;
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
