import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './ui/globals.scss';
import { inter } from './ui/fonts';
import { Providers } from '@/app/Providers';
import { Header, Footer, BgGradient } from '@/app/ui/layout';

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
          <div className="gradient-wrapper">
            <div className="page-wrapper">
              <BgGradient position="top" />
              <Header />
              <main className="flex-1 basis-full">{children}</main>
              <Footer />
              <BgGradient position="bottom" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
