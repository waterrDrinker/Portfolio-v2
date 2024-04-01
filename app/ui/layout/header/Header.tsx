import styles from './Header.module.scss';
import HeaderDesktop from './HeaderDesktop';
import HeaderSmallDevices from './HeaderSmallDevices';

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <HeaderDesktop />
        <HeaderSmallDevices /> {/*less than medium breakpoint*/}
      </header>
    </div>
  );
};

export default Header;
