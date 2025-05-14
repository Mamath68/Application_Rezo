import {useEffect, useState} from "react";
import {Animated, View} from "react-native";

import {useTheme} from "../context/ThemeProvider";
import {ProgressBarStyles as styles} from '../theme';
import CustomText from './CustomText';

const ProgressBar = () => {
    const {theme} = useTheme();
    const [progress] = useState(new Animated.Value(0));
    const [percentage, setPercentage] = useState(0);

    // Styles dynamiques
    const getBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const getAnimatedViewBackgroundColorStyle = theme === 'dark' ? styles.animatedDark : styles.animatedLight;
    const getTextColorStyle = theme === 'dark' ? styles.textDark : styles.textLight;

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
            <CustomText level='p' style={[styles.text, getTextColorStyle]}>{percentage}%</CustomText>
        </View>
    );
};

export default ProgressBar;
