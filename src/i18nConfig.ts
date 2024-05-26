import { Config } from 'next-i18n-router/dist/types';
import ProjectI18nConfig from '@/../i18n.config';

const i18nConfig: Config = {
  locales: ProjectI18nConfig.locales,
  defaultLocale: ProjectI18nConfig.defaultLocale,
  prefixDefault: true,
};

export default i18nConfig;
