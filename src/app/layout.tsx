import '@/styles/globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import { fontSans } from '@/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'New Next.js Project',
  description: 'Created by Rashid Shamloo',
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
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
