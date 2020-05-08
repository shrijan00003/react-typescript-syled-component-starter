import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import styled from "styled-components";
import { Theme } from "./enum/theme";
import { useDarkTheme } from "./hooks/useDarkTheme";
import Toggle from "./screens/Toggle";

function App() {
  const [theme, toggleTheme] = useDarkTheme();
  const themeMode = theme === Theme.LIGHT ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Space />
        <Primary>I am primary color</Primary>
        <Space />
        <Secondary>I am Secondary color</Secondary>
        <Space />
        <Terniary>I am Terniary color</Terniary>
        <Space />
        <Info>I am Info color</Info>
        <Space />
        <Success>I am Success color</Success>
        <Space />
        <Error>I am Error color</Error>
        <Space />
        <Warning>I am WARNING color</Warning>
      </>
    </ThemeProvider>
  );
}

export default App;

const Space = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
`;

const Primary = styled.p`
  color: ${({ theme }) => theme.PRIMARY};
`;
const Secondary = styled.p`
  color: ${({ theme }) => theme.SECONDARY};
`;
const Terniary = styled.p`
  color: ${({ theme }) => theme.TERTIARY};
`;
const Error = styled.p`
  color: ${({ theme }) => theme.ERROR};
`;
const Info = styled.p`
  color: ${({ theme }) => theme.INFO};
`;

const Success = styled.p`
  color: ${({ theme }) => theme.SUCCESS};
`;

const Warning = styled.p`
  color: ${({ theme }) => theme.WARNING};
`;
