import React from 'react';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';

const CustomButtonIcon = ({
                              type = 'primary',
                              onBackground = false,
                              withBackground = false,
                              withBorder = false,
                              icon,
                              onPress = () => {},
                              style,
                              disabled = false,
                          }) => {
    const validIcons = ["loading", "logo", "settings", "menu"];
    const safeIcon = validIcons.includes(icon) ? icon : "loading";

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
