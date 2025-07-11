import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface CustomButtonIconProps {
    type?: ButtonType;
    onBackground?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    icon: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

const CustomButtonIcon: React.FC<CustomButtonIconProps> = ({
    type = 'primary',
    onBackground = false,
    withBackground = false,
    withBorder = false,
    icon,
    onPress = () => {},
    style,
    disabled = false,
}) => {
    return (
        <CustomButton
            type={type}
            onBackground={onBackground}
            withBackground={withBackground}
            withBorder={withBorder}
            onPress={onPress}
            style={style}
            disabled={disabled}
        >
            <CustomIcon icon={icon} onBackground={onBackground} />
        </CustomButton>
    );
};

export default CustomButtonIcon;
