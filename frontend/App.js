import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "react-native";

import {ThemeProvider} from "@/context/ThemeProvider";
import StackNavigator from "@/navigation/StackNavigator";

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar hidden={false}/>
            <ThemeProvider>
                <NavigationContainer>
                    <StackNavigator/>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default App;
