'use client';

import { i18n, Locale } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './locale-switcher.module.scss';

const LocaleSwitcher = ({ currentLang }: { currentLang: Locale }) => {
  const pathname = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className={styles.container}>
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={
                currentLang === locale
                  ? styles['language--active']
                  : styles.language
              }
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
