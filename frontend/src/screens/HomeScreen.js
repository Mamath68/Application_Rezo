import {SafeAreaView} from "react-native-safe-area-context";
import {Image, View} from 'react-native';
import {HomeScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomText, Header} from "@/components";

const HomeScreen = () => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={[styles.container, getViewBackgroundColorStyle]}>
                <Header title="Accueil"/>
                <CustomText level="h2">Bienvenue au REZO</CustomText>
                <Image source={{uri: "https://static.wixstatic.com/media/244fe3_6b170b628693436c84218f2c4fc1a368~mv2.jpg/v1/fill/w_103,h_103,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/244fe3_6b170b628693436c84218f2c4fc1a368~mv2.jpg"}} style={[styles.logo]}/>
            </View>
        </SafeAreaView>
    )
};

export default HomeScreen;
