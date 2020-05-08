import React from "react";
import { Theme } from "../enum/theme";
import { ToggleContainer } from "./toggle.styled";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}
const Toggle: React.FC<Props> = ({ theme, toggleTheme }) => {
  const isLight = theme === Theme.LIGHT;
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
