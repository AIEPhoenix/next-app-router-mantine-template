import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import DirectionToggle from '@/components/DirectionToggle';
import { Welcome } from '@/components/Welcome';
import PrimaryColorPicker from '@/components/basic/core/PrimaryColorPicker';
import TranslationsProvider from '@/components/basic/core/TranslationsProvider';
import initTranslations from '@/app/i18n';
import I18nNamespace from '@/generated/i18n-namespace';

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = [I18nNamespace.common];
export default async function Home({ params: { locale } }: HomeProps) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Welcome />
      <PrimaryColorPicker />
      <ColorSchemeToggle />
      <DirectionToggle />
    </TranslationsProvider>
  );
}
