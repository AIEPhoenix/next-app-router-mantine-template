import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';
import {
  THEME_COLOR_SCHEMA_STORE_NAME,
  THEME_DIRECTION_STORE_NAME,
  THEME_PRIMARY_COLOR_STORE_NAME,
  ThemeColorScheme,
  ThemeDirection,
} from './def';

export function getThemeConfigPersistentStateFromCookies() {
  const colorScheme = (getCookie(THEME_COLOR_SCHEMA_STORE_NAME, { cookies }) ||
    'light') as ThemeColorScheme;
  const direction = getCookie(THEME_DIRECTION_STORE_NAME, { cookies }) as ThemeDirection;
  const primaryColor = getCookie(THEME_PRIMARY_COLOR_STORE_NAME, { cookies }) as string;
  return {
    colorScheme,
    direction,
    primaryColor,
  };
}
