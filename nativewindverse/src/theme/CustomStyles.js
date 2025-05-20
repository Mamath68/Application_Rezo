import {StyleSheet} from "react-native";

const CustomStyles = StyleSheet.create({
    container: "flex flex-1",
    paddingContainer: "py-12 md:py-24 lg:py-32 xl:py-48",
    contentContainer: "px-4 md:px-6",
    textCenter: "flex flex-col items-center gap-4 text-center",
    heading: "text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl",
    description: "mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400",
    linkContainer: "gap-4",
    link: "flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
});

export default CustomStyles;
