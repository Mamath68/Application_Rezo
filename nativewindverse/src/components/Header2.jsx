import {View} from "react-native";
import {Link} from "expo-router";

export default function Header2() {
    return (
        <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between bg-black dark:bg-gray-900">
            <Link className="text-amber-400 dark:text-white font-bold flex-1 items-center justify-center" href="/">
                ACME
            </Link>
            <View className="flex flex-row gap-4 sm:gap-6">
                <Link
                    className="text-amber-400 dark:text-white text-md font-medium hover:underline"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className="text-amber-400 dark:text-white text-md font-medium hover:underline"
                    href="/About"
                >
                    About
                </Link>
            </View>
        </View>
    );
}
