import React from 'react';
import { motion } from 'framer-motion';
import Masonry from '../components/masonry';
import Zoom from '../components/zoom';
import styles from './work.module.css';

export default function Work() {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.lookbookWrapper}>
      
      {/* Dynamic Collection Header Intro Block */}
      <header className={styles.lookbookHeader}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.titleStack}
          >
            <span className={styles.tagline}>The Exhibition</span>
            <h1 className={styles.mainTitle}>The Seasonal Lookbook</h1>
            <div className={styles.stitchLine}></div>
            <p className={styles.description}>
              A visual examination of silhouettes created within our studio walls. Each piece represents an uncompromised balance between structural geometry and luxury textile weight.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Exhibition Content Wrap */}
      <main className={styles.lookbookMain}>
        <div className={styles.container}>
          {/* Step 10: Asymmetrical Grid Element Block */}
          <Masonry />
        </div>
      </main>

      {/* Micro-Craft Focus Showcase Wrap */}
      <section className={styles.macroShowcase}>
        {/* Step 11: Close-Up Zoom Slider Element Block */}
        <Zoom />
      </section>

    </div>
  );
}
