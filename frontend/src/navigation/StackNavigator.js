import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddArticlesScreen, ArticlesListScreen, PoleCitoyens, PoleJeunes, SplashScreen} from '@/screens';
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

const screens = [
    {name: 'Main', component: DrawerNavigator},
    {name: 'SplashScreen', component: SplashScreen},
    {name: 'ArticlesListScreen', component: ArticlesListScreen},
    {name: 'AddArticlesScreen', component: AddArticlesScreen},
    {name: 'EditArticlesScreen', component: AddArticlesScreen},
    {name: "PoleCitoyen", component: PoleCitoyens},
    {name: "PoleJeune", component: PoleJeunes},
];


const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            id='main'
            screenOptions={screenOptions}
        >
            {screens.map(({name, component}) => (
                <Stack.Screen key={name} name={name} component={component}/>
            ))}
        </Stack.Navigator>
    );
};

export default StackNavigator;
