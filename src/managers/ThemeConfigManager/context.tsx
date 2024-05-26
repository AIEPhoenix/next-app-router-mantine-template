'use client';

import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { useMantineTheme } from '@mantine/core';
import { ThemeConfigContextValues } from './def';

const ThemeConfigContext = createContext<ThemeConfigContextValues | null>(null);

export function useThemeConfig() {
  const context = useContext(ThemeConfigContext);

  if (!context) {
    throw new Error(
      'useThemeConfig hook was called outside of context, make sure your app is wrapped with ThemeConfigProvider component'
    );
  }

  return context;
}

interface ThemeConfigProviderProps
  extends Omit<ThemeConfigContextValues, 'isDark' | 'colorPrimaryShade'>,
    PropsWithChildren {}

const ThemeConfigProvider = ({
  colorScheme,
  activeColorScheme,
  direction,
  primaryColor,
  toggleColorScheme,
  setColorScheme,
  clearColorScheme,
  toggleDirection,
  setDirection,
  setPrimaryColor,
  children,
}: ThemeConfigProviderProps) => {
  const isDark = activeColorScheme === 'dark';
  const theme = useMantineTheme();
  const colorPrimaryShade = useMemo(() => {
    const { primaryShade } = theme;
    if (typeof primaryShade === 'number') {
      return primaryShade;
    }
    return isDark ? primaryShade.dark : primaryShade.light;
  }, [theme, isDark]);

  return (
    <ThemeConfigContext.Provider
      value={{
        colorScheme,
        activeColorScheme,
        direction,
        primaryColor,
        isDark,
        colorPrimaryShade,
        toggleColorScheme,
        setColorScheme,
        clearColorScheme,
        toggleDirection,
        setDirection,
        setPrimaryColor,
      }}
    >
      {children}
    </ThemeConfigContext.Provider>
  );
};

export default ThemeConfigProvider;
