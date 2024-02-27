import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>footer</footer>
      <div className={`${styles['bg-bottom-gradient']}`}>
        <div className={styles['blue-element']} />
        <div className={styles['yellow-element']} />
        <div className={styles['red-element']} />
      </div>
    </div>
  );
};

export default Footer;
