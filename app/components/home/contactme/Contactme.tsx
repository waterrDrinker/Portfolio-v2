import Link from 'next/link';
import styles from './Contactme.module.scss';

const Contactme = () => {
  return (
    <section className={styles.container}>
      <div className="max-w-[49.6rem]">
        <h2 className="mb-[0.8rem]">Let's work together</h2>
        <p className="text-[2rem]">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
      </div>
      <div>
        <Link className="primary-btn" href="#!">
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default Contactme;
