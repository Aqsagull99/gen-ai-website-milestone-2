

"use client"; 
import React from 'react';
import { motion } from 'framer-motion'; 
import styles from '../styles/Video.module.css';

const Video = () => {
  return (
    <div className={styles.videoContainer} id='ai-intro-section'>
      {/* Text (Heading) animation */}
      <motion.h2
        className={styles.title}
        initial={{ x: -100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} 
      >
        Watch Our Artificial Intelligence Introduction
      </motion.h2>

      {/* Video animation (after text appears) */}
      <motion.video
        className={styles.video}
        src="/Ai-2.mp4"
        title="Video Introduction"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        initial={{ x: -100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }} 
        viewport={{ once: false }} 
      />
    </div>
  );
};

export default Video;
