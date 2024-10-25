
"use client"; 

import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../styles/about.module.css';

const About = () => {
  // Animation configuration for each text element
  const textAnimation = (delay: number) => ({
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay, duration: 1.5, type: 'spring', stiffness: 30 },
  });

  return (
    <>
      <Head>
        <title>About Generative AI</title>
        <meta name="description" content="What is Generative AI and its applications" />
      </Head>

      <main className={styles.mainContainer}>
        {/* Background Video */}
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src="hero-video.mp4" type="video/mp4" />
      
        </video>

        <div className={styles.aboutContainer}>
          <section>
            <motion.h2 {...textAnimation(0.2)}>What is Generative AI?</motion.h2>
            <motion.p {...textAnimation(0.4)}>
              Generative AI is a branch of artificial intelligence that focuses on creating content such as text, images, and more.
              It uses advanced algorithms to understand patterns in data and generate new content based on that understanding.
            </motion.p>
          </section>
          <section>
            <motion.h3 {...textAnimation(0.6)}>Applications</motion.h3>
            <motion.ul {...textAnimation(0.8)}>
              <motion.li {...textAnimation(1.0)}>Image Generation (DALL·E)</motion.li>
              <motion.li {...textAnimation(1.2)}>Text Generation (GPT models)</motion.li>
              <motion.li {...textAnimation(1.4)}>Music and Art Generation</motion.li>
              <motion.li {...textAnimation(1.6)}>Data Augmentation in Machine Learning</motion.li>
              <motion.li {...textAnimation(1.8)}>And more...</motion.li>
            </motion.ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
