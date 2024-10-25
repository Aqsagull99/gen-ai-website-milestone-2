import styles from '../styles/Footer.module.css';  
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footer} id='contact-section'>
    <div className={styles.footerContent}>
      <div className={styles.scan}>
        <Image
          src="/scan.gif" 
          alt="Animated Illustration"
           width={300}
           height={300}
           className={styles.scanImage}
        />
      </div>
      <p>© 2024 Generative AI Website. All Rights Reserved.</p>
      <p>Developed by Aqsa Gull - Web Developer & AI Enthusiast</p>
      <p>Skills: HTML | CSS | JavaScript | TypeScript | Tailwind CSS | Next.js | AI | Web 3.0</p> 
      <div className={styles.icons}>
        <a href=" https://github.com/Aqsagull99" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href=" https://www.linkedin.com/in/aqsa-gullofficial99 " target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
