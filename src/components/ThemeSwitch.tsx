/*
 *  re-using my custom-made ThemeSwitch component from my food-log project
 *  https://github.com/rashidshamloo/food-log/blob/main/src/components/ThemeSwitch.tsx
 *  and modifying it to work with next-themes
 */

'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { capitalize } from '@/lib/utils';

const modes = {
  light: <Sun size={16} className="flex-shrink-0" />,
  dark: <Moon size={16} className="flex-shrink-0" />,
  system: <Monitor size={16} className="flex-shrink-0" />,
};

const ModesButton = ({
  theme,
  onClick,
}: {
  theme: keyof typeof modes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <Button
    variant="outline"
    className="h-8 w-8"
    onClick={onClick}
    title={capitalize(theme)}
  >
    {modes[theme]}
  </Button>
);

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Popover>
      <h3 className="sr-only">Change Theme</h3>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-8 w-8"
          title={theme ? capitalize(theme) : ''}
        >
          {modes[theme as keyof typeof modes]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-1 p-1">
        {Object.keys(modes).map((mode, i) => {
          return (
            mode !== theme && (
              <ModesButton
                theme={mode as keyof typeof modes}
                key={i}
                onClick={() => setTheme(mode)}
              />
            )
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSwitch;
