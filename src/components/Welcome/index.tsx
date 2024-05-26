'use client';

import Image from 'next/image';
import { Anchor, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import testImage from '@/assets/test/coffee-8342636.jpg';
import I18nNamespace from '@/generated/i18n-namespace';
import classes from './index.module.css';

export function Welcome() {
  const { t } = useTranslation(I18nNamespace.common);

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      {t('Hello World!')}
      <Text
        className="text-[rgba(0,0,0,0.7)] dark:text-white"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
        c="primary.5"
      >
        This starter Next.js project includes a minimal setup for server side rendering, if you want to learn more on
        Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
      <Image src={testImage} alt="test image" width={400} />
    </>
  );
}
