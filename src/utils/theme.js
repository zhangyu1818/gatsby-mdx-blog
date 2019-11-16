// 获取系统主题
const getThemeByOS = () => {
    let pref = window.matchMedia("(prefers-color-scheme: dark)");
    if (pref.matches) return "dark";
    pref = window.matchMedia("(prefers-color-scheme: light)");
    if (pref.matches) return "light";
};

// 根据时间判断主题
const getThemeByTime = () => {
    const hour = new Date().getHours();
    if (hour > 17 || hour < 6) return "dark";
    return "light";
};

// 获取主题
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
