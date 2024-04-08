import Link from 'next/link';
import styles from './contactme.module.scss';
import { type getDictionary } from '@/get-dictionary';
import { ButtonLink } from '../../button';
import Image from 'next/image';
import { Locale } from '@/i18n-config';

const Contactme = ({
  dictionary,
  currentLang
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['contactme'],
  currentLang: Locale
}) => {
  return (
    <section className={styles['page-container']}>
      <div className={styles['content-container']}>
        <div className="max-w-[49.6rem]">
          <h2 className="mb-[0.8rem]">{dictionary.title}</h2>
          <p className={styles.subtitle}>{dictionary.subtitle}</p>
        </div>
        <div className={styles.btn}>
          <ButtonLink className="primary-btn" href={`/${currentLang}/contact`}>
              <Image
                src="/icons/light/send.svg"
                alt="send-icon"
                className="icon"
                width={24}
                height={24}
              />
            {dictionary.getInTouch}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
