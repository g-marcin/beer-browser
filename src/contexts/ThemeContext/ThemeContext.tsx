import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  setIsDark: (isDark: boolean) => {
    return isDark;
  },
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      setIsDark(!(theme === 'light'));
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', `${isDark ? 'dark' : 'light'}`);
  }, [isDark]);

  const isDarkHandler = (isDark: boolean) => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        setIsDark: isDarkHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
