import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => {
    return {
        a: {
            color: "var(--textLink)",
        },
        hr: {
            background: "var(--hr)",
        },
        "a.gatsby-resp-image-link": {
            boxShadow: "none",
        },
        "a.anchor": {
            boxShadow: "none",
        },
        'a.anchor svg[aria-hidden="true"]': {
            stroke: "var(--textLink)",
        },
        "p code": {
            fontSize: "1rem",
        },
        "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
            fontSize: "inherit",
        },
        "li code": {
            fontSize: "1rem",
        },
        blockquote: {
            color: "inherit",
            borderLeftColor: "inherit",
            opacity: "0.8",
        },
        "blockquote.translation": {
            fontSize: "1em",
        },
        h1: {
            lineHeight: 1.5,
        },
        "h1,h2,h3,h4,h5,h6": {
            color: "var(--textLink)",
        },
    };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;