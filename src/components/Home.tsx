
"use client";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const title = "Generative AI";

  const imageRef = useRef(null);
  const cardsRef = useRef(null);
  const textRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: false }); 
  const areCardsInView = useInView(cardsRef, { once: false }); 
  const isTextInView = useInView(textRef, { once: false }); 

  return (
    <>
      {/* Background Video */}
      <div className={styles.backgroundVideo}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Section */}
      <div className={styles.homeContainer}>
        {/* Text Content */}
        <div className={styles.homeText} ref={textRef}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 50 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 1.2, 
              ease: "easeInOut",
            }}
          >
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  repeat: 0, 
                }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: title.length * 0.05, 
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Your success starts here.
          </motion.p>
        </div>

        {/* Vector Image */}
        <motion.div
          className={styles.homeImage}
          ref={imageRef}
          initial={{ scale: 0.8 }}
          animate={isImageInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/hello.gif"
            alt="Vector Graphic"
            width={400}
            height={400}
            className={styles.helloImage}
          />
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className={styles.cardsContainer}
        ref={cardsRef}
        initial="hidden"
        animate={areCardsInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className={styles.cardsSection}>
          {[
            {
              title: "Generative AI",
              description: "Generative AI focuses on creating new content, like images, music, and text. It has transformed various industries including entertainment and design."
            },
            {
              title: "AI Applications",
              description: "AI applications span across industries such as healthcare, education, and business, revolutionizing how we work and interact with technology."
            },
            {
              title: "Get Started with AI",
              description: "Starting with AI involves understanding its basics and exploring different tools and platforms to develop intelligent systems and solutions."
            },
            {
              title: "AI for Business",
              description: "AI is transforming the business world by optimizing operations, enhancing customer experiences, and enabling better decision-making."
            },
            {
              title: "AI in Healthcare",
              description: "AI is making breakthroughs in healthcare, from diagnostics to personalized treatments, improving patient outcomes and medical research."
            },
            {
              title: "AI and Future Trends",
              description: "The future of AI looks promising with advancements in natural language processing, robotics, and ethical AI, shaping our future."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={areCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: 1 + index * 0.3, 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

