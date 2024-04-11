import { type getDictionary } from '@/get-dictionary';
import styles from './content.module.scss';
import Paragraph from './paragraph';
import Image from 'next/image';
import { ButtonLink } from '@/app/[lang]/ui';
import { Locale } from '@/i18n-config';

const Content = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['about'];
  currentLang: Locale;
}) => {
  const wordsArray = dictionary['closing-text'].split(' ')
  const closingText = wordsArray.map((word, i) => {
    switch(word) {
      case 'e-mail':
        wordsArray[i + 1] = " " + wordsArray[i + 1];
        return (<a className={styles.link} href='mailto:grigoriynbr@gmail.com'>e-mail</a>)

      case 'Telegram.':
        return (<a className={styles.link} href='https://t.me/hzrglpoqasd'>Telegram.</a>)

      default:
        return word + " ";
    }
  })  
  
  return (
    <div className={styles['page-container']}>
      <div className={styles['content-container']}>
        <div id="text-content" className={styles['text-content']}>
          <div className={styles['main-text']}>
            <Paragraph
              title={dictionary['iam-paragraph'].title}
              text={dictionary['iam-paragraph'].text}
            />
            <Paragraph
              title={dictionary['ido-paragraph'].title}
              text={dictionary['ido-paragraph'].text}
            />
          </div>

          <div className={styles['closing-text']}>
            <p>{...closingText}</p>
          </div>

          <div className={styles['appeal-text']}>
            <p>{dictionary.appeal}</p>
          </div>
        </div>

        <div id="photo-content" className={styles['photo-content']}>
          <div className={styles['image-wrapper']}>
            <Image
              className={styles.portrait}
              src="/images/about/photo-min.jpg"
              width={344}
              height={443}
              alt="portrait"
            />
          </div>
          <div className={styles['button-wrapper']}>
            <ButtonLink href={`/${currentLang}/contact`}>
              <Image
                src="/icons/light/send.svg"
                alt="send-icon"
                className="icon"
                width={24}
                height={24}
                priority
              />
              {dictionary.getInTouch}
            </ButtonLink>
          </div>
        </div>

        <div className={styles['button-wrapper--outside']}>
          <ButtonLink href={`/${currentLang}/contact`}>
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
    </div>
  );
};

export default Content;
