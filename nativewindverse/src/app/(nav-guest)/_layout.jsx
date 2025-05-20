import "../global.css";
import {Slot} from "expo-router";
import Header from "@/app/Header";
import {StatusBar} from "react-native";

export default function Layout() {
    return (
        <>
            <StatusBar hidden={false}/>
            <Header/>
            <Slot screenOptions={{headerShown: false}}/>
        </>
    );
}
