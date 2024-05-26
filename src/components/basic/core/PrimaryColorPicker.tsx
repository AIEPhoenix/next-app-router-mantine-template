'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ActionIcon,
  Button,
  ColorPicker,
  ColorSwatch,
  DEFAULT_THEME,
  Flex,
  HoverCard,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useThemeConfig } from '@/managers/ThemeConfigManager/context';
import { MdOutlineColorLens } from 'react-icons/md';

const mantineDefaultColorNames = Object.keys(DEFAULT_THEME.colors);

function PrimaryColorPicker() {
  const { primaryColor, setPrimaryColor, isDark, colorPrimaryShade } = useThemeConfig();
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  const hexColor = useMemo(() => {
    if (primaryColor.startsWith('#')) {
      return primaryColor;
    }
    return theme.colors[primaryColor][colorPrimaryShade];
  }, [primaryColor, theme.colors, colorPrimaryShade]);
  const [tempPrimaryColor, setTempPrimaryColor] = useState(hexColor);

  const mantineDefaultColorMap = useMemo(
    () =>
      mantineDefaultColorNames.reduce(
        (acc, colorName) => {
          let defaultPrimaryColorShade = DEFAULT_THEME.primaryShade as number;
          if (typeof DEFAULT_THEME.primaryShade !== 'number') {
            defaultPrimaryColorShade = isDark ? DEFAULT_THEME.primaryShade.dark : DEFAULT_THEME.primaryShade.light;
          }
          acc[DEFAULT_THEME.colors[colorName][defaultPrimaryColorShade]] = colorName;
          return acc;
        },
        {} as Record<string, string>
      ),
    [isDark]
  );
  const colorPickerSwatches = useMemo(() => Object.keys(mantineDefaultColorMap), [mantineDefaultColorMap]);

  useEffect(() => {
    if (opened) {
      setTempPrimaryColor(hexColor);
    }
  }, [opened]);

  return (
    <HoverCard onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
      <HoverCard.Target>
        <ActionIcon
          variant="default"
          aria-label="PrimaryColorPicker"
          styles={{
            root: {
              border: 'none',
            },
          }}
        >
          <MdOutlineColorLens />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Flex direction="column" align="stretch">
          <ColorPicker
            value={tempPrimaryColor}
            swatchesPerRow={9}
            format="hex"
            onChange={(color) => setTempPrimaryColor(color)}
            swatches={colorPickerSwatches}
          />
          <Flex mt={8} align="center" gap={12}>
            <Text>当前颜色：</Text>
            <Flex align="center" gap={6}>
              <ColorSwatch color={tempPrimaryColor} size={16} />
              <Text>{tempPrimaryColor}</Text>
            </Flex>
          </Flex>
          <Flex mt={12} gap={12} justify="flex-end">
            <Button
              variant="outline"
              size="xs"
              onClick={() => {
                setPrimaryColor('teal');
                setTempPrimaryColor(theme.colors.teal[colorPrimaryShade]);
              }}
            >
              重置
            </Button>
            <Button
              size="xs"
              onClick={() => {
                const presetColorName = mantineDefaultColorMap[tempPrimaryColor];
                setPrimaryColor(presetColorName || tempPrimaryColor);
              }}
            >
              应用
            </Button>
          </Flex>
        </Flex>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default PrimaryColorPicker;
