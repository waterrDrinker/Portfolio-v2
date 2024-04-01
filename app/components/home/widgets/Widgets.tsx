import Widget from './Widget';
import styles from './Widgets.module.scss';
import { GET_TO_KNOW_ME } from '@/app/constants/content/home';

const Widgets = () => {
  const content = GET_TO_KNOW_ME.map((item) => <Widget item={item} />);

  return (
    <section className={styles.container}>
      <h2 className="mb-[3.2rem]">Get to know me</h2>
      <ul className={styles.wrapper}>{content}</ul>
    </section>
  );
};

export default Widgets;
