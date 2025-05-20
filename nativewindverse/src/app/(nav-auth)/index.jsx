import {Link} from "expo-router";
import {Text, View} from "react-native";
import {CustomStyles as styles} from "@/theme";

export default function Home() {
    return (
        <View className={styles.container}>
            <View className={styles.paddingContainer}>
                <View className={styles.contentContainer}>
                    <View className={styles.textCenter}>
                        <Text
                            role="heading"
                            className={styles.heading}
                        >
                            Welcome to Project ACME
                        </Text>
                        <Text className={styles.description}>
                            Discover and collaborate on acme. Explore our services now.
                        </Text>

                        <View className={styles.linkContainer}>
                            <Link
                                suppressHighlighting
                                className={styles.link}
                                href="/"
                            >
                                Explore
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
