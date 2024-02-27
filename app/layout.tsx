import type { Metadata } from 'next';
import './ui/globals.scss';
import { inter } from './ui/fonts';
import { Providers } from '@/app/Providers';
import { ReactNode } from 'react';
import Header from '@/app/ui/layout/Header';
import Footer from '@/app/ui/layout/Footer';
export const metadata: Metadata = {
  title: "Grigoriy's portfolio",
  description:
    'Portfolio page which contains information about me and to show skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers></Providers>
      </body>
    </html>
  );
}
