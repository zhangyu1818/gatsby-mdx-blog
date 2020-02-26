const LIGHT_THEME = "LIGHT";
const DARK_THEME = "DARK";

const reverseThemeMode = () => {
  if (typeof window === "undefined") return;
  document.body.classList.toggle(LIGHT_THEME.toLowerCase());
  document.body.classList.toggle(DARK_THEME.toLowerCase());
};

const setThemeMode = mode => {
  if (typeof window === "undefined") return;
  document.body.classList.remove(LIGHT_THEME.toLowerCase());
  document.body.classList.remove(DARK_THEME.toLowerCase());
  document.body.classList.add(mode.toLowerCase());
};

const getPrefersThemeMode = () => {
  let pref = window.matchMedia("(prefers-color-scheme: light)");
  if (pref.matches) return LIGHT_THEME;
  pref = window.matchMedia("(prefers-color-scheme: dark)");
  if (pref.matches) return DARK_THEME;
};

const getThemeModeByTime = () => {
  const hour = new Date().getHours();
  if (hour > 18 || hour < 8) return DARK_THEME;
  return LIGHT_THEME;
};

const getThemeModeByStorage = () => sessionStorage.getItem("theme");

const themeModePipe = (...funcs) => {
  if (typeof window === "undefined") return;
  for (const func of funcs) {
    const theme = func();
    if (theme) return theme;
  }
  return LIGHT_THEME;
};

const getThemeMode = () =>
  themeModePipe(getThemeModeByStorage, getPrefersThemeMode, getThemeModeByTime);

export {
  reverseThemeMode,
  getPrefersThemeMode,
  getThemeModeByTime,
  getThemeModeByStorage,
  getThemeMode,
  setThemeMode,
  LIGHT_THEME,
  DARK_THEME,
};
