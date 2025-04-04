import {createDrawerNavigator} from "@react-navigation/drawer";
import {ArticlesListScreen, HomeScreen, PoleActivites, PoleCitoyens, PoleJeunes} from "@/screens";
import {useTheme} from '@/context/ThemeProvider';
import {StyleSheet} from "react-native";

const Drawer = createDrawerNavigator();


const screens = [
    {name: "Home", component: HomeScreen, options: {title: "Accueil"}},
    {name: "Actualites", component: ArticlesListScreen, options: {title: "Actualités"}},
    {name: "PoleActivite", options: {title: "Pôles Activités"}, component: PoleActivites},
    {name: "PoleCitoyen", options: {title: "Pôles Citoyen"}, component: PoleCitoyens},
    {name: "PoleJeune", options: {title: "Pôles Jeunes"}, component: PoleJeunes},
];

const DrawerNavigator = () => {
    const {theme} = useTheme();
    const getViewBackgroundColorStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
    const getViewActiveColorStyle = theme === 'dark' ? "#2D46AF" : "#ECF0F1";
    const getViewActiveBackgroundColorStyle = theme === 'dark' ? "#ECF0F1" : "#2D46AF";
    const getViewInActiveColorStyle = theme === 'dark' ? "#ECF0F1" : "#2D46AF";

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {...getViewBackgroundColorStyle, width: 240, padding: 15},
                headerShown: false,
            }}
            id="main">
            {screens.map(({name, component, options}) => (
                <Drawer.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        title: options.title,
                        drawerActiveTintColor: getViewActiveColorStyle,
                        drawerActiveBackgroundColor: getViewActiveBackgroundColorStyle,
                        drawerInactiveTintColor: getViewInActiveColorStyle,
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
    containerLight: {
        backgroundColor: "#ECF0F1",
    },
    containerDark: {
        backgroundColor: "#2D46AF",
    },
    activeLight: {
        color: "#ECF0F1",
    },
    activeDark: {
        color: "#2D46AF",
    },
})
