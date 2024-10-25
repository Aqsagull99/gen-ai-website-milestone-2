"use client"; 
import React from 'react';
import { motion } from 'framer-motion'; 
import styles from '../styles/FunFacts.module.css'; 

const FunFacts = () => {
  const facts = [
    "AI can generate human-like text.",
    "Generative AI is used in art and music creation.",
    "Models like GPT-3 can understand context.",
    "Generative AI can create realistic images."
  ];

  return (
    <div className={styles.funFactsSection} id="fun-facts-section">
      <h2 className={styles.sectionTitle}>Fun Facts About Generative AI</h2>
      <div className={styles.factsContainer}>
        {facts.map((fact, index) => (
          <motion.div
            className={styles.factCard}
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: false }}  
          >
            <p className={styles.factText}>{fact}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
