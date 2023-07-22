import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1>
          <a href="/">Sachin Koli</a>
        </h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
