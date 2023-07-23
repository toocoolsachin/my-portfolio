import Image from 'next/image';
import styles from './ExperienceItem.module.scss';

export default function ExperienceItem({ experience }: any) {
  const { designation, company, companyLogo, tenure, role, skills } =
    experience;

  return (
    <div className={styles.experience}>
      <h2>{designation}</h2>
      <p className={styles.company}>
        <Image
          src={companyLogo}
          alt={company}
          width={30}
          height={30}
          className={styles.logo}
        />{' '}
        <span className={styles.companyname}>{company}</span>
      </p>
      <p>{tenure}</p>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <span>
          <strong>Skills used:</strong>{' '}
        </span>
        <span>{skills}</span>
      </p>
    </div>
  );
}
