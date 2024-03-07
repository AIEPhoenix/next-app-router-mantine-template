'use client';

import { ActionIcon, useDirection } from '@mantine/core';
import { TbTextDirectionLtr, TbTextDirectionRtl } from 'react-icons/tb';

export default function DirectionToggle() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <TbTextDirectionLtr
          style={{
            stroke: '1.5px',
          }}
        />
      ) : (
        <TbTextDirectionRtl
          style={{
            strokeWidth: '1.5px',
          }}
        />
      )}
    </ActionIcon>
  );
}
