'use client';

import { PropsWithChildren, useMemo, useState } from 'react';
import { DEFAULT_NOTIFICATIONS_AUTO_CLOSE } from '@/project-settings/global';
import { generateColorsMap } from '@mantine/colors-generator';
import {
  DEFAULT_THEME,
  DirectionProvider,
  MantineColorShade,
  MantineColorsTuple,
  MantinePrimaryShade,
  MantineProvider,
  localStorageColorSchemeManager,
  useComputedColorScheme,
  useDirection,
  useMantineColorScheme,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { deleteCookie, setCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';
import dayjs from 'dayjs';
import ThemeProvider from './context';
import {
  THEME_COLOR_SCHEMA_STORE_NAME,
  THEME_DIRECTION_STORE_NAME,
  THEME_PRIMARY_COLOR_STORE_NAME,
  ThemeContextValues,
} from './def';

const cookieOptions: OptionsType = {
  expires: dayjs().add(3, 'year').toDate(),
};

const colorSchemeManager = localStorageColorSchemeManager({
  key: THEME_COLOR_SCHEMA_STORE_NAME,
});

interface ThemeManagerStateProviderProps
  extends PropsWithChildren,
    Pick<ThemeContextValues, 'colorScheme' | 'direction' | 'primaryColor'> {
  onPrimaryColorChange: (newPrimaryColor: string) => void;
}

function ThemeManagerStateProvider({ children, ...props }: ThemeManagerStateProviderProps) {
  const { setColorScheme: mantineSetColorScheme, clearColorScheme: mantineClearColorScheme } = useMantineColorScheme();
  const activeColorScheme = useComputedColorScheme();
  const { dir, setDirection: mantineSetDirection } = useDirection();

  const [colorScheme, setColorScheme] = useState(props.colorScheme);
  const [direction, setDirection] = useState(props.direction);

  return (
    <ThemeProvider
      colorScheme={colorScheme}
      activeColorScheme={activeColorScheme}
      direction={direction}
      primaryColor={props.primaryColor}
      toggleColorScheme={() => {
        const targetCS = activeColorScheme === 'light' ? 'dark' : 'light';
        setColorScheme(targetCS);
        setCookie(THEME_COLOR_SCHEMA_STORE_NAME, targetCS, cookieOptions);
        mantineSetColorScheme(targetCS);
      }}
      setColorScheme={(newColorScheme) => {
        setColorScheme(newColorScheme);
        setCookie(THEME_COLOR_SCHEMA_STORE_NAME, newColorScheme, cookieOptions);
        mantineSetColorScheme(newColorScheme);
      }}
      clearColorScheme={() => {
        setColorScheme('light');
        deleteCookie(THEME_COLOR_SCHEMA_STORE_NAME);
        mantineClearColorScheme();
      }}
      toggleDirection={() => {
        const targetDir = dir === 'ltr' ? 'rtl' : 'ltr';
        setDirection(targetDir);
        setCookie(THEME_DIRECTION_STORE_NAME, targetDir, cookieOptions);
        mantineSetDirection(targetDir);
      }}
      setDirection={(newDirection) => {
        setDirection(newDirection);
        setCookie(THEME_DIRECTION_STORE_NAME, newDirection, cookieOptions);
        mantineSetDirection(newDirection);
      }}
      setPrimaryColor={(newPrimaryColor) => {
        setCookie(THEME_PRIMARY_COLOR_STORE_NAME, newPrimaryColor, cookieOptions);
        props.onPrimaryColorChange(newPrimaryColor);
      }}
    >
      {children}
    </ThemeProvider>
  );
}

interface ThemeManagerRegistryProps
  extends PropsWithChildren,
    Pick<ThemeContextValues, 'colorScheme' | 'direction' | 'primaryColor'> {}

const ThemeManagerRegistry = ({ children, ...props }: ThemeManagerRegistryProps) => {
  const [primaryColor, setPrimaryColor] = useState(props.primaryColor || 'teal');

  const {
    colors,
    baseColorIndex,
  }: {
    colors: MantineColorsTuple | undefined;
    baseColorIndex: MantineColorShade | MantinePrimaryShade | undefined;
  } = useMemo(() => {
    if (primaryColor.startsWith('#')) {
      const result = generateColorsMap(primaryColor);
      return {
        colors: result.colors.map((color) => color.hex()) as any as MantineColorsTuple,
        baseColorIndex: result.baseColorIndex as MantineColorShade,
      };
    }
    return {
      colors: DEFAULT_THEME.colors[primaryColor],
      baseColorIndex: DEFAULT_THEME.primaryShade,
    };
  }, [primaryColor]);

  return (
    <DirectionProvider initialDirection={props.direction}>
      <MantineProvider
        defaultColorScheme={props.colorScheme}
        colorSchemeManager={colorSchemeManager}
        theme={{
          ...(colors
            ? {
                colors: { primary: colors },
                primaryColor: 'primary',
                primaryShade: baseColorIndex,
              }
            : {}),
        }}
      >
        <ThemeManagerStateProvider
          colorScheme={props.colorScheme}
          direction={props.direction}
          primaryColor={primaryColor}
          onPrimaryColorChange={(newPrimaryColor) => {
            setPrimaryColor(newPrimaryColor);
          }}
        >
          <Notifications autoClose={DEFAULT_NOTIFICATIONS_AUTO_CLOSE} position="top-right" />
          {children}
        </ThemeManagerStateProvider>
      </MantineProvider>
    </DirectionProvider>
  );
};
export default ThemeManagerRegistry;
