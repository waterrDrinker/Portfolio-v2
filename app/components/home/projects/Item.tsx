import styles from './Item.module.scss';
import Image from 'next/image';

interface Work {
  name: string;
  icon: string;
  title: string;
  text: string;
  presentationImg: string;
  btnText: string;
}

const Item = ({ work }: { work: Work }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          className={styles.logo}
          src={work.icon}
          alt="AlgaTop"
          height={69}
          width={279}
        />
        <h3 className={styles.title}>{work.title}</h3>
        <p className={styles.text}>{work.text}</p>
        <a className={styles.link} href="#!">
          {work.btnText}
          <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center">
            <Image
              src="/icons/light/Arrow-Right.svg"
              alt="arrow-right"
              width={18}
              height={12}
              className="icon"
            />
          </div>
        </a>
      </div>
      <div className={styles[`${work.name}-image`]}>
        <Image
          src={work.presentationImg}
          alt="presentationImg"
          width={564}
          height={320}
        />
      </div>
    </div>
  );
};

export default Item;
