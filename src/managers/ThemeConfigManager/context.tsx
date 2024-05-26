'use client';

import { PropsWithChildren, createContext, useContext } from 'react';
import { ThemeConfigContextProps } from './def';

const ThemeConfigContext = createContext<ThemeConfigContextProps | null>(null);

export function useThemeConfig() {
  const context = useContext(ThemeConfigContext);

  if (!context) {
    throw new Error(
      'useThemeConfig hook was called outside of context, make sure your app is wrapped with ThemeConfigProvider component'
    );
  }

  return context;
}

interface ThemeConfigProviderProps extends ThemeConfigContextProps, PropsWithChildren {}

export function ThemeConfigProvider({
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
}: ThemeConfigProviderProps) {
  return (
    <ThemeConfigContext.Provider
      value={{
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
      }}
    >
      {children}
    </ThemeConfigContext.Provider>
  );
}
