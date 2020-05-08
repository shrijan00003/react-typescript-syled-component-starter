// useDarkMode.js
import { useEffect, useState } from "react";
import { Theme } from "../enum/theme";

export const useDarkTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const toggleTheme = (): void => {
    if (theme === Theme.LIGHT) {
      window.localStorage.setItem("theme", Theme.DARK);
      setTheme(Theme.DARK);
    } else {
      window.localStorage.setItem("theme", Theme.LIGHT);
      setTheme(Theme.LIGHT);
    }
  };

  useEffect(() => {
    const localTheme: Theme = (window.localStorage.getItem("theme") ||
      Theme.DARK) as Theme;
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
