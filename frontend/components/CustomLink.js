import {useTheme} from "../context/ThemeProvider";
import {Link} from "expo-router";

const CustomLink = ({
                        link,
                        children,
                        style = {},
                    }) => {
    const {theme} = useTheme();


    return (
        <Link
            href={link} style={[{color: theme === 'dark' ? '#fff' : '#000'}, style]}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
