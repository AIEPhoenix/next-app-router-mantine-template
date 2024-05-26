'use client';

import { Button, Group } from '@mantine/core';
import styled from '@emotion/styled';
import { Icon } from '@iconify-icon/react';
import { useThemeConfig } from '@/managers/ThemeConfigManager/context';

const ButtonsWrapper = styled.div`
  .mantine-Button-root {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    :first-of-type {
      background-color: rebeccapurple;
    }
    :last-of-type {
      background-color: orange;
    }
  }
`;

export function ColorSchemeToggle() {
  const { setColorScheme } = useThemeConfig();

  return (
    <ButtonsWrapper>
      <Group justify="center" mt="xl">
        <Button className="text-[yellow]" onClick={() => setColorScheme('light')}>
          Light
        </Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>
          <Icon icon="material-symbols:night-sight-auto" />
        </Button>
      </Group>
    </ButtonsWrapper>
  );
}
