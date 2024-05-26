const ProjectI18nConfig = require('./i18n.config');

const defaultNs = 'common';
const defaultValue = '__STRING_NOT_TRANSLATED__';

module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    // Use ! to filter out files or directories
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: false,
    lngs: ProjectI18nConfig.locales,
    ns: [defaultNs],
    defaultLng: ProjectI18nConfig.defaultLocale,
    defaultNs,
    defaultValue,
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
      autoBackup: true,
      backupSourcePath: 'src/locales',
      backupPath: 'locales-bk',
      generateNamespaceMap: true,
      namespaceMapPath: 'src/generated/i18n-namespace.ts',
    },
    nsSeparator: false, // namespace separator
    keySeparator: '.', // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    metadata: {},
    allowDynamicKeys: false,
  },
};
