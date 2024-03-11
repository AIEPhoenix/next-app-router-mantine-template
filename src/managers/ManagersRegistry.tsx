import { PropsWithChildren } from 'react';
import ThemeConfigManagerRegistry from './ThemeConfigManager/registry';
import { getThemeConfigPersistentStateFromCookies } from './ThemeConfigManager/utils';

const ManagersServerRegistry = (props: PropsWithChildren) => {
  const themeConfigFromCookies = getThemeConfigPersistentStateFromCookies();

  return (
    <ThemeConfigManagerRegistry
      colorScheme={themeConfigFromCookies.colorScheme}
      direction={themeConfigFromCookies.direction}
      primaryColor={themeConfigFromCookies.primaryColor}
    >
      {props.children}
    </ThemeConfigManagerRegistry>
  );
};

export default ManagersServerRegistry;
