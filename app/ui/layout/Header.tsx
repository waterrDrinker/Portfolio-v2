import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

import ThemeSwitch from '@/app/ui/ThemeSwitch';
import { HeaderDropdown } from '@/app/ui/layout';

const Header = () => {
  return (
    <div className="w-full max-w-[144rem] mx-auto mb-[12.1rem]">
      <header className={styles.header}>
        <div id="left-side" className="flex items-center">
          <Link href="#!" className="mr-[4rem]">
            <Image
              className="icon"
              src="/icons/light/Logo.svg"
              alt="logo"
              width={40}
              height={26}
            />
          </Link>
          <nav>
            <ul className={styles['nav-links']}>
              <li>
                <Link href="#!">About</Link>
              </li>
              <li>
                <Link href="#!">Work</Link>
              </li>
              <li>
                <Link href="#!">Notebook</Link>
              </li>
              <li>
                <Link href="#!">Contact</Link>
              </li>
              <li>
                <HeaderDropdown />
              </li>
            </ul>
          </nav>
        </div>

        <div id="right-side" className="flex items-center">
          <nav>
            <ul className={styles['social-links']}>
              <li>
                <a href="https://t.me/hzrglpoqasd" target="_blank">
                  <Image
                    style={{ filter: 'none' }}
                    className="icon telegram-icon"
                    src="/icons/Telegram.svg"
                    alt="telegram"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/waterrDrinker" target="_blank">
                  <Image
                    className="icon"
                    src="/icons/light/Github.svg"
                    alt="github"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div className="w-[0.1rem] h-[2.4rem] bg-black/25 mr-[2.4rem]" />
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
