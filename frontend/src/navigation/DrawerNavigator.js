import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {ArticlesListScreen, HomeScreen, PoleActivites, PoleCitoyens, PoleJeunes,} from "@/screens";

const Drawer = createDrawerNavigator();

const screens = [
    {name: "Home", component: HomeScreen, options: {title: "Accueil"}},
    {name: "Actualites", component: ArticlesListScreen, options: {title: "Actualités"}},
];

const poles = [
    {name: "PoleCitoyen", options: {title: "Pôle Citoyens"}, component: PoleCitoyens},
    {name: "PoleJeune", options: {title: "Pôle Jeunes"}, component: PoleJeunes},
    {name: "PoleActivite", options: {title: "Pôles Activités"}, component: PoleActivites},
];

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {backgroundColor: "#f5f5f5", width: 240, padding: 15},
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
                        drawerActiveTintColor: "white",
                        drawerActiveBackgroundColor: "#003CB3",
                    }}
                />
            ))}

            {poles.map(({name, component, options}) => (
                <Drawer.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        title: options.title,
                        drawerActiveTintColor: "white",
                        drawerActiveBackgroundColor: "#003CB3",
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
