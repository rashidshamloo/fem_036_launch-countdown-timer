import '@/styles/globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import { fontSans, redHatText } from '@/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Launch countdown timer by Rashid Shamloo',
  description: 'Challenge by Frontend Mentor. Coded by Rashid Shamloo.',
  icons: {
    icon: [
      { rel: 'icon', url: '/images/favicon-32x32.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background dark min-h-screen bg-[url(/images/pattern-hills.svg),url(/images/bg-stars.svg)] bg-contain bg-[position:bottom,top] bg-no-repeat font-sans antialiased',
          fontSans.variable,
          redHatText.variable,
        )}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
