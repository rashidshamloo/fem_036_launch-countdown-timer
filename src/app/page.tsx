import ThemeSwitch from '@/components/ThemeSwitch';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-stretch justify-start xl:container">
      <header className="flex items-center justify-end p-4">
        <ThemeSwitch />
      </header>
      <main className="flex flex-col items-center justify-start">
        <Button>Click Me</Button>
      </main>
    </div>
  );
}
