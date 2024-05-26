import { Welcome } from '@/components/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import DirectionToggle from '@/components/DirectionToggle';

export default function Home() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DirectionToggle />
    </>
  );
}
