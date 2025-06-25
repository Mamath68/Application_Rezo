import { CustomText, CustomView } from "../../components";
import { Theme } from "../../theme";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";

export default function About() {
    return (
        <SafeAreaView style={Theme.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <CustomText level="h2">
                    À Propos du «REZO!»
                </CustomText>

                <CustomText level={"p"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque...
                </CustomText>

                <CustomText level={"p"}>
                    Nullam euismod, nisi vel consectetur cursus, nisl nunc egestas...
                </CustomText>

                {/* Ajoute ici autant de blocs que nécessaire */}
            </ScrollView>
        </SafeAreaView>
    );
}
