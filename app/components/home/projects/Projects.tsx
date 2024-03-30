import styles from './Projects.module.scss';
import Item from '@/app/components/home/projects/Item';
import { WORKS } from '@/app/constants/content/home';

const Projects = () => {
  const works = WORKS.map((work) => <Item work={work} />);

  return (
    <section id='projects' className={'container ' + styles.container}>
      <h2 className="title">Selected work</h2>
      {works}
    </section>
  );
};

export default Projects;
