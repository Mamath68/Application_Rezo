import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ArticlesListScreen, HomeScreen} from '@/screens';

const Tab = createBottomTabNavigator();

const screens = [
    {name: 'Home', component: HomeScreen},
    {name: "Articles", component: ArticlesListScreen},
];

const getTabBarIcon = (route, focused, color, size) => {
    const icons = {
        Home: focused ? "home" : "home-outline",
        Articles: focused ? "book-open-page-variant" : "book-open-page-variant-outline",
    };

    return <Icon name={icons[route.name]} size={size} color={color}/>;
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>
                    getTabBarIcon(route, focused, color, size),
                tabBarActiveTintColor: "#3498db",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
            id="main">
            {screens.map(({name, component}) => (
                <Tab.Screen key={name} name={name} component={component}/>
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
