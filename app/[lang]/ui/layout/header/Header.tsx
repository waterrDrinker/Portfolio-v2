import { type getDictionary } from '@/get-dictionary';
import styles from './Header.module.scss';
import HeaderDesktop from './HeaderDesktop';
import HeaderSmallDevices from './HeaderSmallDevices';
import { Locale } from '@/i18n-config';

const Header = ({
  dictionary,
  currentLang
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'],
  currentLang: Locale
}) => {
  return (
    <div className={styles.container}>
      <header>
        <HeaderDesktop dictionary={dictionary} currentLang={currentLang} />
        <HeaderSmallDevices /> {/*less than medium breakpoint*/}
      </header>
    </div>
  );
};

export default Header;
