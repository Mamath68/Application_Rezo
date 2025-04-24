import {Drawer} from "expo-router/drawer";
import {Header} from "../../components";

export default function GuestDrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                header: ({options}) => (
                    <Header title={options?.title || "Default"}/>
                ),
            }}
        >
            <Drawer.Screen name="index" options={{title: "Accueil"}}/>
            <Drawer.Screen name="permanence" options={{title: "Les Permanences"}}/>
            <Drawer.Screen name="login" options={{title: "Se Connecter"}}/>
            <Drawer.Screen name="register" options={{title: "S'inscrire"}}/>
            <Drawer.Screen name="forgot-password" options={{title: "Mot de passe oublié"}}/>
        </Drawer>
    );
}
