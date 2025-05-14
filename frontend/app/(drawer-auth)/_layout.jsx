import {Drawer} from "expo-router/drawer";
import {Header} from "../../components";
import 'react-native-reanimated'; // doit être en tout premier

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
