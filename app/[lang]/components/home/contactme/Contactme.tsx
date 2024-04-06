import Link from 'next/link';
import styles from './Contactme.module.scss';
import { type getDictionary } from '@/get-dictionary';

const Contactme = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['contactme']
}) => {
  return (
    <section className={styles.container}>
      <div className="max-w-[49.6rem]">
        <h2 className="mb-[0.8rem]">{dictionary.title}</h2>
        <p className={styles.subtitle}>
        {dictionary.subtitle}
        </p>
      </div>
      <div className={styles.btn}>
        <Link className="primary-btn" href="#!">
          {dictionary.getInTouch}
        </Link>
      </div>
    </section>
  );
};

export default Contactme;
