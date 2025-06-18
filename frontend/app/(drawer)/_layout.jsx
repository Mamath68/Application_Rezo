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
        </Drawer>
    );
}
