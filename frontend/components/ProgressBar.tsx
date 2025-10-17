import React, { useEffect, useState } from "react";
import {
    Animated,
    View,
    StyleProp,
    ViewStyle,
} from "react-native";

import { useTheme } from "@context/ThemeProvider";
import { ProgressBarStyles as styles, Theme } from "@theme/index";
import CustomText from "./CustomText";

const ProgressBar: React.FC = () => {
    const { theme } = useTheme();
    const [progress] = useState(new Animated.Value(0));
    const [percentage, setPercentage] = useState<number>(0);

    // Styles dynamiques
    const getBackgroundColorStyle: StyleProp<ViewStyle> =
        theme === "dark" ? Theme.backgroundColorDark : Theme.backgroundColorLight;

    const getAnimatedViewBackgroundColorStyle: StyleProp<ViewStyle> =
        theme === "dark" ? Theme.backgroundColorLight : Theme.backgroundColorDark;

    const getTextColorStyle: { color: string } =
        theme === "dark" ? Theme.textLight : Theme.textDark;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start();

        const progressListener = progress.addListener(({ value }) => {
            setPercentage(Math.round(value * 100));
        });

        return () => {
            progress.removeListener(progressListener);
        };
    }, [progress]);

    return (
        <View style={[styles.container, getBackgroundColorStyle]}>
            <Animated.View
                style={[
                    styles.animated,
                    getAnimatedViewBackgroundColorStyle,
                    {
                        width: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                        }),
                        borderRadius: 10,
                    },
                ]}
            />
            <CustomText level="p" style={[Theme.text, getTextColorStyle]}>
                {percentage}%
            </CustomText>
        </View>
    );
};

export default ProgressBar;
