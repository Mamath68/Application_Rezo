import {CustomText, CustomView} from "../../components";
import {HomeScreenStyles as styles, Theme} from "../../theme";
import {Calendar} from "react-native-big-calendar";
import {useState, useEffect} from "react";
import {getAllPermanences} from "../../utils";
import {useTheme} from "../../context/ThemeProvider";


export default function Home() {

    return (
        <CustomView style={Theme.container}>
            <CustomText level="h2" style={{textAlign: "center"}}>Accueil</CustomText>
        </CustomView>
    );
}
