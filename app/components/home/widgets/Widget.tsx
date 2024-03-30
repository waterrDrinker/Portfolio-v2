import styles from './Widget.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface Widget {
  title: string;
  subtitle: string;
  img: string;
}

const Widget = ({ item }: { item: Widget }) => {
  return (
    <li className={styles.widget}>
      <Link className={styles.content} href="#!">
        <h3 className="mb-[1.6rem] text-center px-8">{item.title}</h3>
        <p className="mb-[0.5rem] px-8 text-center flex-auto">
          {item.subtitle}
        </p>
        <div>
          <Image src={item.img} alt={item.title} width={504} height={365} />
        </div>
      </Link>
    </li>
  );
};

export default Widget;
