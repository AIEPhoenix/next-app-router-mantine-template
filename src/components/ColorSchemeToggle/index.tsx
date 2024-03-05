'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import styled from '@emotion/styled';

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
  const { setColorScheme } = useMantineColorScheme();

  return (
    <ButtonsWrapper>
      <Group justify="center" mt="xl">
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      </Group>
    </ButtonsWrapper>
  );
}
