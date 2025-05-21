import {useEffect, useState} from "react";
import {Animated, View} from "react-native";

import {useTheme} from "../context/ThemeProvider";
import {ProgressBarStyles as styles, Theme} from '../theme';
import CustomText from './CustomText';

const ProgressBar = () => {
    const {theme} = useTheme();
    const [progress] = useState(new Animated.Value(0));
    const [percentage, setPercentage] = useState(0);

    // Styles dynamiques
    const getBackgroundColorStyle = theme === 'dark' ? Theme.backgroundColorDark : Theme.backgroundColorLight;
    const getAnimatedViewBackgroundColorStyle = theme === 'dark' ? Theme.backgroundColorLight : Theme.backgroundColorDark;
    const getTextColorStyle = theme === 'dark' ? Theme.textLight : Theme.textDark;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false, // Ne supporte pas la largeur, donc `false`
        }).start();

        // Écouteur pour suivre la progression
        const progressListener = progress.addListener(({value}) => {
            setPercentage(Math.round(value * 100));
        });

        // Nettoyage à la fin
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
                            outputRange: ['0%', '100%'],
                        }),
                        borderRadius: 10
                    },
                ]}
            >
            </Animated.View>
            <CustomText level='p' style={[Theme.text, getTextColorStyle]}>{percentage}%</CustomText>
        </View>
    );
};

export default ProgressBar;
