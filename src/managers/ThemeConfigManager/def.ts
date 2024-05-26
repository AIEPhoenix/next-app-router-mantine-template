import { PROJECT_STORE_PREFIX } from '@/project-settings/global';
import { DefaultMantineColor, Direction, MantineColorScheme } from '@mantine/core';

export const THEME_COLOR_SCHEMA_STORE_NAME = `${PROJECT_STORE_PREFIX}THEME_COLOR_SCHEMA`;
export const THEME_DIRECTION_STORE_NAME = `${PROJECT_STORE_PREFIX}THEME_DIRECTION`;
export const THEME_PRIMARY_COLOR_STORE_NAME = `${PROJECT_STORE_PREFIX}THEME_PRIMARY_COLOR`;

export type ThemeColorScheme = MantineColorScheme;
export type ThemeActiveColorScheme = ThemeColorScheme;
export type ThemeDirection = Direction;
export type ThemePrimaryColor = DefaultMantineColor;

export interface ThemeConfigContextProps {
  colorScheme: ThemeColorScheme;
  activeColorScheme: Exclude<ThemeColorScheme, 'auto'>;
  direction: ThemeDirection;
  primaryColor: ThemePrimaryColor;

  toggleColorScheme: () => void;
  setColorScheme: (colorScheme: ThemeColorScheme) => void;
  clearColorScheme: () => void;
  toggleDirection: () => void;
  setDirection: (direction: ThemeDirection) => void;
  setPrimaryColor: (primaryColor: string) => void;
}
