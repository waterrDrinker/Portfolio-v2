import styles from '@/app/components/home/hero/Hero.module.scss';
import { Button } from '@/app/ui';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className={styles['container']}>
      <div className={styles['photo-wrapper']}>
        <div className={styles['photo']}>
          <Image
            src="/images/home/photo.jpg"
            alt="photo"
            objectFit="cover"
            fill
            quality={100}
          />
        </div>
      </div>
      <div className={styles['content']}>
        <h1 className="title">
          <span>I’m</span> Grigoriy
        </h1>
        <p className={styles.subtitle}>
          A front-end engineer and UI/UX designer helping startups turn their
          visions into a digital reality. I specialize in designing and building
          modern mobile and web-based apps.
        </p>
        <div className={styles.btns}>
          <Button>See my resume</Button>
          <Button variant="secondary">Get in touch</Button>
        </div>
      </div>
      <div className="w-full"></div>
    </section>
  );
};

export default Hero;
