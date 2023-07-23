import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
