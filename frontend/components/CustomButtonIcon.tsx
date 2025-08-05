import React from "react";
import {StyleProp, ViewStyle} from "react-native";
import CustomButton from "./CustomButton";
import CustomIcon from "./CustomIcon";

type ButtonType = "primary" | "secondary" | "tertiary";
type IconName = "loading" | "logo" | "settings" | "menu";

type CustomButtonIconProps = {
    type?: ButtonType;
    onBackground?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    icon?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
};

const CustomButtonIcon: React.FC<CustomButtonIconProps> = ({
                                                               type = "primary",
                                                               onBackground = false,
                                                               withBackground = false,
                                                               withBorder = false,
                                                               icon = "loading",
                                                               onPress = () => {
                                                               },
                                                               style,
                                                               disabled = false,
                                                           }) => {
    const validIcons: IconName[] = ["loading", "logo", "settings", "menu"];
    const safeIcon: IconName = validIcons.includes(icon as IconName)
        ? (icon as IconName)
        : "loading";

    return (
        <CustomButton
            type={type}
            withBackground={withBackground}
            withBorder={withBorder}
            onPress={onPress}
            style={style}
            disabled={disabled}
            accessibilityLabel={`Icon button: ${safeIcon}`}
        >
            <CustomIcon icon={safeIcon} onBackground={onBackground} />
        </CustomButton>
    );
};

export default CustomButtonIcon;
