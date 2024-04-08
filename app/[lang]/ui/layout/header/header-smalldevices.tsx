import Image from 'next/image';
import Link from 'next/link';
import styles from './header-smalldevices.module.scss';

const HeaderSmallDevices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          <Image
            src="/icons/light/Logo.svg"
            alt="logo"
            width={46}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderSmallDevices;
