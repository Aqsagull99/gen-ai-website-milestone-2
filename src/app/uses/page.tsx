"use client"; 
import Head from 'next/head';
import styles from '../../styles/uses.module.css';

const UseCases = () => (
  <>
    <Head>
      <title>Generative AI Use Cases</title>
      <meta name="description" content="Explore real-world applications of Generative AI" />
    </Head>
    
    {/* Background Video */}
    <video className={styles.videoBackground} autoPlay loop muted>
      <source src="hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>


    <main>
      <section>
        <h2 className={styles.sectionTitle}>Generative AI Use Cases</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <img src="/content_creation.jpg" className={styles.cardImage} alt="Content Creation" />
            <h3 className={styles.cardTitle}>Content Creation</h3>
            <p className={styles.cardDescription}>Automatically generate articles, blogs, and social media posts.</p>
          </div>
          <div className={styles.card}>
            <img src="/image_generation.jpg" className={styles.cardImage} alt="Image Generation" />
            <h3 className={styles.cardTitle}>Image Generation</h3>
            <p className={styles.cardDescription}>Create unique images or art based on textual descriptions.</p>
          </div>
          <div className={styles.card}>
            <img src="/music_composition.jpg" className={styles.cardImage} alt="Music Composition" />
            <h3 className={styles.cardTitle}>Music Composition</h3>
            <p className={styles.cardDescription}>Compose original music tracks using AI algorithms.</p>
          </div>
          <div className={styles.card}>
            <img src="/video_generation.jpg" className={styles.cardImage} alt="Video Generation" />
            <h3 className={styles.cardTitle}>Video Generation</h3>
            <p className={styles.cardDescription}>Generate videos and animations from text prompts or scripts.</p>
          </div>
          <div className={styles.card}>
            <img src="/chatbots.jpg" className={styles.cardImage} alt="Chatbots and Virtual Assistants" />
            <h3 className={styles.cardTitle}>Chatbots and Virtual Assistants</h3>
            <p className={styles.cardDescription}>Build conversational agents that can interact naturally with users.</p>
          </div>
          <div className={styles.card}>
            <img src="/code_generation.jpg" className={styles.cardImage} alt="Code Generation" />
            <h3 className={styles.cardTitle}>Code Generation</h3>
            <p className={styles.cardDescription}>Automate the creation of code snippets or entire applications from specifications.</p>
          </div>
          <div className={styles.card}>
            <img src="/game_design.jpg" className={styles.cardImage} alt="Game Design" />
            <h3 className={styles.cardTitle}>Game Design</h3>
            <p className={styles.cardDescription}>Create dynamic game content, including levels and character designs.</p>
          </div>
          <div className={styles.card}>
            <img src="/personalization.jpg" className={styles.cardImage} alt="Personalization" />
            <h3 className={styles.cardTitle}>Personalization</h3>
            <p className={styles.cardDescription}>Tailor recommendations for users based on their preferences and behavior.</p>
          </div>
        </div>
      </section>
    </main>

  </>


);

export default UseCases;




