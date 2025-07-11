import React from "react";
import { CustomText, CustomView } from "../../components";
import { Theme } from "../../theme";

const Home: React.FC = () => {
    return (
        <CustomView style={Theme.container}>
            <CustomText level="h2" style={{ textAlign: "center" }}>
                Accueil
            </CustomText>
        </CustomView>
    );
};

export default Home;
