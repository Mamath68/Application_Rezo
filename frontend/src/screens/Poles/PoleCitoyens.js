import {SafeAreaView} from "react-native-safe-area-context";
import {Image, View} from 'react-native';
import {HomeScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomText, Header} from "@/components";

const PoleCitoyens = () => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={[styles.container, getViewBackgroundColorStyle]}>
                <Header title="Le Pôle Citoyen"/>
                <CustomText level="h2">Bienvenue au Pôle Citoyen</CustomText>
                <Image source={require('@assets/rezo-logo.png')} style={[styles.logo]}/>
            </View>
        </SafeAreaView>
    )
};

export default PoleCitoyens;
