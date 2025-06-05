import 'react-native-reanimated';
import {Drawer} from "expo-router/drawer";
import {Header} from "../../components";

export default function AuthDrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                header: ({options}) => (
                    <Header title={options?.drawerLabel || "Default"}/>
                ),
            }}
        >
            <Drawer.Screen name="index" options={{drawerLabel: "Accueil"}}/>
            <Drawer.Screen name="profile" options={{drawerLabel: "Profil"}}/>
            <Drawer.Screen name="permanence" options={{drawerLabel: "Les Permanences"}}/>
        </Drawer>
    );
}
