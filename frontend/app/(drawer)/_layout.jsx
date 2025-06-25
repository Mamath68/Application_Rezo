import 'react-native-reanimated';
import {Drawer} from "expo-router/drawer";
import {Header} from "../../components";
import {Theme} from "../../theme";
import {useTheme} from "../../context/ThemeProvider";

export default function GuestDrawerLayout() {
    const {theme} = useTheme();
    const isDark = theme === 'dark';

    return (
        <Drawer
            screenOptions={{
                header: ({options}) => (
                    <Header title={options?.title || "Le REZO!"}/>
                ),
                drawerStyle: {
                    backgroundColor: isDark ?
                        Theme.backgroundColorDark.backgroundColor :
                        Theme.backgroundColorLight.backgroundColor,
                },
                drawerActiveTintColor: isDark ? "#2D46AF" : "#ECF0F1",
                drawerInactiveTintColor: isDark ? "#ECF0F1" : "#2D46AF",
                drawerActiveBackgroundColor: isDark ? "#ECF0F1" : "#2D46AF",
            }}
        >
            <Drawer.Screen name="index" options={{title: "Accueil"}}/>
            <Drawer.Screen name="about" options={{title: "À Propos"}}/>
            <Drawer.Screen name="permanence" options={{title: "Les Permanences"}}/>
        </Drawer>
    );
}
