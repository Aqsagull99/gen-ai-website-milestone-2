"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../styles/works.module.css';

const Works = () => {
  
  const textAnimation = (delay: number) => ({
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay, type: 'spring', stiffness: 30 },
  });

  return (
    <>
      <Head>
        <title>How Generative AI Works</title>
        <meta name="description" content="Learn how Generative AI models work" />
      </Head>
      <div className={styles.container}>
        <main className={styles.cardsContainer}>
          <video className={styles.videoBackground} autoPlay loop muted>
            <source src="hero-video.mp4" type="video/mp4" />
          </video>

          <section className={styles.cardsSection}>
            <motion.h2 className={styles.sectionTitle} {...textAnimation(0.2)}>
              Understanding the Technology
            </motion.h2>
            <motion.p className={styles.paragraph} {...textAnimation(0.4)}>
              Generative AI uses neural networks to learn patterns and generate new content...
            </motion.p>

            <motion.h3 className={styles.subTitle} {...textAnimation(0.6)}>
              Step 1: Training on Data
            </motion.h3>
            <motion.p className={styles.paragraph} {...textAnimation(0.8)}>
              Models like GPT are trained on large datasets...
            </motion.p>

            <motion.h3 className={styles.subTitle} {...textAnimation(1.0)}>
              Step 2: Model Fine-Tuning
            </motion.h3>
            <motion.p className={styles.paragraph} {...textAnimation(1.2)}>
              After initial training, models undergo fine-tuning to improve performance on specific tasks...
            </motion.p>

            
            
            <motion.h3 className={styles.subTitle} {...textAnimation(1.4)}>
              Step 3: Generating Outputs
            </motion.h3>
            <motion.p className={styles.paragraph} {...textAnimation(1.6)}>
              Once trained, models can generate outputs by predicting the next words in a sequence...
            </motion.p>

            <motion.h3 className={styles.subTitle} {...textAnimation(1.8)}>
              Step 4: Evaluation and Feedback
            </motion.h3>
            <motion.p className={styles.paragraph} {...textAnimation(2.0)}>
              Generated content is evaluated based on various metrics, and feedback is used to improve ...
            </motion.p>

      
          </section>
        </main>
      </div>
    </>
  );
};

export default Works;  