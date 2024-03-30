import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div id="left-side" className="text-[1.4rem]">
          <Image
            src="/icons/light/Logo.svg"
            alt="Logo"
            height={60}
            width={92.32}
            className="icon mb-[1.6rem]"
          />
          <p className="mb-[9.3rem] ">
            Thanks for stopping by <span className="text-[2rem]">&#12483;</span>
          </p>
          <p>
            <span>&copy; </span>
            <time dateTime="2024">2024</time>
            <span> Grigoriy N. All Rights Reserved.</span>
          </p>
        </div>

        <div id="right-side" className={styles['right-side']}>
          <div>
            <h4>Links</h4>
            <ul className={styles.links}>
              <li>About</li>
              <li>Work</li>
              <li>Tech Stack</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul className={styles.socials}>
              <li>
                <a
                  href="mailto:grigoriynbr@gmail.com?subject=Hello&body=Hi there!"
                  target="_blank"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/waterrDrinker" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://t.me/hzrglpoqasd" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/651174298844921919"
                  target="_blank"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
