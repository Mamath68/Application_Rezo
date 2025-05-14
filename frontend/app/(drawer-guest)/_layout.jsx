import 'react-native-reanimated';
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
            <Drawer.Screen name="login/index" options={{title: "Se Connecter"}}/>
            <Drawer.Screen name="register/index" options={{title: "S'inscrire"}}/>
            <Drawer.Screen name="forgot-password/index" options={{
                drawerItemStyle: {display: 'none'}
                , title: "Mot de passe oublié"
            }}/>
        </Drawer>
    );
}
