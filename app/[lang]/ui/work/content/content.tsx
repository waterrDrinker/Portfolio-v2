import { type getDictionary } from '@/get-dictionary';
import styles from './content.module.scss';
import { Locale } from '@/i18n-config';
import ProjectCard from './project-card';

const Content = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['projects'];
  currentLang: Locale;
}) => {
  const worksArray = Array.isArray(dictionary.works) ? dictionary.works : [dictionary.works]
  const works = worksArray.map((work) => <ProjectCard key={work.id} work={work} />);
  
  return (
    <section id='projects' className={styles['page-container']}>
      <div className={styles['content-container']}>
        {works}
        <ProjectCard placeholder={dictionary.placeholder} currentLang={currentLang} />
      </div>
    </section>
  );
};

export default Content;
