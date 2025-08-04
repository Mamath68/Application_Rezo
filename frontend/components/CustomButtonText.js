import CustomButton from './CustomButton';
import CustomText from "./CustomText";
import {isValidElement} from "react";

const CustomButtonText = ({
    type = 'primary',
    onBackground = true,
    withBackground = true,
    withBorder = true,
    children,
    onPress = () => {},
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
            {
                isValidElement(children)
                    ? children
                    : <CustomText level='p' style={textStyle}>{children}</CustomText>
            }
        </CustomButton>
    );
};

export default CustomButtonText;
