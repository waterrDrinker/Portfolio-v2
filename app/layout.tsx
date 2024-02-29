import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './ui/globals.scss';
import { inter } from './ui/fonts';
import { Providers } from '@/app/Providers';
import Header from '@/app/ui/layout/Header';
import Footer from '@/app/ui/layout/Footer';
import BgGradient from '@/app/ui/layout/Bg-gradient';

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
        <Providers>
          <div className="wrapper">
            <BgGradient position="top" />
            <Header />
            <main className="container flex-1 basis-full">{children}</main>
            <Footer />
            <BgGradient position="bottom" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
