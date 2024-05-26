import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';
import { MantineColorScheme } from '@mantine/core';
import {
  THEME_COLOR_SCHEMA_STORE_NAME,
  THEME_LTR_STORE_NAME,
  THEME_PRIMARY_COLOR_STORE_NAME,
} from './def';

export function getThemeConfigPersistentStateFromCookies() {
  const colorSchema = (getCookie(THEME_COLOR_SCHEMA_STORE_NAME, { cookies }) ||
    'light') as MantineColorScheme;
  const ltrDirection = getCookie(THEME_LTR_STORE_NAME, { cookies }) === 'true';
  const primaryColor = getCookie(THEME_PRIMARY_COLOR_STORE_NAME, { cookies });
  return {
    colorSchema,
    ltrDirection,
    primaryColor,
  };
}
