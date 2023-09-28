import { createContext, useContext, useState } from 'react';
import { ThemeProvider as ProjectThemeProvider } from 'styled-components';
import { DARK, LIGHT } from '../components/constans/thems';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT);

  const onChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
      }}
    >
      <ProjectThemeProvider theme={theme}>{children}</ProjectThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
