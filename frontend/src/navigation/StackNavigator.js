import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddArticlesScreen, ArticlesListScreen, SplashScreen} from '@/screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

const screens = [
    {name: 'Main', component: BottomTabNavigator},
    {name: 'SplashScreen', component: SplashScreen},
    {name: 'ArticlesListScreen', component: ArticlesListScreen},
    {name: 'AddArticlesScreen', component: AddArticlesScreen},
    {name: 'EditArticlesScreen', component: AddArticlesScreen},
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
