import { PropsWithChildren } from 'react';
import ThemeManagerRegistry from './ThemeManager/registry';
import { getThemePersistentStateFromCookies } from './ThemeManager/utils';

const ManagersServerRegistry = (props: PropsWithChildren) => {
  const themePersistentStateFromCookies = getThemePersistentStateFromCookies();

  return (
    <ThemeManagerRegistry
      colorScheme={themePersistentStateFromCookies.colorScheme}
      direction={themePersistentStateFromCookies.direction}
      primaryColor={themePersistentStateFromCookies.primaryColor}
    >
      {props.children}
    </ThemeManagerRegistry>
  );
};

export default ManagersServerRegistry;
