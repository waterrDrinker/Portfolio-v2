import styles from './Projects.module.scss';
import Item from '@/app/[lang]/components/home/projects/Item';
import { type getDictionary } from '@/get-dictionary';

const Projects = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['projects']
}) => {
  const worksArray = Array.isArray(dictionary.works) ? dictionary.works : [dictionary.works]
  const works = worksArray.map((work) => <Item key={work.id} work={work} />);
  
  return (
    <section id='projects' className={'container ' + styles.container}>
      <h2 className="title">{dictionary.title}</h2>
      {works}
    </section>
  );
};

export default Projects;
