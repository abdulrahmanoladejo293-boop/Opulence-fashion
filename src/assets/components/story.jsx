import React from 'react';
import { motion } from 'framer-motion';
import Heritage from '../components/heritage';
import Weapons from '../components/weapons';
import studioWorkspace from '../tailor.jpg';
import styles from './story.module.css';

export default function Story() {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.storyWrapper}>
      
      {}
      <header className={styles.storyHeader}>
        <div className={styles.headerContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.titleBlock}
          >
            <span className={styles.goldToken}>🌿</span>
            <h1 className={styles.mainTitle}>The Opulence Story</h1>
            <p className={styles.subtitle}>
              An uncompromised exploration of material permanence, physical geometry, and slow craft.
            </p>
          </motion.div>
        </div>
      </header>

      {}
      <Heritage />

      {}
      <section className={styles.studioShowcase}>
        <div className={styles.imageFrame}>
          <img 
            src={studioWorkspace} 
            alt="Interior view of our physical sewing studio workshop filled with bolts of luxury fabric" 
            className={styles.studioImage}
          />
          <div className={styles.atmosphericShadow}></div>
        </div>
        
        <div className={styles.bannerContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: transitionEase }}
            className={styles.bannerContent}
          >
            <span className={styles.bannerTag}>The Workspace</span>
            <h2 className={styles.bannerHeadline}>Where Time Slows Down</h2>
            <p className={styles.bannerText}>
              Our studio space operates outside the noise of global retail trends. Here, bolts of organic linen and cashmere wool rest silently, waiting to adapt to your physical dimensions.
            </p>
          </motion.div>
        </div>
      </section>

      {}
      <Weapons />

    </div>
  );
}
