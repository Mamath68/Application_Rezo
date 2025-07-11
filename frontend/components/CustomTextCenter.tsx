import React from "react";
import CustomText from "./CustomText";
import { TextStyle } from "react-native";

interface CustomTextCenterProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
    style?: TextStyle;
}

const CustomTextCenter: React.FC<CustomTextCenterProps> = ({ level = "p", children, style }) => (
    <CustomText level={level} style={[{ textAlign: "center" }, style]}>
        {children}
    </CustomText>
);

export default CustomTextCenter;
