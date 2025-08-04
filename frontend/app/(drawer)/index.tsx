import {CustomText, CustomView} from "@components/index";
import {Theme} from "@theme/index";
import React from "react";

export default function Home() {
    return (
        <CustomView style={Theme.container}>
            <CustomText center level="h2">Accueil Typescript</CustomText>
        </CustomView>
    );
}
