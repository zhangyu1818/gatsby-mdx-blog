const getThemeByOS = () => {
    let pref = window.matchMedia("(prefers-color-scheme: dark)");
    if (pref.matches) return "dark";
    pref = window.matchMedia("(prefers-color-scheme: light)");
    if (pref.matches) return "light";
};

const getThemeByTime = () => {
    const hour = new Date().getHours();
    if (hour > 17 || hour < 6) return "dark";
    return "light";
};

const getTheme = () => {
    let theme = getThemeByOS();
    if (!theme) theme = getThemeByTime();
    return theme;
};

const setTheme = () => {
    const themeClassName = getTheme();
    document.body.className = themeClassName;
    window.localStorage.setItem("blogTheme", themeClassName);
};

export default setTheme;
export { getTheme };
