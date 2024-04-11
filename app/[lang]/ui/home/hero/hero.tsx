import styles from './hero.module.scss';
import { Button } from '@/app/[lang]/ui';
import { type getDictionary } from '@/get-dictionary';
import Image from 'next/image';

const Hero = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['hero']
}) => {
  
  return (
    <section id="hero" className={styles['page-container']}>
      <div className={styles['content-container']}>
        <div className={styles['photo-block']}>
          <div className={styles['photo-wrapper']}>
            <Image
              src="/images/home/photo-min.jpg"
              alt="photo"
              width={450}
              height={450}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className={styles['content']}>
          <h1 className="title">
            <span>{dictionary.pronoun}</span> {dictionary.name}
          </h1>
          <p className={styles.subtitle}>
            {dictionary.intro}
          </p>
          <div className={styles.btns}>
            <Button>{dictionary['resume-btn']}</Button>
            <Button variant="secondary">{dictionary.getInTouch}</Button>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
