import { Inter as FontSans, Red_Hat_Text } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--redhattext',
});
