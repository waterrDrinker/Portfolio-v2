import { type getDictionary } from '@/get-dictionary';
import Widget from './Widget';
import styles from './Widgets.module.scss';
import { GET_TO_KNOW_ME } from '@/app/[lang]/constants/content/home';

const Widgets = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['widgets']
}) => {
  const content = dictionary.items.map((item) => <Widget key={item.id} item={item} />);

  return (
    <section className={styles.container}>
      <h2 className="mb-[3.2rem]">{dictionary.title}</h2>
      <ul className={styles.wrapper}>{content}</ul>
    </section>
  );
};

export default Widgets;
