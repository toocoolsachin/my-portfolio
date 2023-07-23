import styles from './Experience.module.scss';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';
import { data } from '../../data/experience';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h1>Work Experience</h1>

      {data.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </section>
  );
}
