import {SafeAreaView} from "react-native-safe-area-context";
import {Image, View} from 'react-native';
import {HomeScreenStyles as styles} from "@/theme"
import {useTheme} from '@/context/ThemeProvider';
import {CustomText, Header} from "@/components";

const PoleJeunes = ({navigation}) => {
    const {theme} = useTheme();

    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={[styles.container, getViewBackgroundColorStyle]}>
                <Header title="Pôle Jeune"/>
                <CustomText level="h2">Bienvenue au Pôle Jeune</CustomText>
                <Image source={require('@assets/rezo-logo.png')} style={[styles.logo]}/>
            </View>
        </SafeAreaView>
    )
};

export default PoleJeunes;
