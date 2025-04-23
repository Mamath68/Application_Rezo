import {Drawer} from "expo-router/drawer";
import {Header} from "../../components";
import {logoutUser} from "../../utils";

export default function AuthDrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                header: ({options}) => (
                    <Header title={options?.title || "Default"}/>
                ),
            }}
        >
            <Drawer.Screen name="index" options={{title: "Accueil"}}/>
            <Drawer.Screen name="profile" options={{title: "Profil"}}/>
            <Drawer.Screen name="permanence" options={{title: "Les Permanences"}}/>
        </Drawer>
    );
}
